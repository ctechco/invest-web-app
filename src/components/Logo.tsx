
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
  
  // Size mapping for different variants (increased by 25% from previous reduced sizes)
  const sizeMap = {
    sm: {
      full: { width: 88, height: 35 },
      icon: { width: 26, height: 26 },
      text: { width: 70, height: 18 }
    },
    md: {
      full: { width: 105, height: 43 },
      icon: { width: 35, height: 35 },
      text: { width: 88, height: 23 }
    },
    lg: {
      full: { width: 140, height: 56 },
      icon: { width: 44, height: 44 },
      text: { width: 105, height: 26 }
    }
  };
  
  const { width, height } = sizeMap[activeSize][variant];
  
  // Base classes
  let logoClasses = `${className}`;
  
  // Icon-only logo component
  if (variant === 'icon') {
    return (
      <img 
        src="/lovable-uploads/1f9a4c03-1c8b-4351-839e-6302002f6040.png"
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
          className="text-[#9b87f5] font-bold flex items-center justify-center text-sm"
        >
          FUTURE WAVE
        </span>
      </div>
    );
  }
  
  // Full logo (default) - uses the uploaded image
  return (
    <img 
      src="/lovable-uploads/1f9a4c03-1c8b-4351-839e-6302002f6040.png"
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
