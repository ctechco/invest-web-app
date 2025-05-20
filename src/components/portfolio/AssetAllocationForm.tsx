
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AssetAllocation } from '@/types/PortfolioTypes';
import AssetItem from './AssetItem';

interface AssetAllocationFormProps {
  assets: AssetAllocation[];
  setAssets: React.Dispatch<React.SetStateAction<AssetAllocation[]>>;
  onAnalyze: () => void;
}

const AssetAllocationForm: React.FC<AssetAllocationFormProps> = ({
  assets,
  setAssets,
  onAnalyze
}) => {
  const { toast } = useToast();
  const [newAsset, setNewAsset] = useState({ name: '', value: '' });

  const handleAssetChange = (id: number, value: number) => {
    setAssets(assets.map(asset => 
      asset.id === id ? { ...asset, value } : asset
    ));
  };
  
  const handleRemoveAsset = (id: number) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };
  
  const handleAddAsset = () => {
    if (newAsset.name && newAsset.value) {
      const colors = ['#f44336', '#2196f3', '#ff9800', '#4caf50', '#e91e63', '#3f51b5'];
      const newId = Math.max(...assets.map(a => a.id), 0) + 1;
      setAssets([...assets, {
        id: newId,
        name: newAsset.name,
        value: parseFloat(newAsset.value),
        color: colors[newId % colors.length]
      }]);
      setNewAsset({ name: '', value: '' });
      toast({
        title: "Asset Added",
        description: `${newAsset.name} has been added to your portfolio.`
      });
    }
  };

  const analyzePortfolio = () => {
    // Validate total percentage is close to 100%
    const total = assets.reduce((sum, asset) => sum + asset.value, 0);
    if (total < 95 || total > 105) {
      toast({
        title: "Invalid Allocation",
        description: `Your total allocation (${total}%) should be close to 100%.`,
        variant: "destructive"
      });
      return;
    }
    
    onAnalyze();
    toast({
      title: "Portfolio Analyzed",
      description: "Your portfolio has been successfully analyzed."
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
      
      <div className="space-y-4 mb-6">
        {assets.map(asset => (
          <AssetItem 
            key={asset.id} 
            asset={asset} 
            onValueChange={handleAssetChange} 
            onRemove={handleRemoveAsset}
          />
        ))}
      </div>
      
      <div className="flex gap-2 items-end mb-6">
        <div className="flex-grow">
          <Label htmlFor="assetName">Asset Name</Label>
          <Input
            id="assetName"
            value={newAsset.name}
            onChange={(e) => setNewAsset({...newAsset, name: e.target.value})}
          />
        </div>
        <div className="w-24">
          <Label htmlFor="assetValue">%</Label>
          <Input
            id="assetValue"
            type="number"
            value={newAsset.value}
            onChange={(e) => setNewAsset({...newAsset, value: e.target.value})}
          />
        </div>
        <Button onClick={handleAddAsset}>Add</Button>
      </div>
      
      <Button onClick={analyzePortfolio} className="w-full bg-[#9b87f5] hover:bg-[#8a75f0]">
        Analyze Portfolio
      </Button>
    </Card>
  );
};

export default AssetAllocationForm;
