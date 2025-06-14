
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import LiveSupportChat from '@/components/LiveSupportChat';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Future Wave" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0 pb-20' : 'pt-20 pb-20'}`}>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <Link to="/market-data">
              <Button className="w-full h-20 bg-futurewave-purple hover:bg-futurewave-purple/90 flex flex-col items-center justify-center">
                <span className="text-lg font-medium">Market Data</span>
                <span className="text-xs">Check trends</span>
              </Button>
            </Link>
            <Link to="/tools">
              <Button className="w-full h-20 bg-white text-futurewave-purple border border-futurewave-purple hover:bg-gray-50 flex flex-col items-center justify-center">
                <span className="text-lg font-medium">Investment Tools</span>
                <span className="text-xs">Plan your future</span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="w-full h-20 bg-white text-futurewave-purple border border-futurewave-purple hover:bg-gray-50 flex flex-col items-center justify-center">
                <span className="text-lg font-medium">Dashboard</span>
                <span className="text-xs">Track investments</span>
              </Button>
            </Link>
          </div>
          <Services />
          <AboutSection />
          <CTASection />
        </div>
      </main>
      <Footer />
      <LiveSupportChat />
    </div>
  );
};

export default Index;
