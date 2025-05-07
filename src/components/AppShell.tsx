
import React from 'react';
import MobileNavBar from '@/components/MobileNavBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pb-16">
        {children}
      </main>
      {isMobile && <MobileNavBar />}
    </div>
  );
};

export default AppShell;
