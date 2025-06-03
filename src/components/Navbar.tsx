
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { LogoLink } from './Logo';

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
            <LogoLink to="/" size="sm" />
          </div>

          {/* Desktop Navigation - Using mobile nav links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Dashboard
            </Link>
            <Link to="/market-data" className="font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Markets
            </Link>
            <Link to="/education" className="font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Learn
            </Link>
            <Link to="/tools" className="font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Tools
            </Link>
            <Link to="/auth">
              <Button size="sm" className="btn-primary">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-futurewave-purple focus:outline-none"
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
            <Link to="/" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Home
            </Link>
            <Link to="/dashboard" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Dashboard
            </Link>
            <Link to="/market-data" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Markets
            </Link>
            <Link to="/education" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Learn
            </Link>
            <Link to="/tools" onClick={handleLinkClick} className="block py-3 font-medium text-gray-700 hover:text-futurewave-purple transition-colors">
              Tools
            </Link>
            <div className="mt-4">
              <Link to="/auth" onClick={handleLinkClick}>
                <Button className="btn-primary w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
