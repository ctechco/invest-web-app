import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { Share2, Twitter, Linkedin, Facebook, TrendingUp } from 'lucide-react';

interface SocialShareProps {
  portfolioValue?: number;
  performance?: string;
  symbol?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  portfolioValue = 0,
  performance = "+5.2%",
  symbol = "PORTFOLIO"
}) => {
  const [message, setMessage] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const { user } = useAuth();

  const defaultMessages = [
    "Just hit a new milestone with my investment portfolio! 🚀",
    "Loving the returns I'm seeing with Future Wave Investments! 📈",
    "Smart investing is paying off! Thanks to Future Wave Investments 💰",
    "Building wealth one smart investment at a time! 🎯"
  ];

  const shareToSocial = async (platform: 'twitter' | 'linkedin' | 'facebook') => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message to share",
        variant: "destructive",
      });
      return;
    }

    setIsSharing(true);
    try {
      const { data, error } = await supabase.functions.invoke('social-media-share', {
        body: {
          platform,
          message,
          investmentData: {
            symbol,
            performance,
            value: portfolioValue
          }
        },
      });

      if (error) throw error;

      // Open the share URL in a new window
      window.open(data.shareUrl, '_blank', 'width=600,height=400');
      
      toast({
        title: "Share Link Generated",
        description: `Your ${platform} share link has been opened!`,
      });

      setMessage(''); // Clear the message after sharing
    } catch (error) {
      console.error('Error generating share link:', error);
      toast({
        title: "Error",
        description: "Failed to generate share link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Share2 className="w-5 h-5 text-primary" />
          <span>Share Your Success</span>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>{performance}</span>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Portfolio Performance Display */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Portfolio Value</p>
              <p className="text-2xl font-bold text-green-600">
                ${portfolioValue.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Performance</p>
              <p className="text-xl font-bold text-green-600">{performance}</p>
            </div>
          </div>
        </div>

        {/* Quick Message Templates */}
        <div>
          <h3 className="text-sm font-medium mb-2">Quick Messages:</h3>
          <div className="grid grid-cols-1 gap-2">
            {defaultMessages.map((msg, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-left justify-start h-auto py-2 px-3"
                onClick={() => setMessage(msg)}
              >
                <span className="text-xs">{msg}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Message Input */}
        <div>
          <h3 className="text-sm font-medium mb-2">Custom Message:</h3>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your investment success story..."
            className="w-full"
            rows={3}
          />
        </div>

        {/* Social Media Buttons */}
        <div className="flex space-x-2">
          <Button
            onClick={() => shareToSocial('twitter')}
            disabled={isSharing || !message.trim()}
            className="flex-1 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white"
            size="sm"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          <Button
            onClick={() => shareToSocial('linkedin')}
            disabled={isSharing || !message.trim()}
            className="flex-1 bg-[#0077B5] hover:bg-[#005885] text-white"
            size="sm"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button
            onClick={() => shareToSocial('facebook')}
            disabled={isSharing || !message.trim()}
            className="flex-1 bg-[#1877F2] hover:bg-[#166fe5] text-white"
            size="sm"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
          <strong>Note:</strong> Your performance data will be included in the share. 
          Make sure you're comfortable sharing this information publicly.
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialShare;