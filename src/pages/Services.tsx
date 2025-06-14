
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/services/ProcessSection';
import { services } from '@/data/servicesData';

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Services" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-futurewave-purple mb-4">Comprehensive Financial Solutions</h2>
              <p className="text-lg text-gray-700">
                At Future Wave, we offer a wide range of specialized services tailored to meet your unique financial needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white rounded-lg">
                  <div className="p-6">
                    <div className="bg-blue-50 p-3 w-fit rounded-lg mb-4">
                      <service.icon className="h-6 w-6 text-futurewave-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <h4 className="font-semibold text-futurewave-purple mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ProcessSection />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
