
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Transaction } from '@/types/Transaction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import the dashboard components
import PortfolioValueCard from '@/components/dashboard/PortfolioValueCard';
import PerformanceCards from '@/components/dashboard/PerformanceCards';
import AssetAllocationCard from '@/components/dashboard/AssetAllocationCard';
import TransactionsSection from '@/components/dashboard/TransactionsSection';
import TransactionDetailModal from '@/components/dashboard/TransactionDetailModal';
import DepositModal from '@/components/dashboard/DepositModal';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useTransactions } from '@/hooks/useTransactions';

// Import the new AI and social features
import AIAdvisor from '@/components/AIAdvisor';
import SocialShare from '@/components/SocialShare';

const Dashboard = () => {
  const isMobile = useIsMobile();
  const { user } = useAuth();
  const { portfolioValue, dailyChange, monthlyReturn, addToPortfolio } = usePortfolio(24568.80);
  const { 
    transactions, 
    showAllTransactions, 
    setShowAllTransactions, 
    selectedTransaction, 
    isTransactionDetailOpen, 
    addTransaction, 
    handleTransactionClick,
    closeTransactionDetail
  } = useTransactions();
  
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  const handleDeposit = (amount: number) => {
    const newTransaction: Transaction = {
      id: `t-${Date.now()}`,
      type: 'Deposit',
      description: 'Manual Deposit',
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      amount,
      status: 'Completed',
      details: {
        source: 'Cash Balance',
      },
    };

    addTransaction(newTransaction);
    addToPortfolio(amount);
    setIsDepositModalOpen(false);
  };

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Investor';

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Dashboard" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0 pb-20' : 'pt-20'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-6 flex justify-between items-center flex-wrap gap-2">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {userName}</h2>
              <p className="text-gray-600">Here's what's happening with your investments today.</p>
            </div>
            <Button 
              onClick={() => setIsDepositModalOpen(true)}
              className="bg-futurewave-purple hover:bg-futurewave-purple/90"
            >
              Make a Deposit
            </Button>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ai-advisor">AI Advisor</TabsTrigger>
              <TabsTrigger value="social">Share</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              {/* Portfolio Value */}
              <PortfolioValueCard portfolioValue={portfolioValue} dailyChange={dailyChange} />
              
              {/* Performance Cards */}
              <PerformanceCards dailyChange={dailyChange} monthlyReturn={monthlyReturn} />
              
              {/* Asset Allocation */}
              <AssetAllocationCard />
            </TabsContent>
            
            <TabsContent value="ai-advisor" className="space-y-6">
              <AIAdvisor />
            </TabsContent>
            
            <TabsContent value="social" className="space-y-6">
              <SocialShare 
                portfolioValue={portfolioValue}
                performance={dailyChange.percentage > 0 ? `+${dailyChange.percentage}%` : `${dailyChange.percentage}%`}
                symbol="PORTFOLIO"
              />
            </TabsContent>
            
            <TabsContent value="transactions" className="space-y-6">
              {/* Transactions */}
              <TransactionsSection
                transactions={transactions}
                showAllTransactions={showAllTransactions}
                onShowAllTransactions={() => setShowAllTransactions(true)}
                onHideAllTransactions={() => setShowAllTransactions(false)}
                onTransactionClick={handleTransactionClick}
              />
              
              {/* View All Button */}
              {!showAllTransactions && (
                <div className="mt-6 text-center">
                  <Button 
                    className="bg-[#9b87f5] text-white hover:bg-[#8a74e8]"
                    onClick={() => setShowAllTransactions(true)}
                  >
                    View All Transactions
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Transaction Detail Modal */}
          <TransactionDetailModal
            transaction={selectedTransaction}
            isOpen={isTransactionDetailOpen}
            onClose={closeTransactionDetail}
          />

          {/* Deposit Modal */}
          <DepositModal
            isOpen={isDepositModalOpen}
            onClose={() => setIsDepositModalOpen(false)}
            onDeposit={handleDeposit}
          />
        </div>
      </main>
      <Footer />
      {isMobile && <MobileNavBar />}
    </div>
  );
};

export default Dashboard;
