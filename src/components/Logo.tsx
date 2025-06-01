
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
      full: { width: 100, height: 40 },
      icon: { width: 30, height: 30 },
      text: { width: 80, height: 20 }
    },
    md: {
      full: { width: 120, height: 48 },
      icon: { width: 40, height: 40 },
      text: { width: 100, height: 25 }
    },
    lg: {
      full: { width: 160, height: 64 },
      icon: { width: 50, height: 50 },
      text: { width: 120, height: 30 }
    }
  };
  
  const { width, height } = sizeMap[activeSize][variant];
  
  // Base classes
  let logoClasses = `${className}`;
  
  // Icon-only logo component
  if (variant === 'icon') {
    return (
      <img 
        src="/lovable-uploads/c9e3c602-ed82-49af-a594-6a1a7c0f69b3.png"
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
      src="/lovable-uploads/c9e3c602-ed82-49af-a594-6a1a7c0f69b3.png"
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
