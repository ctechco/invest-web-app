
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, PieChart, TrendingUp, AlertCircle } from 'lucide-react';

const InvestmentTools = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Investment Tools" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Investment Tools</h1>
          <p className="text-gray-600 mb-8">Use our suite of investment tools to make informed financial decisions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Calculator className="h-10 w-10 text-[#9b87f5] mb-2" />
                <CardTitle>Investment Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Calculate potential returns based on different investment strategies and time periods.</p>
                <p className="text-[#9b87f5]">Open Calculator</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <PieChart className="h-10 w-10 text-[#9b87f5] mb-2" />
                <CardTitle>Portfolio Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Analyze your portfolio's performance, risk level, and diversification.</p>
                <p className="text-[#9b87f5]">Analyze Portfolio</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-[#9b87f5] mb-2" />
                <CardTitle>Retirement Planner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Plan for your retirement by estimating future needs and setting appropriate goals.</p>
                <p className="text-[#9b87f5]">Start Planning</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <AlertCircle className="h-10 w-10 text-[#9b87f5] mb-2" />
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Determine your risk tolerance and get tailored investment recommendations.</p>
                <p className="text-[#9b87f5]">Take Assessment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentTools;
