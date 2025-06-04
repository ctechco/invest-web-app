
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PortfolioValueCardProps {
  portfolioValue: number;
  dailyChange: {
    value: number;
    percentage: number;
  };
}

const PortfolioValueCard: React.FC<PortfolioValueCardProps> = ({
  portfolioValue,
  dailyChange
}) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Portfolio Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">
          ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={`flex items-center ${dailyChange.value >= 0 ? 'text-green-500' : 'text-red-500'} mt-1`}>
          {dailyChange.value >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
          <span className="text-sm">{dailyChange.value >= 0 ? '+' : ''}{dailyChange.percentage}% today</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioValueCard;
