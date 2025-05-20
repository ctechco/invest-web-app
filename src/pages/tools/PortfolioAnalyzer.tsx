import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface AssetAllocation {
  id: number;
  name: string;
  value: number;
  color: string;
}

const PortfolioAnalyzer = () => {
  const isMobile = useIsMobile();
  const [assets, setAssets] = useState<AssetAllocation[]>([
    { id: 1, name: 'Stocks', value: 60, color: '#9b87f5' },
    { id: 2, name: 'Bonds', value: 25, color: '#6c63ff' },
    { id: 3, name: 'Cash', value: 10, color: '#4caf50' },
    { id: 4, name: 'Real Estate', value: 5, color: '#ff9800' }
  ]);
  
  const [newAsset, setNewAsset] = useState({ name: '', value: '' });
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  
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
    }
  };
  
  const analyzePortfolio = () => {
    setIsAnalyzed(true);
  };
  
  // Prepare data for the pie chart
  const chartData = assets.map(asset => ({
    id: asset.id,
    value: asset.value,
    label: asset.name,
    color: asset.color
  }));
  
  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Portfolio Analyzer" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Portfolio Analyzer</h1>
          <p className="text-gray-600 mb-8">Analyze your portfolio's performance, risk level, and diversification.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
              
              <div className="space-y-4 mb-6">
                {assets.map(asset => (
                  <div key={asset.id} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: asset.color }}></div>
                    <div className="flex-grow">{asset.name}</div>
                    <Input
                      type="number"
                      className="w-20"
                      value={asset.value}
                      onChange={(e) => handleAssetChange(asset.id, parseFloat(e.target.value) || 0)}
                    />
                    <div className="w-8">%</div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleRemoveAsset(asset.id)}
                    >
                      ×
                    </Button>
                  </div>
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
            
            {isAnalyzed && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                
                <div className="h-60 mb-4">
                  <div className="w-full h-full">
                    <PieChart
                      series={[
                        {
                          data: chartData,
                          highlightScope: { fade: 'global', highlight: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioAnalyzer;
