
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  X, 
  Info
} from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';

interface Transaction {
  id: string;
  type: string;
  description: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  details?: {
    shares?: number;
    price?: number;
    fees?: number;
    source?: string;
  };
}

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
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome back, Investor</h1>
            <p className="text-gray-600">Here's what's happening with your investments today.</p>
          </div>
          
          {/* Portfolio Value */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className={`flex items-center ${dailyChange.value >= 0 ? 'text-green-500' : 'text-red-500'} mt-1`}>
                {dailyChange.value >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                <span className="text-sm">{dailyChange.value >= 0 ? '+' : ''}{dailyChange.percentage}% today</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Performance Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Daily Change</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`flex items-center ${dailyChange.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {dailyChange.value >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  <span className="font-bold">{dailyChange.value >= 0 ? '+' : ''}${Math.abs(dailyChange.value).toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Monthly Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`flex items-center ${monthlyReturn.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {monthlyReturn.value >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  <span className="font-bold">{monthlyReturn.value >= 0 ? '+' : ''}{monthlyReturn.percentage}%</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Asset Allocation */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <PieChart className="h-32 w-32 text-[#9b87f5]" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#9b87f5] rounded-full mr-2"></div>
                  <span className="text-sm">Stocks (45%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-sm">Bonds (30%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">Cash (15%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-sm">Other (10%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Transactions */}
          {!showAllTransactions && (
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.slice(0, 3).map((transaction) => (
                    <div 
                      key={transaction.id} 
                      className="flex justify-between items-center pb-2 border-b cursor-pointer hover:bg-gray-50 rounded p-1"
                      onClick={() => handleTransactionClick(transaction)}
                    >
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-gray-500">{transaction.date}</div>
                      </div>
                      <div className="font-medium text-right">
                        <div>${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        <div className={`text-sm ${transaction.status === 'Completed' ? 'text-green-500' : transaction.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* All Transactions Table */}
          {showAllTransactions && (
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-lg">All Transactions</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowAllTransactions(false)}
                >
                  <X className="h-4 w-4 mr-1" /> Close
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow 
                        key={transaction.id}
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => handleTransactionClick(transaction)}
                      >
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                        <TableCell>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                            transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          
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
          
          {/* Transaction Detail Dialog (for larger screens) */}
          {!isMobile && (
            <Dialog open={isTransactionDetailOpen} onOpenChange={setIsTransactionDetailOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Transaction Details</DialogTitle>
                  <DialogDescription>
                    {selectedTransaction?.description} - {selectedTransaction?.date}
                  </DialogDescription>
                </DialogHeader>
                
                {selectedTransaction && (
                  <div className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p className="font-medium">{selectedTransaction.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Amount</p>
                        <p className="font-medium">${selectedTransaction.amount.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{selectedTransaction.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className={`font-medium ${selectedTransaction.status === 'Completed' ? 'text-green-500' : selectedTransaction.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                          {selectedTransaction.status}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500 mb-2">Transaction Details</p>
                      
                      {selectedTransaction.details?.shares && (
                        <div className="flex justify-between py-1">
                          <span>Shares</span>
                          <span className="font-medium">{selectedTransaction.details.shares}</span>
                        </div>
                      )}
                      
                      {selectedTransaction.details?.price && (
                        <div className="flex justify-between py-1">
                          <span>Price per Share</span>
                          <span className="font-medium">${selectedTransaction.details.price.toFixed(2)}</span>
                        </div>
                      )}
                      
                      {selectedTransaction.details?.fees !== undefined && (
                        <div className="flex justify-between py-1">
                          <span>Fees</span>
                          <span className="font-medium">${selectedTransaction.details.fees.toFixed(2)}</span>
                        </div>
                      )}
                      
                      {selectedTransaction.details?.source && (
                        <div className="flex justify-between py-1">
                          <span>Source/Destination</span>
                          <span className="font-medium">{selectedTransaction.details.source}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between py-1 border-t mt-2">
                        <span className="font-medium">Total</span>
                        <span className="font-bold">${selectedTransaction.amount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex justify-end">
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          )}
          
          {/* Transaction Detail Drawer (for mobile) */}
          {isMobile && selectedTransaction && (
            <Drawer open={isTransactionDetailOpen} onOpenChange={setIsTransactionDetailOpen}>
              <DrawerContent>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{selectedTransaction.description}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      selectedTransaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      selectedTransaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedTransaction.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p className="font-medium">{selectedTransaction.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Amount</p>
                        <p className="font-medium">${selectedTransaction.amount.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{selectedTransaction.date}</p>
                      </div>
                    </div>
                    
                    <Collapsible className="w-full">
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-t">
                        <span className="font-medium">Transaction Details</span>
                        <span className="text-sm text-blue-600">View</span>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="pt-2 space-y-2">
                        {selectedTransaction.details?.shares && (
                          <div className="flex justify-between py-1">
                            <span>Shares</span>
                            <span className="font-medium">{selectedTransaction.details.shares}</span>
                          </div>
                        )}
                        
                        {selectedTransaction.details?.price && (
                          <div className="flex justify-between py-1">
                            <span>Price per Share</span>
                            <span className="font-medium">${selectedTransaction.details.price.toFixed(2)}</span>
                          </div>
                        )}
                        
                        {selectedTransaction.details?.fees !== undefined && (
                          <div className="flex justify-between py-1">
                            <span>Fees</span>
                            <span className="font-medium">${selectedTransaction.details.fees.toFixed(2)}</span>
                          </div>
                        )}
                        
                        {selectedTransaction.details?.source && (
                          <div className="flex justify-between py-1">
                            <span>Source/Destination</span>
                            <span className="font-medium">{selectedTransaction.details.source}</span>
                          </div>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsTransactionDetailOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
