
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import NewsModal from '@/components/NewsModal';

interface NewsItem {
  date: string;
  source: string;
  title: string;
  preview: string;
}

const MarketData = () => {
  const isMobile = useIsMobile();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newsItems: NewsItem[] = [
    {
      date: "May 9, 2025",
      source: "CNBC",
      title: "Fed Signals Potential Rate Cut as Inflation Eases",
      preview: "The Federal Reserve indicated it may soon be appropriate to lower interest rates as inflation data shows signs of returning to the 2% target."
    },
    {
      date: "May 9, 2025",
      source: "Bloomberg",
      title: "Tech Stocks Rally on Strong Earnings Reports",
      preview: "Technology sector leads market gains following better-than-expected quarterly results from major companies."
    },
    {
      date: "May 8, 2025",
      source: "Reuters",
      title: "Oil Prices Stable Despite Middle East Tensions",
      preview: "Crude oil prices held steady around $80 per barrel even as geopolitical tensions continue to simmer in the Middle East region."
    }
  ];

  const handleNewsClick = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Market Data" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-futurewave-blue to-futurewave-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Market Data</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              Real-Time Financial Insights
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Stay informed with up-to-the-minute market data, stock prices, and financial news to make confident investment decisions.
            </p>
          </div>
        </div>
      </section>
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-0'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          {/* Search bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-10" 
              placeholder="Search stocks, ETFs, indices..." 
              type="text"
            />
          </div>
          
          {/* Market Overview */}
          <h2 className="text-xl font-bold mb-4">Market Overview</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">S&P 500</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">4,892.38</div>
                <div className="flex items-center text-green-500 mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="text-xs">+1.21%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">NASDAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">16,248.62</div>
                <div className="flex items-center text-green-500 mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="text-xs">+1.73%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">DOW JONES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">38,643.77</div>
                <div className="flex items-center text-green-500 mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="text-xs">+0.83%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">RUSSELL 2000</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">2,052.39</div>
                <div className="flex items-center text-red-500 mt-1">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  <span className="text-xs">-0.27%</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Top Movers */}
          <h2 className="text-xl font-bold mb-4">Today's Top Movers</h2>
          <div className="mb-6">
            <Card>
              <CardContent className="p-0">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-medium">AAPL</div>
                        <div className="text-xs text-gray-500">Apple Inc.</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">$189.85</td>
                      <td className="py-3 px-4 whitespace-nowrap text-green-500 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        2.8%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-medium">MSFT</div>
                        <div className="text-xs text-gray-500">Microsoft Corp.</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">$415.50</td>
                      <td className="py-3 px-4 whitespace-nowrap text-green-500 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        1.6%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-medium">NFLX</div>
                        <div className="text-xs text-gray-500">Netflix Inc.</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">$601.75</td>
                      <td className="py-3 px-4 whitespace-nowrap text-green-500 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        3.2%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-medium">META</div>
                        <div className="text-xs text-gray-500">Meta Platforms Inc.</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">$470.10</td>
                      <td className="py-3 px-4 whitespace-nowrap text-red-500 flex items-center">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        1.2%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-medium">AMZN</div>
                        <div className="text-xs text-gray-500">Amazon.com Inc.</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">$178.25</td>
                      <td className="py-3 px-4 whitespace-nowrap text-green-500 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        2.1%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
          
          {/* Market News */}
          <h2 className="text-xl font-bold mb-4">Latest Market News</h2>
          <div className="space-y-4">
            {newsItems.map((newsItem, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleNewsClick(newsItem)}
              >
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500 mb-1">{newsItem.date} - {newsItem.source}</div>
                  <h3 className="font-bold mb-2">{newsItem.title}</h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {newsItem.preview}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <NewsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newsItem={selectedNews}
      />
    </div>
  );
};

export default MarketData;
