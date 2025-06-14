
import { useState } from 'react';
import { Transaction } from '@/types/Transaction';

const initialTransactions: Transaction[] = [
    {
      id: 't1',
      type: 'Purchase',
      description: 'AAPL Purchase',
      date: 'May 7, 2025',
      amount: 1450.00,
      status: 'Completed',
      details: { shares: 8, price: 181.25, fees: 0.00, source: 'Cash Balance' }
    },
    {
      id: 't2',
      type: 'Sale',
      description: 'TSLA Sale',
      date: 'May 5, 2025',
      amount: 2120.50,
      status: 'Completed',
      details: { shares: 10, price: 212.05, fees: 0.00, source: 'Portfolio' }
    },
    {
      id: 't3',
      type: 'Deposit',
      description: 'Deposit',
      date: 'May 1, 2025',
      amount: 5000.00,
      status: 'Completed',
      details: { source: 'Bank Transfer - ****4567' }
    },
    {
      id: 't4',
      type: 'Withdrawal',
      description: 'Withdrawal',
      date: 'April 15, 2025',
      amount: 1000.00,
      status: 'Completed',
      details: { source: 'To Bank Account - ****4567' }
    },
    {
      id: 't5',
      type: 'Purchase',
      description: 'NVDA Purchase',
      date: 'April 10, 2025',
      amount: 3650.25,
      status: 'Completed',
      details: { shares: 15, price: 243.35, fees: 0.00, source: 'Cash Balance' }
    },
    {
      id: 't6',
      type: 'Dividend',
      description: 'MSFT Dividend',
      date: 'April 5, 2025',
      amount: 120.75,
      status: 'Completed',
      details: { source: '25 shares @ $4.83/share' }
    }
];

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsTransactionDetailOpen(true);
  };
  
  const closeTransactionDetail = () => {
      setIsTransactionDetailOpen(false);
  }

  return {
    transactions,
    showAllTransactions,
    setShowAllTransactions,
    selectedTransaction,
    isTransactionDetailOpen,
    addTransaction,
    handleTransactionClick,
    closeTransactionDetail,
  };
};
