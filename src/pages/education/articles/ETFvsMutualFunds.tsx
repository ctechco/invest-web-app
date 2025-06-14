
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ETFvsMutualFunds = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="ETFs vs. Mutual Funds" showBackButton />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-20'}`}>
        {/* Header Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-futurewave-purple mb-4">Understanding ETFs vs. Mutual Funds</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A detailed comparison of exchange-traded funds and mutual funds, exploring their advantages and disadvantages.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 mb-2">May 9, 2025 • 8 min read</div>
            
            <div className="prose max-w-none">
              <h2>Introduction</h2>
              <p>
                Exchange-traded funds (ETFs) and mutual funds are both popular investment vehicles that allow investors to own a diversified portfolio of assets. However, they differ in several key ways that may make one more suitable than the other depending on your investment goals and preferences.
              </p>
              
              <h2>What is an ETF?</h2>
              <p>
                An ETF is a type of investment fund that trades on stock exchanges, much like individual stocks. ETFs typically track an index, sector, commodity, or other asset, but can be bought and sold throughout the trading day at market prices that may fluctuate from their net asset value (NAV).
              </p>
              
              <h2>What is a Mutual Fund?</h2>
              <p>
                A mutual fund is an investment vehicle that pools money from many investors to purchase a diverse portfolio of stocks, bonds, or other securities. Unlike ETFs, mutual funds are priced once per day after the market closes, based on their NAV.
              </p>
              
              <h2>Key Differences</h2>
              <h3>Trading Mechanism</h3>
              <p>
                ETFs trade like stocks throughout the day at market prices, allowing investors to execute trades at any time during market hours. Mutual funds, on the other hand, are bought and sold at their NAV, which is calculated at the end of the trading day.
              </p>
              
              <h3>Cost Structure</h3>
              <p>
                ETFs generally have lower expense ratios than mutual funds because most are passively managed, tracking an index rather than being actively managed. Mutual funds often have higher expense ratios due to active management costs, as well as potential sales loads or redemption fees.
              </p>
              
              <h3>Tax Efficiency</h3>
              <p>
                ETFs are typically more tax-efficient than mutual funds due to their unique creation/redemption process, which minimizes capital gains distributions. Mutual funds may generate taxable capital gains when the fund manager sells securities within the fund.
              </p>
              
              <h3>Minimum Investment</h3>
              <p>
                ETFs can be purchased for the price of a single share, which could be as low as a few dollars. Many mutual funds require minimum investments ranging from $500 to $3,000 or more, although some brokerages now offer fractional shares of both ETFs and mutual funds.
              </p>
              
              <h2>Which is Right for You?</h2>
              <p>
                The choice between ETFs and mutual funds depends on your investment goals, time horizon, tax situation, and trading preferences. Consider ETFs if you value intraday trading, tax efficiency, and typically lower costs. Mutual funds might be more appropriate if you prefer automated investing, dollar-cost averaging, or accessing certain active management strategies.
              </p>
              
              <h2>Conclusion</h2>
              <p>
                Both ETFs and mutual funds offer valuable ways to build a diversified portfolio. Many investors use a combination of both to meet their investment objectives. Consider consulting with a financial advisor to determine which options best fit your personal financial situation and goals.
              </p>
            </div>
            
            <div className="mt-8 border-t pt-4">
              <h3 className="font-medium mb-2">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/education/articles/tax-efficient-investing" className="text-[#9b87f5] hover:underline">
                    Tax-Efficient Investing Strategies
                  </Link>
                </li>
                <li>
                  <Link to="/education/articles/market-volatility" className="text-[#9b87f5] hover:underline">
                    Navigating Market Volatility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ETFvsMutualFunds;
