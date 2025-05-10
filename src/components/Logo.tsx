
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
  
  // Icon-only logo component - the redesigned chart/wave logo
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
          d="M12 40C14 36 16 42 20 38C24 34 28 44 32 40C36 36 40 42 44 38C48 34 52 40 54 36"
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom line representing baseline */}
        <path 
          d="M12 48h40" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* F styled as financial element */}
        <path
          d="M24 16h16M24 16v16M24 24h12"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
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
        <text x="0" y="25" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="24" fill="#9b87f5">FUTURE</text>
        <text x="100" y="25" fontFamily="'Arial', sans-serif" fontWeight="300" fontSize="24" fill="#9b87f5">WAVE</text>
      </svg>
    );
  }
  
  // Full logo (default) - combines icon and text with new design
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={logoClasses}
    >
      {/* Logo Icon */}
      <g transform="translate(0,0) scale(0.65)">
        {/* Background */}
        <rect width="64" height="64" rx="12" fill="#9b87f5"/>
        
        {/* Chart/wave pattern inspired by the uploaded image */}
        <path 
          d="M12 40C14 36 16 42 20 38C24 34 28 44 32 40C36 36 40 42 44 38C48 34 52 40 54 36"
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom line representing baseline */}
        <path 
          d="M12 48h40" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* F styled as financial element */}
        <path
          d="M24 16h16M24 16v16M24 24h12"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Text */}
      <g transform="translate(60,18)">
        <text x="0" y="14" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="18" fill="#9b87f5">FUTURE</text>
        <text x="75" y="14" fontFamily="'Arial', sans-serif" fontWeight="300" fontSize="18" fill="#9b87f5">WAVE</text>
      </g>
      
      {/* Tagline */}
      <g transform="translate(60,38)">
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
