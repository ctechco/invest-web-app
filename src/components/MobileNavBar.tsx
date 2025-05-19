
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, PieChart, BookOpen, MessageSquare, User } from 'lucide-react';

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
          to="/dashboard" 
          icon={<PieChart className="w-6 h-6" />} 
          label="Dashboard" 
          isActive={location.pathname === '/dashboard'} 
        />
        <NavItem 
          to="/market-data" 
          icon={<BarChart2 className="w-6 h-6" />} 
          label="Markets" 
          isActive={location.pathname === '/market-data'} 
        />
        <NavItem 
          to="/education" 
          icon={<BookOpen className="w-6 h-6" />} 
          label="Learn" 
          isActive={location.pathname === '/education'} 
        />
        <NavItem 
          to="/support" 
          icon={<MessageSquare className="w-6 h-6" />} 
          label="Support" 
          isActive={location.pathname === '/support'} 
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
        isActive ? 'text-[#9b87f5]' : 'text-gray-500'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default MobileNavBar;
