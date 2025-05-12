
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

interface MobileHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title, showBackButton = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleBack = () => {
    if (location.pathname === '/') {
      // We're at home, nowhere to go back
      return;
    }
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm p-4 flex items-center">
      {showBackButton && location.pathname !== '/' && (
        <button 
          onClick={handleBack} 
          className="mr-4 p-1"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      {location.pathname === '/' ? (
        <div className="flex-1 flex justify-center">
          <Logo variant="full" size="sm" />
        </div>
      ) : (
        <h1 className="text-xl font-bold text-futurewave-purple flex-1 text-center">
          {title}
        </h1>
      )}
    </header>
  );
};

export default MobileHeader;
