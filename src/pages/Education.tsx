
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText } from 'lucide-react';
import VideoModal from '@/components/education/VideoModal';

const Education = () => {
  const isMobile = useIsMobile();

  // Video tutorial data
  const videoTutorials = [
    {
      id: 1,
      title: "Getting Started with Stock Investing",
      description: "A beginner's guide to understanding the stock market and making your first investment.",
      duration: "12:45",
      views: "25K views",
      videoId: "Xn7KWR9EOGM" // Example YouTube video ID
    },
    {
      id: 2,
      title: "How to Read Financial Statements",
      description: "Learn to analyze company performance by understanding key financial documents.",
      duration: "18:30",
      views: "18K views",
      videoId: "mNpEZPgBzGU" // Example YouTube video ID
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Learn" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Investment Education</h1>
          <p className="text-gray-600 mb-8">Expand your investment knowledge with our educational resources.</p>
          
          {/* Featured Resources */}
          <h2 className="text-xl font-bold mb-4">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Link to="/education/investing-basics">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Investing Basics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">Learn the fundamentals of investing, from key terminology to understanding different asset classes.</p>
                  <div className="flex items-center text-[#9b87f5]">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">Start Learning</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/education/market-analysis">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Market Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">Master the techniques used by professionals to analyze market trends and make informed decisions.</p>
                  <div className="flex items-center text-[#9b87f5]">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">Start Learning</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/education/retirement-planning">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Retirement Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">Comprehensive guide to planning for retirement, including savings strategies and investment options.</p>
                  <div className="flex items-center text-[#9b87f5]">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">Start Learning</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          {/* Latest Articles */}
          <h2 className="text-xl font-bold mb-4">Latest Articles</h2>
          <div className="space-y-4 mb-10">
            <Link to="/education/articles/etf-vs-mutual-funds">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-[#9b87f5] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Understanding ETFs vs. Mutual Funds</h3>
                      <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                        A detailed comparison of exchange-traded funds and mutual funds, exploring their advantages and disadvantages.
                      </p>
                      <div className="text-xs text-gray-500">May 9, 2025 • 8 min read</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/education/articles/tax-efficient-investing">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-[#9b87f5] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Tax-Efficient Investing Strategies</h3>
                      <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                        Learn how to minimize tax liability while maximizing investment returns through strategic planning.
                      </p>
                      <div className="text-xs text-gray-500">May 7, 2025 • 10 min read</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/education/articles/market-volatility">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-[#9b87f5] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Navigating Market Volatility</h3>
                      <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                        Expert tips on maintaining a long-term perspective during periods of market uncertainty and price fluctuations.
                      </p>
                      <div className="text-xs text-gray-500">May 5, 2025 • 7 min read</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          {/* Video Tutorials */}
          <h2 className="text-xl font-bold mb-4">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoTutorials.map(video => (
              <VideoModal
                key={video.id}
                title={video.title}
                description={video.description}
                duration={video.duration}
                views={video.views}
                videoId={video.videoId}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Education;
