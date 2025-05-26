
import React from 'react';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { AssetAllocation, ChartDataItem } from '@/types/PortfolioTypes';
import RecommendationsList from './RecommendationsList';
import PortfolioSummaryCard from './PortfolioSummaryCard';

interface AnalysisResultsProps {
  assets: AssetAllocation[];
  chartData: ChartDataItem[];
  totalValue?: number;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  assets,
  chartData,
  totalValue = 100000 // Default value for demonstration
}) => {
  // Transform data for Recharts
  const pieData = chartData.map(item => ({
    name: item.label,
    value: item.value,
    color: item.color
  }));

  return (
    <div className="space-y-4">
      <PortfolioSummaryCard assets={assets} totalValue={totalValue} />
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
        
        <div className="h-60 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Allocation']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Risk Level</h3>
            <p className="text-gray-600">
              {assets.find(a => a.name === 'Stocks')?.value || 0 > 70 
                ? 'High Risk' 
                : assets.find(a => a.name === 'Stocks')?.value || 0 > 40 
                  ? 'Moderate Risk' 
                  : 'Low Risk'}
            </p>
          </div>
          
          <div>
            <h3 className="font-medium">Diversification</h3>
            <p className="text-gray-600">
              {assets.length > 5 
                ? 'Well Diversified' 
                : assets.length > 3 
                  ? 'Moderately Diversified' 
                  : 'Limited Diversification'}
            </p>
          </div>
          
          <RecommendationsList assets={assets} />
        </div>
      </Card>
    </div>
  );
};

export default AnalysisResults;
