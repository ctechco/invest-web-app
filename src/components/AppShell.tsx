
import React from 'react';
import MobileNavBar from '@/components/MobileNavBar';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pb-16">
        {children}
      </main>
      <MobileNavBar />
    </div>
  );
};

export default AppShell;
