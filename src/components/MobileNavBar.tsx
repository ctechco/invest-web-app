
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, PieChart, BookOpen, MoreHorizontal, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        <MoreMenu />
      </div>
    </nav>
  );
};

const MoreMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex flex-col items-center justify-center w-full p-1 text-gray-500">
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xs mt-1">More</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 mb-2">
        <DropdownMenuItem asChild>
          <Link to="/support" className="w-full">Support</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/about" className="w-full">About Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/services" className="w-full">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/contact" className="w-full">Contact</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/auth" className="w-full">Get Started</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
