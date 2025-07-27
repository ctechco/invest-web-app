
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import { LogoLink } from './Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useAuth();

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

  return (
    <nav className={`${isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} shadow-sm fixed w-full top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left spacer to balance the layout */}
          <div className="flex items-center space-x-4 w-1/3">
            {/* Empty div for spacing */}
          </div>
          
          {/* Centered logo */}
          <div className="flex justify-center w-1/3">
            <LogoLink to="/" size="sm" />
          </div>
          
          {/* Right side navigation */}
          <div className="flex items-center justify-end space-x-4 w-1/3">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/investment-plans" className="text-gray-700 hover:text-primary transition-colors">
                Plans
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">
                How It Works
              </Link>
            </div>
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" className="text-futurewave-purple hover:bg-futurewave-purple/10">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-futurewave-purple hover:bg-futurewave-purple/90 text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
