
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

const TaxEfficientInvesting = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Tax-Efficient Investing" showBackButton />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        {/* Header Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-futurewave-purple mb-4">Tax-Efficient Investing Strategies</h2>
              <p className="text-lg text-gray-600">
                Learn how to minimize tax liability while maximizing investment returns through strategic planning.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 mb-2">May 7, 2025 • 10 min read</div>
            
            <div className="prose max-w-none">
              <h2>Introduction</h2>
              <p>
                Tax-efficient investing is the practice of structuring your investments to minimize the tax burden while still achieving your financial goals. By understanding how different investments are taxed and strategically placing them in appropriate accounts, investors can significantly improve their after-tax returns over time.
              </p>
              
              <h2>Understanding Tax Impacts on Investments</h2>
              <p>
                Different investments generate different types of taxable events. Interest income is typically taxed as ordinary income at your marginal tax rate, while qualified dividends and long-term capital gains (from investments held more than one year) are taxed at preferential rates, currently 0%, 15%, or 20%, depending on your tax bracket.
              </p>
              
              <h2>Tax-Advantaged Accounts</h2>
              <h3>Retirement Accounts</h3>
              <p>
                Tax-advantaged retirement accounts like 401(k)s, IRAs, and Roth IRAs allow investments to grow without immediate tax consequences:
              </p>
              <ul>
                <li><strong>Traditional 401(k)s and IRAs:</strong> Contributions are typically tax-deductible, and growth is tax-deferred until withdrawal.</li>
                <li><strong>Roth 401(k)s and Roth IRAs:</strong> Contributions are made with after-tax dollars, but qualified withdrawals are completely tax-free.</li>
              </ul>
              
              <h3>Other Tax-Advantaged Accounts</h3>
              <p>
                Several other account types offer tax advantages for specific purposes:
              </p>
              <ul>
                <li><strong>Health Savings Accounts (HSAs):</strong> Triple tax advantage with tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.</li>
                <li><strong>529 College Savings Plans:</strong> Tax-free growth and withdrawals when used for qualified education expenses.</li>
              </ul>
              
              <h2>Asset Location Strategies</h2>
              <p>
                Asset location is the practice of strategically placing investments in different account types based on their tax efficiency:
              </p>
              <ul>
                <li><strong>Tax-Advantaged Accounts:</strong> Place tax-inefficient investments like bonds, REITs, and actively managed funds that generate income or short-term capital gains.</li>
                <li><strong>Taxable Accounts:</strong> Hold tax-efficient investments like index funds, ETFs, municipal bonds, and individual stocks you plan to hold long-term.</li>
              </ul>
              
              <h2>Tax-Loss Harvesting</h2>
              <p>
                Tax-loss harvesting involves selling investments at a loss to offset capital gains and up to $3,000 in ordinary income per year. This strategy can be particularly effective during market downturns, allowing you to reduce your tax liability while maintaining your overall investment strategy.
              </p>
              
              <h2>Conclusion</h2>
              <p>
                By incorporating tax-efficient investment strategies into your financial plan, you can significantly increase your after-tax returns over time. Remember that tax laws can change, so it's important to regularly review and adjust your strategies accordingly. Consider consulting with a tax professional or financial advisor to develop a tax-efficient investment approach tailored to your specific situation.
              </p>
            </div>
            
            <div className="mt-8 border-t pt-4">
              <h3 className="font-medium mb-2">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/education/articles/etf-vs-mutual-funds" className="text-[#9b87f5] hover:underline">
                    Understanding ETFs vs. Mutual Funds
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

export default TaxEfficientInvesting;
