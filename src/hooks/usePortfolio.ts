
import { useState, useEffect } from 'react';

export const usePortfolio = (initialValue: number) => {
  const [portfolioValue, setPortfolioValue] = useState(initialValue);
  const [dailyChange, setDailyChange] = useState({ value: 583.25, percentage: 2.4 });
  const [monthlyReturn, setMonthlyReturn] = useState({ value: -294.83, percentage: -1.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioValue(prev => {
        const change = prev * (Math.random() * 0.002 - 0.001);
        return +(prev + change).toFixed(2);
      });
      
      setDailyChange(prev => {
        const newValue = +(prev.value + (Math.random() * 10 - 5)).toFixed(2);
        const newPercentage = +(newValue / portfolioValue * 100).toFixed(2);
        return { value: newValue, percentage: newPercentage };
      });
      
      if (Math.random() > 0.7) {
        setMonthlyReturn(prev => {
          const newValue = +(prev.value + (Math.random() * 20 - 10)).toFixed(2);
          const newPercentage = +(newValue / portfolioValue * 100).toFixed(2);
          return { value: newValue, percentage: newPercentage };
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [portfolioValue]);

  const addToPortfolio = (amount: number) => {
    setPortfolioValue(prev => prev + amount);
  };

  return {
    portfolioValue,
    dailyChange,
    monthlyReturn,
    addToPortfolio,
  };
};
