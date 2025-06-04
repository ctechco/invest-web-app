
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart } from 'lucide-react';

const AssetAllocationCard: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">
          <PieChart className="h-32 w-32 text-[#9b87f5]" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#9b87f5] rounded-full mr-2"></div>
            <span className="text-sm">Stocks (45%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-sm">Bonds (30%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <span className="text-sm">Cash (15%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <span className="text-sm">Other (10%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetAllocationCard;
