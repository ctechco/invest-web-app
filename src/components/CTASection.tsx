
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const CTASection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 md:py-14 bg-quan-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Ready to Secure Your Financial Future?</h2>
          <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 px-2">
            Take the first step toward financial freedom. Schedule a consultation with our expert advisors today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size={isMobile ? "default" : "lg"} className="bg-quan-gold text-quan-blue hover:bg-amber-400 hover:text-quan-blue text-base md:text-lg px-5 md:px-8">
              <Link to="/contact" className="flex items-center">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-white text-white hover:bg-white/10 text-base md:text-lg px-5 md:px-8 mt-2 sm:mt-0">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
