
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Blog" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Investment Insights</h1>
          
          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-10" 
              placeholder="Search articles..." 
              type="text"
            />
          </div>
          
          {/* Featured article */}
          <Card className="mb-10">
            <CardContent className="p-0">
              <div className="bg-gray-200 h-48 md:h-64"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-futurewave-purple text-white text-xs px-2 py-1 rounded mr-2">Featured</span>
                  <span className="text-gray-500 text-sm">May 9, 2025</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">The Future of Sustainable Investing</h2>
                <p className="text-gray-700 mb-4">
                  As environmental concerns grow, investors are increasingly focusing on sustainable and ESG investments. 
                  Learn how this shift is changing the investment landscape and creating new opportunities.
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-xs text-gray-500">Investment Strategist</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-40"></div>
                  <div className="p-4">
                    <div className="text-gray-500 text-xs mb-2">May {9 - item}, 2025</div>
                    <h3 className="font-bold mb-2">Top Investment Trends for 2025</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                      With rapid technological advancements and changing economic conditions, investors need to stay ahead of emerging trends.
                    </p>
                    <span className="text-sm text-futurewave-purple">Read more</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
