
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking a link on mobile
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} shadow-sm fixed w-full top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold text-quan-blue">
              Future Waves <span className="text-quan-gold">Investment</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
            <Button size={isMobile ? "sm" : "default"} className="btn-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-quan-blue focus:outline-none"
              aria-label="Toggle menu"
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
            <Link to="/" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              About Us
            </Link>
            <Link to="/services" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Services
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-quan-blue transition-colors">
              Contact
            </Link>
            <div className="mt-4">
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
