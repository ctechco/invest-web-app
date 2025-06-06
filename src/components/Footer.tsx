
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-futurewave-purple text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Section */}
        <div className="mb-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#9b87f5]">Contact Us</h2>
          <p className="text-center text-[#9b87f5] mb-8">
            Our team of financial experts is ready to help you achieve your financial goals. Reach out to us today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#9b87f5]/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center text-[#9b87f5]">
                <MapPin className="h-5 w-5 mr-2" />
                London Headquarters
              </h3>
              <address className="not-italic text-[#9b87f5] mb-4">
                <p>123 Financial District</p>
                <p>London, UK</p>
                <p>EC4A 2BP</p>
              </address>
              <div className="mb-4">
                <p className="flex items-center text-[#9b87f5]">
                  <Phone className="h-4 w-4 mr-2" />
                  <strong>Phone:</strong> +44 20 1234 5678
                </p>
                <p className="flex items-center text-[#9b87f5]">
                  <Mail className="h-4 w-4 mr-2" />
                  <strong>Email:</strong> london@futurewave.com
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-[#9b87f5]" />
                <div>
                  <p className="font-medium text-[#9b87f5]">Office Hours:</p>
                  <p className="text-[#9b87f5]">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-[#9b87f5]">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#9b87f5]/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center text-[#9b87f5]">
                <MapPin className="h-5 w-5 mr-2" />
                New York Office
              </h3>
              <address className="not-italic text-[#9b87f5] mb-4">
                <p>456 Wall Street</p>
                <p>New York, NY</p>
                <p>10005, USA</p>
              </address>
              <div className="mb-4">
                <p className="flex items-center text-[#9b87f5]">
                  <Phone className="h-4 w-4 mr-2" />
                  <strong>Phone:</strong> +1 (212) 555-6789
                </p>
                <p className="flex items-center text-[#9b87f5]">
                  <Mail className="h-4 w-4 mr-2" />
                  <strong>Email:</strong> newyork@futurewave.com
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-[#9b87f5]" />
                <div>
                  <p className="font-medium text-[#9b87f5]">Office Hours:</p>
                  <p className="text-[#9b87f5]">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-[#9b87f5]">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="full" size="md" />
            </div>
            <p className="text-white opacity-80 mb-4">
              Innovative investment solutions tailored to help you achieve your financial goals with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white opacity-80 hover:text-futurewave-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white opacity-80 hover:text-futurewave-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white opacity-80 hover:text-futurewave-accent transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-white opacity-80 hover:text-futurewave-accent transition-colors">Market Insights</Link></li>
              <li><Link to="/support" className="text-white opacity-80 hover:text-futurewave-accent transition-colors">Support</Link></li>
              <li><Link to="/auth" className="text-white opacity-80 hover:text-futurewave-accent transition-colors">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h3>
            <p className="text-white opacity-80 mb-4">Get the latest investment insights and market updates delivered to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow py-2 px-3 rounded-l-md focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-futurewave-accent text-white py-2 px-4 rounded-r-md hover:bg-[#8a955f] hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white opacity-80 text-sm">
            &copy; {currentYear} Future Wave. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white opacity-80 hover:text-futurewave-accent transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-white opacity-80 hover:text-futurewave-accent transition-colors text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white opacity-80 hover:text-futurewave-accent transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
