
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AssetAllocation } from '@/types/PortfolioTypes';

interface AssetItemProps {
  asset: AssetAllocation;
  onValueChange: (id: number, value: number) => void;
  onRemove: (id: number) => void;
}

const AssetItem: React.FC<AssetItemProps> = ({ asset, onValueChange, onRemove }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: asset.color }}></div>
      <div className="flex-grow">{asset.name}</div>
      <Input
        type="number"
        className="w-20"
        value={asset.value}
        onChange={(e) => onValueChange(asset.id, parseFloat(e.target.value) || 0)}
      />
      <div className="w-8">%</div>
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => onRemove(asset.id)}
      >
        ×
      </Button>
    </div>
  );
};

export default AssetItem;
