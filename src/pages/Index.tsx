
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Quan Financial" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        <Hero />
        <Services />
        <AboutSection />
        <Testimonials />
        <ContactSection />
        <CTASection />
      </main>
      {!isMobile && <Footer />}
    </div>
  );
};

export default Index;
