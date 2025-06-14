
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import MobileNavBar from '@/components/MobileNavBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, PieChart, TrendingUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentTools = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Investment Tools" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0 pb-20' : 'pt-20'}`}>
        {/* Header Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-futurewave-purple mb-4">Available Tools</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our collection of professional-grade investment analysis tools to make informed decisions.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/tools/calculator" className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <Calculator className="h-10 w-10 text-[#9b87f5] mb-2" />
                    <CardTitle>Investment Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Calculate potential returns based on different investment strategies and time periods.</p>
                    <p className="text-[#9b87f5]">Open Calculator</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/tools/portfolio-analyzer" className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <PieChart className="h-10 w-10 text-[#9b87f5] mb-2" />
                    <CardTitle>Portfolio Analyzer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Analyze your portfolio's performance, risk level, and diversification.</p>
                    <p className="text-[#9b87f5]">Analyze Portfolio</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/tools/retirement-planner" className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-[#9b87f5] mb-2" />
                    <CardTitle>Retirement Planner</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Plan for your retirement by estimating future needs and setting appropriate goals.</p>
                    <p className="text-[#9b87f5]">Start Planning</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/tools/risk-assessment" className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <AlertCircle className="h-10 w-10 text-[#9b87f5] mb-2" />
                    <CardTitle>Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Determine your risk tolerance and get tailored investment recommendations.</p>
                    <p className="text-[#9b87f5]">Take Assessment</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {isMobile && <MobileNavBar />}
    </div>
  );
};

export default InvestmentTools;
