
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AssetAllocation } from '@/types/PortfolioTypes';
import { ChartPie, DollarSign, Percent } from 'lucide-react';

interface PortfolioSummaryCardProps {
  assets: AssetAllocation[];
  totalValue?: number;
}

const PortfolioSummaryCard: React.FC<PortfolioSummaryCardProps> = ({ 
  assets,
  totalValue = 100000 // Default value if not provided
}) => {
  // Calculate total percentage (should be close to 100%)
  const totalPercentage = assets.reduce((sum, asset) => sum + asset.value, 0);
  
  // Get the top 3 assets by value
  const topAssets = [...assets]
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);

  return (
    <Card className="mb-6 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Value */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Total Value</h4>
              <p className="text-xl font-bold">${totalValue.toLocaleString()}</p>
            </div>
          </div>
          
          {/* Asset Count */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-3 rounded-full">
              <ChartPie className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Asset Classes</h4>
              <p className="text-xl font-bold">{assets.length}</p>
            </div>
          </div>
          
          {/* Allocation */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-3 rounded-full">
              <Percent className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium">Total Allocation</h4>
              <p className="text-xl font-bold">{totalPercentage.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        {/* Top Assets */}
        <div className="mt-4 pt-4 border-t">
          <h4 className="text-sm text-gray-500 font-medium mb-2">Top Asset Classes</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {topAssets.map(asset => (
              <div key={asset.id} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: asset.color }}
                ></div>
                <span className="text-sm">{asset.name}</span>
                <span className="text-sm font-semibold ml-auto">{asset.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummaryCard;
