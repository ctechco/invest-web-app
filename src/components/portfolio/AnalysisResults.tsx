
import React from 'react';
import { Card } from '@/components/ui/card';
import { PieChart } from '@mui/x-charts/PieChart';
import { AssetAllocation, ChartDataItem } from '@/types/PortfolioTypes';

interface AnalysisResultsProps {
  assets: AssetAllocation[];
  chartData: ChartDataItem[];
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  assets,
  chartData
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
      
      <div className="h-60 mb-4">
        <div className="w-full h-full">
          <PieChart
            series={[
              {
                data: chartData,
                highlightScope: { fade: 'global', highlight: 'item' },
                innerRadius: 30,
                paddingAngle: 2,
                cornerRadius: 4,
              },
            ]}
            height={240}
          />
        </div>
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
        
        <div>
          <h3 className="font-medium">Recommendations</h3>
          <ul className="text-gray-600 list-disc list-inside">
            {assets.find(a => a.name === 'Stocks')?.value || 0 > 70 && (
              <li>Consider reducing stock allocation to decrease portfolio risk</li>
            )}
            {(assets.find(a => a.name === 'Bonds')?.value || 0) < 20 && (
              <li>Consider increasing bond allocation for stability</li>
            )}
            {assets.length < 4 && (
              <li>Add more asset classes to improve diversification</li>
            )}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default AnalysisResults;
