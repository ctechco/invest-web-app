
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '' }) => {
  const isMobile = useIsMobile();
  const defaultSize = isMobile ? 'sm' : 'md';
  const activeSize = size || defaultSize;
  
  // Size mapping for different variants
  const sizeMap = {
    sm: {
      full: { width: 160, height: 40 },
      icon: { width: 32, height: 32 },
      text: { width: 140, height: 24 }
    },
    md: {
      full: { width: 200, height: 50 },
      icon: { width: 40, height: 40 },
      text: { width: 180, height: 32 }
    },
    lg: {
      full: { width: 240, height: 60 },
      icon: { width: 64, height: 64 },
      text: { width: 220, height: 40 }
    }
  };
  
  const { width, height } = sizeMap[activeSize][variant];
  
  // Base classes
  let logoClasses = `${className}`;
  
  // Icon-only logo component
  if (variant === 'icon') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={logoClasses}
      >
        {/* Waves symbol */}
        <path 
          d="M12 44C20 36 28 52 36 44C44 36 52 44 52 44" 
          stroke="#0d2b5e" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <path 
          d="M12 32C20 24 28 40 36 32C44 24 52 32 52 32" 
          stroke="#0d2b5e" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <path 
          d="M12 20C20 12 28 28 36 20C44 12 52 20 52 20" 
          stroke="#d4af37" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
      </svg>
    );
  }
  
  // Text-only logo component
  if (variant === 'text') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 220 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={logoClasses}
      >
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#0d2b5e">FUTURE WAVES</text>
        <text x="0" y="36" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="14" fill="#d4af37">INVESTMENT</text>
      </svg>
    );
  }
  
  // Full logo (default) - combines icon and text
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={logoClasses}
    >
      {/* Waves Symbol */}
      <g transform="translate(0,10) scale(0.65)">
        <path 
          d="M12 44C20 36 28 52 36 44C44 36 52 44 52 44" 
          stroke="#0d2b5e" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <path 
          d="M12 32C20 24 28 40 36 32C44 24 52 32 52 32" 
          stroke="#0d2b5e" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <path 
          d="M12 20C20 12 28 28 36 20C44 12 52 20 52 20" 
          stroke="#d4af37" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
      </g>
      
      {/* Text */}
      <g transform="translate(60,0)">
        <text x="0" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#0d2b5e">FUTURE WAVES</text>
        <text x="0" y="45" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="14" fill="#d4af37">INVESTMENT</text>
      </g>
    </svg>
  );
};

// For use in navigation
export const LogoLink: React.FC<LogoProps & { to?: string }> = ({ 
  to = "/", 
  variant = "full",
  size,
  className = ""
}) => {
  return (
    <Link to={to} className={`inline-block ${className}`}>
      <Logo variant={variant} size={size} />
    </Link>
  );
};

export default Logo;
