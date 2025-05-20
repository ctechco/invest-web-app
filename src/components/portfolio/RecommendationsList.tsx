
import React from 'react';
import { AssetAllocation } from '@/types/PortfolioTypes';

interface RecommendationsListProps {
  assets: AssetAllocation[];
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({ assets }) => {
  return (
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
  );
};

export default RecommendationsList;
