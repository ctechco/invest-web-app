
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
  
  // Size mapping for different variants (reduced by 30%)
  const sizeMap = {
    sm: {
      full: { width: 70, height: 28 },
      icon: { width: 21, height: 21 },
      text: { width: 56, height: 14 }
    },
    md: {
      full: { width: 84, height: 34 },
      icon: { width: 28, height: 28 },
      text: { width: 70, height: 18 }
    },
    lg: {
      full: { width: 112, height: 45 },
      icon: { width: 35, height: 35 },
      text: { width: 84, height: 21 }
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
