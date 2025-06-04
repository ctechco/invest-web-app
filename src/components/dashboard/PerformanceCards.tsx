
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PerformanceCardsProps {
  dailyChange: {
    value: number;
    percentage: number;
  };
  monthlyReturn: {
    value: number;
    percentage: number;
  };
}

const PerformanceCards: React.FC<PerformanceCardsProps> = ({
  dailyChange,
  monthlyReturn
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Daily Change</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`flex items-center ${dailyChange.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {dailyChange.value >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span className="font-bold">{dailyChange.value >= 0 ? '+' : ''}${Math.abs(dailyChange.value).toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Monthly Return</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`flex items-center ${monthlyReturn.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {monthlyReturn.value >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span className="font-bold">{monthlyReturn.value >= 0 ? '+' : ''}{monthlyReturn.percentage}%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceCards;
