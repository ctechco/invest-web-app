
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-14 bg-quan-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
          <p className="text-lg opacity-90 mb-8">
            Take the first step toward financial freedom. Schedule a consultation with our expert advisors today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-quan-gold text-quan-blue hover:bg-amber-400 hover:text-quan-blue text-lg px-8">
              <Link to="/contact" className="flex items-center">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
