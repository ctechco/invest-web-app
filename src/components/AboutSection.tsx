import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-futurewave-purple rounded-lg w-full h-[400px] lg:h-[500px] object-cover overflow-hidden relative">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Financial advisor team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Global Expertise</h3>
                <p className="opacity-90">Our team has successfully managed portfolios through multiple market cycles and economic conditions.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-6">About Future Waves Investment</h2>
            <p className="text-lg text-gray-700 mb-4">
              Future Waves Investment Ltd is a premier investment management firm dedicated to helping our clients achieve their financial goals through strategic investment solutions and wealth management services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded on principles of integrity, transparency, and client focus, we leverage decades of combined experience to navigate complex financial markets and deliver consistent results.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-futurewave-purple font-bold text-xl mb-1">Vision</div>
                <p className="text-gray-600">To be the trusted financial partner empowering clients to achieve their wealth goals.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-futurewave-purple font-bold text-xl mb-1">Mission</div>
                <p className="text-gray-600">Delivering exceptional investment strategies with integrity and personalized service.</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-futurewave-purple hover:bg-[#8a74e8] text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
