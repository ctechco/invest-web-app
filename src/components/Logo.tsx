
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
  
  // Size mapping for different variants - doubled sizes for icon and text
  const sizeMap = {
    sm: {
      full: { width: 200, height: 50 }, // Increased
      icon: { width: 64, height: 64 }, // Doubled
      text: { width: 280, height: 48 }  // Doubled
    },
    md: {
      full: { width: 240, height: 60 }, // Increased
      icon: { width: 80, height: 80 }, // Doubled
      text: { width: 360, height: 64 }  // Doubled
    },
    lg: {
      full: { width: 320, height: 80 }, // Increased
      icon: { width: 128, height: 128 }, // Doubled
      text: { width: 440, height: 80 }  // Doubled
    }
  };
  
  const { width, height } = sizeMap[activeSize][variant];
  
  // Base classes
  let logoClasses = `${className}`;
  
  // Icon-only logo component - the redesigned chart/wave logo with doubled size
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
        {/* Background */}
        <rect width="64" height="64" rx="12" fill="#9b87f5" className="transition-colors"/>
        
        {/* Chart/wave pattern inspired by the uploaded image */}
        <path 
          d="M8 45c2-8 4-4 8-12s6 4 10-2c4-6 6 2 10-3c4-5 6 10 10 2c4-8 5-2 10-8"
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom line representing baseline */}
        <path 
          d="M8 52h48" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* F styled as financial element */}
        <path
          d="M20 12h24M20 12v16M20 20h16"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  // Text-only logo component - doubled text size
  if (variant === 'text') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 440 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={logoClasses}
      >
        <text x="0" y="50" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="48" fill="#9b87f5">FUTURE</text>
        <text x="200" y="50" fontFamily="'Arial', sans-serif" fontWeight="300" fontSize="48" fill="#9b87f5">WAVE</text>
      </svg>
    );
  }
  
  // Full logo (default) - combines doubled icon and text with new design and line break before tagline
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 320 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={logoClasses}
    >
      {/* Logo Icon - Doubled size */}
      <g transform="translate(0,0) scale(1.3)">
        {/* Background */}
        <rect width="64" height="64" rx="12" fill="#9b87f5"/>
        
        {/* Chart/wave pattern inspired by the uploaded image */}
        <path 
          d="M8 45c2-8 4-4 8-12s6 4 10-2c4-6 6 2 10-3c4-5 6 10 10 2c4-8 5-2 10-8"
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom line representing baseline */}
        <path 
          d="M8 52h48" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* F styled as financial element */}
        <path
          d="M20 12h24M20 12v16M20 20h16"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Text - Doubled size */}
      <g transform="translate(90,20)">
        <text x="0" y="14" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="36" fill="#9b87f5">FUTURE</text>
        <text x="150" y="14" fontFamily="'Arial', sans-serif" fontWeight="300" fontSize="36" fill="#9b87f5">WAVE</text>
      </g>
      
      {/* Tagline - Same size but with line break (moved down) */}
      <g transform="translate(90,60)">
        <text x="0" y="0" fontFamily="'Arial', sans-serif" fontWeight="400" fontSize="10" fill="#666666">INVESTMENT SOLUTIONS</text>
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
