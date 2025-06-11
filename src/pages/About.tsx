
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="About Us" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        {/* Our Story Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold heading-gradient mb-8 text-center">Our Story</h2>
            </div>
          </div>
        </section>
        
        {/* Our Story Content */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  Founded in 2008, Future Wave was established with a clear vision: to provide exceptional financial advice and investment services that truly put clients first. Our founders, having witnessed the impact of the global financial crisis, were determined to create a firm that operated with transparency, integrity, and a genuine commitment to client success.
                </p>
                
                <p className="text-lg mb-4">
                  What began as a small team of dedicated professionals has grown into a respected financial institution with a global presence. Throughout our journey, we've maintained our core values while adapting to the ever-changing financial landscape.
                </p>
                
                <p className="text-lg mb-4">
                  Today, Future Wave serves a diverse clientele from individuals and families to corporations and institutions. Our comprehensive approach to wealth management combines traditional financial wisdom with innovative strategies, allowing us to deliver consistent, long-term results for our clients.
                </p>
                
                <p className="text-lg">
                  Despite our growth, we've never lost sight of our most important asset: the trust our clients place in us. Every decision we make and strategy we implement is guided by our commitment to safeguarding and growing our clients' wealth, ensuring they achieve their financial goals and secure their future.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold heading-gradient mb-8 text-center">Our Core Values</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-50 p-3 w-fit rounded-full mb-4">
                    <CheckCircle className="h-6 w-6 text-futurewave-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-futurewave-purple">Integrity</h3>
                  <p className="text-gray-700">
                    We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction with our clients and partners.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-50 p-3 w-fit rounded-full mb-4">
                    <Users className="h-6 w-6 text-futurewave-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-futurewave-purple">Client Focus</h3>
                  <p className="text-gray-700">
                    Our clients' interests always come first. We take time to understand their unique needs and goals, crafting personalized strategies for their success.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-50 p-3 w-fit rounded-full mb-4">
                    <TrendingUp className="h-6 w-6 text-futurewave-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-futurewave-purple">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in every aspect of our operations, continuously enhancing our expertise, services, and the value we provide to our clients.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-50 p-3 w-fit rounded-full mb-4">
                    <Award className="h-6 w-6 text-futurewave-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-futurewave-purple">Innovation</h3>
                  <p className="text-gray-700">
                    We embrace change and continuously seek innovative solutions to enhance our services and adapt to evolving market conditions and client needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
