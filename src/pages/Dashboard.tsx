
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import MobileNavBar from '@/components/MobileNavBar';
import { Transaction } from '@/types/Transaction';

// Import the new components
import PortfolioValueCard from '@/components/dashboard/PortfolioValueCard';
import PerformanceCards from '@/components/dashboard/PerformanceCards';
import AssetAllocationCard from '@/components/dashboard/AssetAllocationCard';
import TransactionsSection from '@/components/dashboard/TransactionsSection';
import TransactionDetailModal from '@/components/dashboard/TransactionDetailModal';

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [portfolioValue, setPortfolioValue] = useState(24568.80);
  const [dailyChange, setDailyChange] = useState({ value: 583.25, percentage: 2.4 });
  const [monthlyReturn, setMonthlyReturn] = useState({ value: -294.83, percentage: -1.2 });
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);

  // Simulated transactions
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 't1',
      type: 'Purchase',
      description: 'AAPL Purchase',
      date: 'May 7, 2025',
      amount: 1450.00,
      status: 'Completed',
      details: {
        shares: 8,
        price: 181.25,
        fees: 0.00,
        source: 'Cash Balance'
      }
    },
    {
      id: 't2',
      type: 'Sale',
      description: 'TSLA Sale',
      date: 'May 5, 2025',
      amount: 2120.50,
      status: 'Completed',
      details: {
        shares: 10,
        price: 212.05,
        fees: 0.00,
        source: 'Portfolio'
      }
    },
    {
      id: 't3',
      type: 'Deposit',
      description: 'Deposit',
      date: 'May 1, 2025',
      amount: 5000.00,
      status: 'Completed',
      details: {
        source: 'Bank Transfer - ****4567'
      }
    },
    {
      id: 't4',
      type: 'Withdrawal',
      description: 'Withdrawal',
      date: 'April 15, 2025',
      amount: 1000.00,
      status: 'Completed',
      details: {
        source: 'To Bank Account - ****4567'
      }
    },
    {
      id: 't5',
      type: 'Purchase',
      description: 'NVDA Purchase',
      date: 'April 10, 2025',
      amount: 3650.25,
      status: 'Completed',
      details: {
        shares: 15,
        price: 243.35,
        fees: 0.00,
        source: 'Cash Balance'
      }
    },
    {
      id: 't6',
      type: 'Dividend',
      description: 'MSFT Dividend',
      date: 'April 5, 2025',
      amount: 120.75,
      status: 'Completed',
      details: {
        source: '25 shares @ $4.83/share'
      }
    }
  ]);

  // Simulated real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update portfolio value with small random fluctuations
      setPortfolioValue(prev => {
        const change = prev * (Math.random() * 0.002 - 0.001);
        return +(prev + change).toFixed(2);
      });
      
      // Update daily change
      setDailyChange(prev => {
        const newValue = +(prev.value + (Math.random() * 10 - 5)).toFixed(2);
        const newPercentage = +(newValue / portfolioValue * 100).toFixed(2);
        return { value: newValue, percentage: newPercentage };
      });
      
      // Update monthly return occasionally
      if (Math.random() > 0.7) {
        setMonthlyReturn(prev => {
          const newValue = +(prev.value + (Math.random() * 20 - 10)).toFixed(2);
          const newPercentage = +(newValue / portfolioValue * 100).toFixed(2);
          return { value: newValue, percentage: newPercentage };
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [portfolioValue]);

  // Handle transaction click
  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsTransactionDetailOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Dashboard" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0 pb-20' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome back, Investor</h1>
            <p className="text-gray-600">Here's what's happening with your investments today.</p>
          </div>
          
          {/* Portfolio Value */}
          <PortfolioValueCard portfolioValue={portfolioValue} dailyChange={dailyChange} />
          
          {/* Performance Cards */}
          <PerformanceCards dailyChange={dailyChange} monthlyReturn={monthlyReturn} />
          
          {/* Asset Allocation */}
          <AssetAllocationCard />
          
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
          
          {/* Transaction Detail Modal */}
          <TransactionDetailModal
            transaction={selectedTransaction}
            isOpen={isTransactionDetailOpen}
            onClose={() => setIsTransactionDetailOpen(false)}
          />
        </div>
      </main>
      <Footer />
      {isMobile && <MobileNavBar />}
    </div>
  );
};

export default Dashboard;
