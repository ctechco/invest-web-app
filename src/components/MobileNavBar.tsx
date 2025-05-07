
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Users, MessageSquare } from 'lucide-react';

const MobileNavBar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 safe-area-bottom z-40">
      <div className="flex justify-around items-center h-16">
        <NavItem 
          to="/" 
          icon={<Home className="w-6 h-6" />} 
          label="Home" 
          isActive={location.pathname === '/'} 
        />
        <NavItem 
          to="/services" 
          icon={<Briefcase className="w-6 h-6" />} 
          label="Services" 
          isActive={location.pathname === '/services'} 
        />
        <NavItem 
          to="/about" 
          icon={<Users className="w-6 h-6" />} 
          label="About" 
          isActive={location.pathname === '/about'} 
        />
        <NavItem 
          to="/contact" 
          icon={<MessageSquare className="w-6 h-6" />} 
          label="Contact" 
          isActive={location.pathname === '/contact'} 
        />
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center w-full p-1 ${
        isActive ? 'text-quan-blue' : 'text-gray-500'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default MobileNavBar;
