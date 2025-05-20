
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { LineChart } from '@/components/ui/chart';

const RetirementPlanner = () => {
  const isMobile = useIsMobile();
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentSavings, setCurrentSavings] = useState<number>(100000);
  const [monthlySavings, setMonthlySavings] = useState<number>(1000);
  const [annualReturn, setAnnualReturn] = useState<number>(7);
  const [estimatedLifespan, setEstimatedLifespan] = useState<number>(90);
  const [inflationRate, setInflationRate] = useState<number>(2.5);
  const [desiredMonthlyIncome, setDesiredMonthlyIncome] = useState<number>(5000);
  
  const [retirementResults, setRetirementResults] = useState<any>(null);

  const calculateRetirement = () => {
    // Calculate years until retirement
    const yearsToRetirement = retirementAge - currentAge;
    
    // Calculate projected savings at retirement
    let projectedSavings = currentSavings;
    const monthlyReturnRate = annualReturn / 100 / 12;
    
    for (let i = 0; i < yearsToRetirement * 12; i++) {
      projectedSavings += monthlySavings;
      projectedSavings *= (1 + monthlyReturnRate);
    }
    
    // Calculate how long savings will last
    const monthlyIncomeNeeded = desiredMonthlyIncome;
    const monthlyInflation = inflationRate / 100 / 12;
    const monthsInRetirement = (estimatedLifespan - retirementAge) * 12;
    
    let remainingSavings = projectedSavings;
    let monthlyWithdrawals = [];
    let savingsProjection = [];
    savingsProjection.push(Math.round(projectedSavings));
    
    let adjustedMonthlyIncome = monthlyIncomeNeeded;
    let canFundRetirement = true;
    
    for (let i = 0; i < monthsInRetirement; i++) {
      if (i > 0 && i % 12 === 0) {
        adjustedMonthlyIncome *= (1 + inflationRate / 100);
      }
      
      remainingSavings -= adjustedMonthlyIncome;
      remainingSavings *= (1 + monthlyReturnRate);
      
      if (i % 12 === 0) {
        savingsProjection.push(Math.max(0, Math.round(remainingSavings)));
      }
      
      if (remainingSavings < 0) {
        canFundRetirement = false;
        break;
      }
    }
    
    // Prepare chart data
    const chartLabels = Array.from({ length: Math.ceil(monthsInRetirement / 12) + 1 }, 
      (_, i) => `${retirementAge + i}`);
    
    setRetirementResults({
      projectedSavings: Math.round(projectedSavings),
      canFundRetirement,
      savingsProjection,
      chartLabels,
      yearsInRetirement: estimatedLifespan - retirementAge,
      yearsSavingsLast: canFundRetirement ? estimatedLifespan - retirementAge : 
        Math.floor(savingsProjection.filter(v => v > 0).length)
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Retirement Planner" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Retirement Planner</h1>
          <p className="text-gray-600 mb-8">Plan for your retirement by estimating future needs and setting appropriate goals.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Information</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="currentAge">Current Age: {currentAge}</Label>
                  <Slider 
                    id="currentAge"
                    value={[currentAge]} 
                    min={18} 
                    max={80} 
                    step={1}
                    onValueChange={(value) => setCurrentAge(value[0])}
                  />
                </div>
                
                <div>
                  <Label htmlFor="retirementAge">Retirement Age: {retirementAge}</Label>
                  <Slider 
                    id="retirementAge"
                    value={[retirementAge]} 
                    min={Math.max(currentAge + 1, 50)} 
                    max={85} 
                    step={1}
                    onValueChange={(value) => setRetirementAge(value[0])}
                  />
                </div>
                
                <div>
                  <Label htmlFor="estimatedLifespan">Estimated Lifespan: {estimatedLifespan}</Label>
                  <Slider 
                    id="estimatedLifespan"
                    value={[estimatedLifespan]} 
                    min={Math.max(retirementAge + 1, 70)} 
                    max={110} 
                    step={1}
                    onValueChange={(value) => setEstimatedLifespan(value[0])}
                  />
                </div>
                
                <div>
                  <Label htmlFor="currentSavings">Current Retirement Savings ($)</Label>
                  <Input
                    id="currentSavings"
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="monthlySavings">Monthly Contribution ($)</Label>
                  <Input
                    id="monthlySavings"
                    type="number"
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(Number(e.target.value))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="annualReturn">Expected Annual Return (%): {annualReturn}</Label>
                  <Slider 
                    id="annualReturn"
                    value={[annualReturn]} 
                    min={1} 
                    max={12} 
                    step={0.5}
                    onValueChange={(value) => setAnnualReturn(value[0])}
                  />
                </div>
                
                <div>
                  <Label htmlFor="inflationRate">Inflation Rate (%): {inflationRate}</Label>
                  <Slider 
                    id="inflationRate"
                    value={[inflationRate]} 
                    min={1} 
                    max={8} 
                    step={0.5}
                    onValueChange={(value) => setInflationRate(value[0])}
                  />
                </div>
                
                <div>
                  <Label htmlFor="desiredMonthlyIncome">Desired Monthly Retirement Income ($)</Label>
                  <Input
                    id="desiredMonthlyIncome"
                    type="number"
                    value={desiredMonthlyIncome}
                    onChange={(e) => setDesiredMonthlyIncome(Number(e.target.value))}
                  />
                </div>
              </div>
              
              <Button 
                onClick={calculateRetirement} 
                className="w-full mt-6 bg-[#9b87f5] hover:bg-[#8a75f0]"
              >
                Calculate Retirement Plan
              </Button>
            </Card>
            
            {retirementResults && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Retirement Forecast</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium">Projected Savings at Retirement</h3>
                    <p className="text-2xl font-bold text-[#9b87f5]">
                      ${retirementResults.projectedSavings.toLocaleString()}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Retirement Income Status</h3>
                    <p className={`font-bold ${retirementResults.canFundRetirement ? 'text-green-600' : 'text-amber-600'}`}>
                      {retirementResults.canFundRetirement 
                        ? `Your savings should last your lifetime (${retirementResults.yearsInRetirement} years)`
                        : `Your savings will last approximately ${retirementResults.yearsSavingsLast} years`
                      }
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Savings Projection</h3>
                    <div className="h-64 mt-4">
                      <LineChart
                        labels={retirementResults.chartLabels}
                        datasets={[
                          {
                            data: retirementResults.savingsProjection,
                            label: "Savings Balance",
                            borderColor: "#9b87f5",
                            backgroundColor: "rgba(155, 135, 245, 0.1)",
                            fill: true,
                          }
                        ]}
                      />
                    </div>
                  </div>
                  
                  {!retirementResults.canFundRetirement && (
                    <div className="p-4 bg-amber-50 rounded-md">
                      <h3 className="font-medium text-amber-700">Recommendations</h3>
                      <ul className="list-disc list-inside mt-2 text-amber-700">
                        <li>Consider increasing your monthly contributions</li>
                        <li>Adjust your expected retirement age</li>
                        <li>Review your desired retirement income</li>
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RetirementPlanner;
