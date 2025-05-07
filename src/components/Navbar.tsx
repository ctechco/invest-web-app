
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-quan-blue">
              Quan <span className="text-quan-gold">Financial</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-quan-blue transition-colors">
              About Us
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Services
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Contact
            </Link>
            <Button className="btn-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-quan-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <Link to="/" className="block py-2 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              About Us
            </Link>
            <Link to="/services" className="block py-2 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Services
            </Link>
            <Link to="/contact" className="block py-2 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Contact
            </Link>
            <div className="mt-3">
              <Button className="btn-primary w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
