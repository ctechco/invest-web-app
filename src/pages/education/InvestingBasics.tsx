
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestingBasics = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Investing Basics" showBackButton />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-20'}`}>
        {/* Header Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-futurewave-purple mb-4">Investing Basics</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn the fundamentals of investing, from key terminology to understanding different asset classes.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Core Concepts</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">What is Investing?</h3>
                    <p className="text-gray-600 mb-4">
                      Investing is the act of allocating resources, usually money, with the expectation of generating income or profit over time. Unlike saving, investing involves putting your money to work by purchasing assets that have the potential to increase in value or generate passive income.
                    </p>
                    
                    <h3 className="text-lg font-medium mb-2">Risk and Return</h3>
                    <p className="text-gray-600 mb-4">
                      All investments involve some degree of risk. Generally, the higher the potential return, the higher the risk. Understanding your risk tolerance is essential to building a portfolio that aligns with your financial goals and comfort level.
                    </p>
                    
                    <h3 className="text-lg font-medium mb-2">Time Horizon</h3>
                    <p className="text-gray-600">
                      Your investment time horizon refers to how long you plan to hold an investment before you need the money. Longer time horizons typically allow for more aggressive investment strategies, as they provide more time to weather market volatility.
                    </p>
                  </CardContent>
                </Card>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">Asset Classes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Stocks</h3>
                      <p className="text-sm text-gray-600">Represent ownership in a company. Higher risk, potentially higher returns.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Bonds</h3>
                      <p className="text-sm text-gray-600">Loans to governments or corporations. Lower risk, generally lower returns.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Cash & Equivalents</h3>
                      <p className="text-sm text-gray-600">Money market funds, CDs, and treasury bills. Very low risk, lower returns.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Alternative Investments</h3>
                      <p className="text-sm text-gray-600">Real estate, commodities, and private equity. Variable risk and return profiles.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
                <div className="flex items-center text-[#9b87f5]">
                  <Link to="/education/market-analysis" className="flex items-center hover:underline">
                    <span className="mr-1">Continue to Market Analysis</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestingBasics;
