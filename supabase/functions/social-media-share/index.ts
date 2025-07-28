import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SocialShareRequest {
  platform: 'twitter' | 'linkedin' | 'facebook';
  message: string;
  investmentData?: {
    symbol: string;
    performance: string;
    value: number;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client for authentication
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get the authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    // Verify the user
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError || !user) {
      throw new Error("Unauthorized");
    }

    const { platform, message, investmentData }: SocialShareRequest = await req.json();

    // Create formatted message based on platform
    let formattedMessage = message;
    if (investmentData) {
      const { symbol, performance, value } = investmentData;
      formattedMessage = `${message}\n\n📊 ${symbol}: ${performance}\n💰 Portfolio Value: $${value.toLocaleString()}\n\n#InvestmentSuccess #FutureWaveInvestments`;
    }

    // Generate share URLs for different platforms
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(formattedMessage)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&summary=${encodeURIComponent(formattedMessage)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(formattedMessage)}`
    };

    // Log the share activity
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    await supabaseService.from("posts").insert({
      user_id: user.id,
      title: `Social Share - ${platform}`,
      content: formattedMessage,
    });

    return new Response(JSON.stringify({ 
      shareUrl: shareUrls[platform],
      message: "Share link generated successfully",
      platform,
      formattedMessage
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in social-media-share function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);