
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface NewsItem {
  date: string;
  source: string;
  title: string;
  preview: string;
}

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsItem: NewsItem | null;
}

const generateFullArticle = (newsItem: NewsItem) => {
  const articles = {
    "Fed Signals Potential Rate Cut as Inflation Eases": `
      The Federal Reserve indicated Wednesday that it may soon be appropriate to lower interest rates as inflation data shows promising signs of returning to the central bank's 2% target.

      During the latest Federal Open Market Committee meeting, Fed officials noted that recent economic indicators suggest inflationary pressures are continuing to moderate across multiple sectors. Core consumer prices have shown a consistent downward trend over the past three months, with the latest reading coming in at 3.2% year-over-year, down from a peak of 6.6% in 2022.

      Fed Chair Jerome Powell emphasized that while the central bank remains committed to bringing inflation to target, recent data suggests that restrictive monetary policy is having the desired effect. "We're seeing encouraging signs that inflation is moving in the right direction," Powell stated during the post-meeting press conference.

      The potential for rate cuts has significant implications for investors and markets. Lower interest rates typically make borrowing cheaper for businesses and consumers, potentially stimulating economic growth. However, Fed officials stressed that any rate adjustments will be data-dependent and gradual.

      Market analysts have been anticipating this shift in Fed policy, with many expecting the first rate cut to occur in the coming quarter. Bond yields have already begun to reflect these expectations, with the 10-year Treasury yield declining to its lowest level in six months.

      The Fed's dual mandate of price stability and full employment appears to be coming into better balance, with unemployment remaining near historic lows while inflation trends downward. This economic environment provides the Fed with more flexibility in its monetary policy decisions moving forward.
    `,
    "Tech Stocks Rally on Strong Earnings Reports": `
      Technology stocks surged across the board following a series of better-than-expected quarterly earnings reports from major companies in the sector, reinforcing investor confidence in the digital transformation narrative.

      Leading the rally were several mega-cap technology companies that reported strong revenue growth and robust profit margins despite ongoing economic uncertainties. The tech-heavy NASDAQ composite gained 1.73% on the day, with several individual stocks posting gains of 5% or more.

      Key drivers of the rally included cloud computing growth, artificial intelligence investments, and resilient consumer demand for technology products and services. Companies reported that enterprise customers continue to prioritize digital transformation initiatives, leading to sustained demand for software and cloud services.

      Revenue from AI-related products and services showed particularly strong growth, with several companies reporting double-digit increases in this segment. This has reinforced investor belief that artificial intelligence represents a significant long-term growth opportunity for the technology sector.

      The semiconductor industry also contributed to the rally, with chip manufacturers reporting strong demand from both consumer electronics and data center customers. Supply chain improvements have allowed companies to better meet this demand, leading to improved margins and financial performance.

      Analysts noted that the strong earnings reports demonstrate the resilience of the technology sector and its ability to maintain growth even in challenging economic conditions. Many have revised their price targets upward for leading technology stocks based on these results.

      Looking ahead, investors will be watching for continued execution on AI initiatives and the sustainability of current growth rates as companies navigate an evolving economic landscape.
    `,
    "Oil Prices Stable Despite Middle East Tensions": `
      Crude oil prices remained surprisingly stable around $80 per barrel despite escalating geopolitical tensions in the Middle East, suggesting that global supply chains have become more resilient to regional disruptions.

      The stability in oil markets comes even as diplomatic tensions have risen in several key oil-producing regions. Historically, such geopolitical uncertainties would have led to significant price volatility and supply concerns, but multiple factors are contributing to the current market stability.

      Strategic petroleum reserves in major consuming nations have been built up significantly over the past year, providing a buffer against potential supply disruptions. Additionally, increased production from non-OPEC countries has diversified global supply sources, reducing dependence on any single region.

      The United States has emerged as a major oil producer through advances in shale extraction technology, contributing to global supply stability. Domestic production has reached near-record levels, helping to offset concerns about international supply chains.

      Market analysts point to improved energy efficiency and the gradual transition to renewable energy sources as factors that have reduced the overall sensitivity of the global economy to oil price fluctuations. This structural shift has made oil markets more stable during periods of geopolitical uncertainty.

      OPEC+ members have also played a stabilizing role by maintaining production discipline and signaling their commitment to market stability. The organization has demonstrated flexibility in adjusting production quotas to maintain price stability within their target range.

      Energy traders remain vigilant about potential supply disruptions, but the consensus view is that the global oil market has sufficient buffers to handle short-term supply challenges. Long-term energy transition trends continue to influence market dynamics and investment decisions in the sector.
    `
  };

  return articles[newsItem.title as keyof typeof articles] || `
    This is a detailed analysis of "${newsItem.title}" from ${newsItem.source}.

    ${newsItem.preview}

    Our financial experts continue to monitor this developing story and its potential impact on market conditions. This news represents an important development in the current economic landscape that investors should consider when making portfolio decisions.

    For more detailed analysis and personalized investment advice based on current market conditions, we recommend consulting with one of our financial advisors who can provide tailored guidance based on your specific investment goals and risk tolerance.

    Market conditions can change rapidly, and it's important to stay informed about developments that may affect your investment strategy. Our team of experts continuously monitors global financial markets to provide timely insights and recommendations.
  `;
};

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, newsItem }) => {
  if (!newsItem) return null;

  const fullArticle = generateFullArticle(newsItem);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{newsItem.source}</Badge>
            <span className="text-sm text-gray-500">{newsItem.date}</span>
          </div>
          <DialogTitle className="text-xl font-bold leading-tight">
            {newsItem.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            {fullArticle.split('\n').map((paragraph, index) => {
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;
