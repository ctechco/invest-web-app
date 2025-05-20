
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const InvestmentCalculator = () => {
  const isMobile = useIsMobile();
  const [initialInvestment, setInitialInvestment] = useState<string>('10000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('500');
  const [years, setYears] = useState<string>('10');
  const [interestRate, setInterestRate] = useState<string>('7');
  const [compoundFrequency, setCompoundFrequency] = useState<string>('12');
  const [result, setResult] = useState<number | null>(null);

  const calculateInvestment = () => {
    const P = parseFloat(initialInvestment);
    const PMT = parseFloat(monthlyContribution);
    const r = parseFloat(interestRate) / 100;
    const n = parseInt(compoundFrequency);
    const t = parseInt(years);
    
    // Calculate final amount using compound interest formula with regular contributions
    const ratePerPeriod = r / n;
    const totalPeriods = n * t;
    
    // Formula for future value with regular contributions
    const compoundFactor = Math.pow(1 + ratePerPeriod, totalPeriods);
    const contributionFactor = (compoundFactor - 1) / ratePerPeriod;
    
    const finalAmount = P * compoundFactor + PMT * contributionFactor;
    
    setResult(parseFloat(finalAmount.toFixed(2)));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Investment Calculator" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Investment Calculator</h1>
          <p className="text-gray-600 mb-8">Calculate potential returns based on different investment strategies and time periods.</p>
          
          <Card className="p-6">
            <div className="grid gap-6 mb-6">
              <div>
                <Label htmlFor="initialInvestment">Initial Investment ($)</Label>
                <Input
                  id="initialInvestment"
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                <Input
                  id="monthlyContribution"
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="years">Time Period (years)</Label>
                <Input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="interestRate">Expected Annual Return (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="compoundFrequency">Compound Frequency</Label>
                <Select value={compoundFrequency} onValueChange={setCompoundFrequency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Annually</SelectItem>
                    <SelectItem value="4">Quarterly</SelectItem>
                    <SelectItem value="12">Monthly</SelectItem>
                    <SelectItem value="365">Daily</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button onClick={calculateInvestment} className="w-full bg-[#9b87f5] hover:bg-[#8a75f0]">
              Calculate
            </Button>
            
            {result !== null && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <p className="text-gray-700">Expected Final Amount:</p>
                <p className="text-2xl font-bold text-[#9b87f5]">${result.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Total Investment: ${(parseFloat(initialInvestment) + parseFloat(monthlyContribution) * 12 * parseFloat(years)).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Total Return: ${(result - parseFloat(initialInvestment) - parseFloat(monthlyContribution) * 12 * parseFloat(years)).toLocaleString()}
                </p>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InvestmentCalculator;
