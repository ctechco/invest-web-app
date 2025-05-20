
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetirementPlanning = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Retirement Planning" showBackButton />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Retirement Planning</h1>
          <p className="text-gray-600 mb-6">Comprehensive guide to planning for retirement, including savings strategies and investment options.</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">When to Start Planning</h3>
                  <p className="text-gray-600 mb-4">
                    The best time to start planning for retirement is as early as possible. Thanks to the power of compound interest, even small contributions made in your 20s and 30s can grow significantly over time. However, it's never too late to begin planning for your financial future.
                  </p>
                  
                  <h3 className="text-lg font-medium mb-2">Setting Retirement Goals</h3>
                  <p className="text-gray-600 mb-4">
                    Consider what kind of lifestyle you want in retirement and estimate your expenses. Many financial advisors suggest aiming to replace 70-80% of your pre-retirement income to maintain your standard of living during retirement.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Retirement Accounts</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Types of Retirement Accounts</h3>
                  <p className="text-gray-600 mb-4">
                    There are several types of tax-advantaged retirement accounts available:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>401(k)/403(b):</strong> Employer-sponsored plans that often include matching contributions.</li>
                    <li><strong>Traditional IRA:</strong> Contributions may be tax-deductible, and earnings grow tax-deferred until withdrawal.</li>
                    <li><strong>Roth IRA:</strong> Contributions are made with after-tax dollars, but qualified withdrawals are tax-free.</li>
                    <li><strong>Solo 401(k) & SEP IRA:</strong> Retirement options for self-employed individuals and small business owners.</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Investment Strategies</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Asset Allocation</h3>
                  <p className="text-gray-600 mb-4">
                    Your asset allocation—how you divide your investments among stocks, bonds, and cash—should generally become more conservative as you approach retirement. A common rule of thumb is to subtract your age from 110 to determine the percentage of your portfolio that should be allocated to stocks.
                  </p>
                  
                  <h3 className="text-lg font-medium mb-2">Diversification</h3>
                  <p className="text-gray-600">
                    Diversifying your investments across different asset classes, sectors, and geographic regions can help manage risk. Consider including a mix of domestic and international stocks, bonds of varying maturities, and potentially alternative investments like real estate.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <div className="flex items-center text-[#9b87f5]">
                <Link to="/tools/retirement-planner" className="flex items-center hover:underline">
                  <span className="mr-1">Try Our Retirement Planning Calculator</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RetirementPlanning;
