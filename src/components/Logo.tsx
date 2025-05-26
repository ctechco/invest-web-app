
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '', id }) => {
  const isMobile = useIsMobile();
  const defaultSize = isMobile ? 'sm' : 'md';
  const activeSize = size || defaultSize;
  
  // Size mapping for different variants
  const sizeMap = {
    sm: {
      full: { width: 200, height: 80 },
      icon: { width: 60, height: 60 },
      text: { width: 160, height: 40 }
    },
    md: {
      full: { width: 240, height: 96 },
      icon: { width: 80, height: 80 },
      text: { width: 200, height: 50 }
    },
    lg: {
      full: { width: 320, height: 128 },
      icon: { width: 100, height: 100 },
      text: { width: 240, height: 60 }
    }
  };
  
  const { width, height } = sizeMap[activeSize][variant];
  
  // Base classes
  let logoClasses = `${className}`;
  
  // Icon-only logo component
  if (variant === 'icon') {
    return (
      <img 
        src="/lovable-uploads/b1d835a3-1304-41f7-8a55-5b520e3278a4.png"
        alt="Future Wave"
        width={width} 
        height={height}
        className={`object-contain ${logoClasses}`}
        id={id}
      />
    );
  }
  
  // Text-only logo component
  if (variant === 'text') {
    return (
      <div className={`flex items-center ${logoClasses}`} id={id}>
        <span 
          style={{ width: width, height: height }}
          className="text-[#9b87f5] font-bold flex items-center justify-center text-lg"
        >
          FUTURE WAVE
        </span>
      </div>
    );
  }
  
  // Full logo (default) - uses the uploaded image
  return (
    <img 
      src="/lovable-uploads/b1d835a3-1304-41f7-8a55-5b520e3278a4.png"
      alt="Future Wave"
      width={width} 
      height={height}
      className={`object-contain ${logoClasses}`}
      id={id}
    />
  );
};

// For use in navigation
export const LogoLink: React.FC<LogoProps & { to?: string }> = ({ 
  to = "/", 
  variant = "full",
  size,
  className = "",
  id,
}) => {
  return (
    <Link to={to} className={`inline-block ${className}`}>
      <Logo variant={variant} size={size} id={id} />
    </Link>
  );
};

export default Logo;
