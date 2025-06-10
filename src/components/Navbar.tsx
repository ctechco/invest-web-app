
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { LogoLink } from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
        <div className="flex justify-center items-center">
          <LogoLink to="/" size="sm" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
