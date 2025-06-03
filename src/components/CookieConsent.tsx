
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="shadow-lg border-2 border-[#9b87f5]">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-gray-800">Cookie Notice</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleClose}
              className="h-6 w-6 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button 
              onClick={handleAccept}
              className="bg-[#9b87f5] hover:bg-[#8a74e8] text-white flex-1"
            >
              Accept All
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline" 
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white flex-1"
            >
              Decline
            </Button>
          </div>
          <div className="mt-2 text-center">
            <Link 
              to="/cookie-policy" 
              className="text-xs text-[#9b87f5] hover:underline"
            >
              Learn more about our cookie policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
