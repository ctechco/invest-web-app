
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-futurewave-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg opacity-90">
                Our team of financial experts is ready to help you achieve your financial goals. Reach out to us today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Office Locations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold heading-gradient mb-12 text-center">Our Offices</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200">
                    {/* Map or office image placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <MapPin className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-futurewave-blue mb-3">London Headquarters</h3>
                    <address className="not-italic text-gray-700">
                      <p>123 Financial District</p>
                      <p>London, UK</p>
                      <p>EC4A 2BP</p>
                    </address>
                    <div className="mt-4">
                      <p className="text-gray-700"><strong>Phone:</strong> +44 20 1234 5678</p>
                      <p className="text-gray-700"><strong>Email:</strong> london@futurewave.com</p>
                    </div>
                    <div className="mt-4 flex items-start">
                      <Clock className="h-5 w-5 mr-2 text-futurewave-blue mt-0.5" />
                      <div>
                        <p className="font-medium text-futurewave-blue">Office Hours:</p>
                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-700">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200">
                    {/* Map or office image placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <MapPin className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-futurewave-blue mb-3">New York Office</h3>
                    <address className="not-italic text-gray-700">
                      <p>456 Wall Street</p>
                      <p>New York, NY</p>
                      <p>10005, USA</p>
                    </address>
                    <div className="mt-4">
                      <p className="text-gray-700"><strong>Phone:</strong> +1 (212) 555-6789</p>
                      <p className="text-gray-700"><strong>Email:</strong> newyork@futurewave.com</p>
                    </div>
                    <div className="mt-4 flex items-start">
                      <Clock className="h-5 w-5 mr-2 text-futurewave-blue mt-0.5" />
                      <div>
                        <p className="font-medium text-futurewave-blue">Office Hours:</p>
                        <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-700">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
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

export default Contact;
