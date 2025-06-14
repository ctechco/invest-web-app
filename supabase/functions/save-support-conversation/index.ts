
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { conversationId, visitorEmail, messages } = await req.json()

    // The Supabase client is created with the service role key to bypass RLS.
    // The environment variables are securely injected by the Supabase platform.
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (!visitorEmail || !messages) {
      throw new Error('visitorEmail and messages are required.')
    }

    let data, error;

    if (conversationId) {
      // Update existing conversation
      const { data: updateData, error: updateError } = await supabaseAdmin
        .from('support_conversations')
        .update({ messages: messages })
        .eq('id', conversationId)
        .select()
        .single()
      
      data = updateData
      error = updateError
    } else {
      // Create new conversation
      const { data: insertData, error: insertError } = await supabaseAdmin
        .from('support_conversations')
        .insert({ visitor_email: visitorEmail, messages: messages })
        .select()
        .single()

      data = insertData
      error = insertError
    }

    if (error) {
      console.error('Supabase error:', error)
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
