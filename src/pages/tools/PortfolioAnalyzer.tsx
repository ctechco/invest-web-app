
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import AssetAllocationForm from '@/components/portfolio/AssetAllocationForm';
import AnalysisResults from '@/components/portfolio/AnalysisResults';
import { AssetAllocation, ChartDataItem } from '@/types/PortfolioTypes';

const PortfolioAnalyzer = () => {
  const isMobile = useIsMobile();
  const [assets, setAssets] = useState<AssetAllocation[]>([
    { id: 1, name: 'Stocks', value: 60, color: '#9b87f5' },
    { id: 2, name: 'Bonds', value: 25, color: '#6c63ff' },
    { id: 3, name: 'Cash', value: 10, color: '#4caf50' },
    { id: 4, name: 'Real Estate', value: 5, color: '#ff9800' }
  ]);
  
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  // Simulated total portfolio value (in a real app, this would come from user input or calculation)
  const [totalValue] = useState(100000);
  
  // Prepare data for the pie chart
  const chartData: ChartDataItem[] = assets.map(asset => ({
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
            <AssetAllocationForm 
              assets={assets} 
              setAssets={setAssets} 
              onAnalyze={() => setIsAnalyzed(true)} 
            />
            
            {isAnalyzed && (
              <AnalysisResults 
                assets={assets} 
                chartData={chartData}
                totalValue={totalValue}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioAnalyzer;
