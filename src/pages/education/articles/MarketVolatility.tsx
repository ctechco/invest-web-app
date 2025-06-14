
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

const MarketVolatility = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Market Volatility" showBackButton />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        {/* Header Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-futurewave-purple mb-4">Navigating Market Volatility</h2>
              <p className="text-lg text-gray-600">
                Expert tips on maintaining a long-term perspective during periods of market uncertainty and price fluctuations.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 mb-2">May 5, 2025 • 7 min read</div>
            
            <div className="prose max-w-none">
              <h2>Understanding Market Volatility</h2>
              <p>
                Market volatility refers to the rate at which the price of securities increases or decreases. Higher volatility is associated with bigger and more frequent price swings, while lower volatility indicates more stable and predictable performance. Volatility is a normal part of investing and is often measured by indicators like the VIX index, also known as the "fear index."
              </p>
              
              <h2>Why Markets Become Volatile</h2>
              <p>
                Several factors can trigger market volatility:
              </p>
              <ul>
                <li><strong>Economic Events:</strong> Changes in interest rates, inflation, or employment data.</li>
                <li><strong>Geopolitical Issues:</strong> Elections, wars, trade disputes, or diplomatic tensions.</li>
                <li><strong>Corporate News:</strong> Earnings reports, management changes, or mergers and acquisitions.</li>
                <li><strong>Market Sentiment:</strong> Fear, greed, or investor psychology driving buying or selling pressure.</li>
                <li><strong>Unexpected Events:</strong> Natural disasters, pandemics, or other unforeseen crises.</li>
              </ul>
              
              <h2>Strategies for Navigating Volatile Markets</h2>
              <h3>Maintain a Long-Term Perspective</h3>
              <p>
                One of the most important strategies during market volatility is to remember your long-term investment goals. Historically, markets have trended upward over time despite short-term fluctuations. Reacting emotionally to market swings often leads to buying high and selling low—the opposite of successful investing.
              </p>
              
              <h3>Diversification</h3>
              <p>
                A well-diversified portfolio spreads risk across different asset classes, sectors, and geographies. When some investments are performing poorly, others may be stable or increasing in value, helping to smooth overall returns and reduce portfolio volatility.
              </p>
              
              <h3>Dollar-Cost Averaging</h3>
              <p>
                Consistently investing a fixed amount regardless of market conditions (dollar-cost averaging) allows you to buy more shares when prices are low and fewer when prices are high. This discipline helps avoid the pitfalls of trying to time the market and can reduce the average cost per share over time.
              </p>
              
              <h3>Rebalancing</h3>
              <p>
                Periodically rebalancing your portfolio back to your target asset allocation helps maintain your desired risk level and can improve returns by systematically "buying low and selling high." Market volatility often creates opportunities for rebalancing as asset classes move in different directions.
              </p>
              
              <h3>Focus on Quality</h3>
              <p>
                During volatile periods, investments with strong fundamentals—such as companies with solid balance sheets, consistent cash flows, and competitive advantages—tend to weather storms better than more speculative investments.
              </p>
              
              <h2>Conclusion</h2>
              <p>
                Market volatility, while unsettling, is a normal part of investing. By maintaining a long-term perspective, staying diversified, and adhering to your investment plan, you can navigate volatile markets with greater confidence. Remember that some of the market's best days often occur shortly after its worst days, making it crucial to stay invested rather than trying to time market movements.
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
                  <Link to="/education/articles/tax-efficient-investing" className="text-[#9b87f5] hover:underline">
                    Tax-Efficient Investing Strategies
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

export default MarketVolatility;
