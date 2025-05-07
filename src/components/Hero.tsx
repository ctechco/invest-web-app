
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-gradient-to-r from-quan-blue to-blue-900 text-white pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOC0xLjc5LTQtNC00cy00IDEuNzkyLTQgNCAyLjc5IDQgNCA0YzIuMjEgMCA0LTEuNzkyIDQtNHptMi0xMmMwIDIuMjA4IDEuNzkgNCA0IDRzNC0xLjc5MiA0LTQtMS43OS00LTQtNC00IDEuNzkyLTQgNHptLTI0IDEyYzAgMi4yMDggMS43OSA0IDQgNHM0LTEuNzkyIDQtNC0xLjc5LTQtNC00LTQgMS43OTItNCA0em0yLTEyYzAgMi4yMDggMS43OSA0IDQgNHM0LTEuNzkyIDQtNC0xLjc5LTQtNC00LTQgMS43OTItNCA0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Secure Your Financial Future
          </h1>
          <p className="text-base md:text-lg lg:text-xl opacity-90 mb-6 md:mb-8 px-1">
            Expert financial strategies and diversified investments to help you build and preserve wealth for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size={isMobile ? "default" : "lg"} className="bg-quan-gold text-quan-blue hover:bg-amber-400 hover:text-quan-blue text-base md:text-lg px-5 md:px-8">
              Start Investing
            </Button>
            <Button size={isMobile ? "default" : "lg"} className="bg-transparent border border-white text-white hover:bg-white/10 text-base md:text-lg px-5 md:px-8">
              <Link to="/contact" className="flex items-center">
                Talk to an Advisor <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="p-3 md:p-4">
              <div className="text-quan-gold text-2xl md:text-3xl font-bold">$2.5B+</div>
              <div className="text-xs md:text-sm opacity-80">Assets Under Management</div>
            </div>
            <div className="p-3 md:p-4">
              <div className="text-quan-gold text-2xl md:text-3xl font-bold">1000+</div>
              <div className="text-xs md:text-sm opacity-80">Satisfied Clients</div>
            </div>
            <div className="p-3 md:p-4">
              <div className="text-quan-gold text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-xs md:text-sm opacity-80">Years Experience</div>
            </div>
            <div className="p-3 md:p-4">
              <div className="text-quan-gold text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-xs md:text-sm opacity-80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
