
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, PieChart } from 'lucide-react';

const Dashboard = () => {
  const isMobile = useIsMobile();

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
              <div className="text-3xl font-bold">$24,568.80</div>
              <div className="flex items-center text-green-500 mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+2.4% today</span>
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
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="font-bold">+$583.25</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Monthly Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-red-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="font-bold">-1.2%</span>
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <div className="font-medium">AAPL Purchase</div>
                    <div className="text-sm text-gray-500">May 7, 2025</div>
                  </div>
                  <div className="font-medium text-right">
                    <div>$1,450.00</div>
                    <div className="text-sm text-green-500">Completed</div>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <div className="font-medium">TSLA Sale</div>
                    <div className="text-sm text-gray-500">May 5, 2025</div>
                  </div>
                  <div className="font-medium text-right">
                    <div>$2,120.50</div>
                    <div className="text-sm text-green-500">Completed</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Deposit</div>
                    <div className="text-sm text-gray-500">May 1, 2025</div>
                  </div>
                  <div className="font-medium text-right">
                    <div>$5,000.00</div>
                    <div className="text-sm text-green-500">Completed</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* View All Button */}
          <div className="mt-6 text-center">
            <Button className="bg-[#9b87f5] text-white hover:bg-[#8a74e8]">View All Transactions</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
