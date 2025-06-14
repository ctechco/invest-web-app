
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const CTASection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 md:py-14 bg-futurewave-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">Ready to Secure Your Financial Future?</h2>
          <p className="text-base md:text-lg text-white opacity-90 mb-6 md:mb-8 px-2">
            Take the first step toward financial freedom. Schedule a consultation with our expert advisors today.
          </p>
          <div className="flex justify-center">
            <Link to="/services">
              <Button size={isMobile ? "default" : "lg"} className="bg-futurewave-accent text-white hover:bg-[#8a955f] hover:text-white text-base md:text-lg px-5 md:px-8">
                Learn More About Our Services <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
