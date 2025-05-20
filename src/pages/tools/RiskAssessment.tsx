
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';

const RiskAssessment = () => {
  const isMobile = useIsMobile();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<string | null>(null);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: "How long until you need to access the majority of your investments?",
      options: [
        { text: "0-3 years", value: 1 },
        { text: "3-5 years", value: 2 },
        { text: "5-10 years", value: 3 },
        { text: "10+ years", value: 4 },
      ]
    },
    {
      question: "How would you react if your investment portfolio lost 20% of its value in a month?",
      options: [
        { text: "Sell all my investments to prevent further losses", value: 1 },
        { text: "Sell some investments to reduce risk", value: 2 },
        { text: "Do nothing and wait for recovery", value: 3 },
        { text: "Buy more investments at lower prices", value: 4 },
      ]
    },
    {
      question: "Which statement best describes your investment goal?",
      options: [
        { text: "Preserve capital; avoid losses", value: 1 },
        { text: "Generate income with minimal risk", value: 2 },
        { text: "Balance growth and income", value: 3 },
        { text: "Maximize long-term growth", value: 4 },
      ]
    },
    {
      question: "How comfortable are you with investment risk?",
      options: [
        { text: "Not comfortable - I worry about any losses", value: 1 },
        { text: "Somewhat comfortable with small fluctuations", value: 2 },
        { text: "Comfortable with moderate fluctuations for better returns", value: 3 },
        { text: "Very comfortable - I understand volatility is part of investing", value: 4 },
      ]
    },
    {
      question: "Which investment scenario would you prefer?",
      options: [
        { text: "2% return with no risk of loss", value: 1 },
        { text: "5% return with slight risk of loss", value: 2 },
        { text: "8% return with moderate risk of loss", value: 3 },
        { text: "12% return with significant risk of loss", value: 4 },
      ]
    },
  ];

  const handleAnswerSelect = (value: number) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    const updatedAnswers = { ...answers, [currentQuestion]: selectedAnswer };
    setAnswers(updatedAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate risk score
      const totalScore = Object.values(updatedAnswers).reduce((sum, value) => sum + value, 0);
      const maxPossibleScore = questions.length * 4;
      const scorePercentage = Math.round((totalScore / maxPossibleScore) * 100);
      setRiskScore(scorePercentage);
      
      // Determine risk profile
      let profile: string;
      let recs: string[] = [];
      
      if (scorePercentage < 30) {
        profile = "Conservative";
        recs = [
          "Focus on capital preservation",
          "Consider bonds, certificates of deposit, and money market funds",
          "Maintain emergency fund of 6-12 months of expenses",
          "Allocation suggestion: 70-80% bonds, 20-30% stocks"
        ];
      } else if (scorePercentage < 50) {
        profile = "Moderately Conservative";
        recs = [
          "Focus on income with some growth",
          "Consider a mix of bonds and dividend-paying stocks",
          "Maintain emergency fund of 4-6 months of expenses",
          "Allocation suggestion: 60% bonds, 40% stocks"
        ];
      } else if (scorePercentage < 70) {
        profile = "Moderate";
        recs = [
          "Balance between growth and income",
          "Consider a diversified portfolio of stocks and bonds",
          "Maintain emergency fund of 3-6 months of expenses",
          "Allocation suggestion: 40% bonds, 60% stocks"
        ];
      } else if (scorePercentage < 90) {
        profile = "Moderately Aggressive";
        recs = [
          "Focus on growth with some income",
          "Consider a mix of growth stocks, international investments, and some bonds",
          "Maintain emergency fund of 3 months of expenses",
          "Allocation suggestion: 20-30% bonds, 70-80% stocks"
        ];
      } else {
        profile = "Aggressive";
        recs = [
          "Focus on maximum long-term growth",
          "Consider growth stocks, emerging markets, and alternative investments",
          "Maintain emergency fund of 3 months of expenses",
          "Allocation suggestion: 0-10% bonds, 90-100% stocks"
        ];
      }
      
      setResult(profile);
      setRecommendations(recs);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setRiskScore(null);
    setRecommendations([]);
    setSelectedAnswer(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Risk Assessment" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Investment Risk Assessment</h1>
          <p className="text-gray-600 mb-8">Answer these questions to determine your risk tolerance and get tailored investment recommendations.</p>
          
          {result === null ? (
            <Card className="p-6">
              <div className="mb-6">
                <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
                <div className="text-sm text-gray-500 mt-2">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
              
              <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              
              <div className="mt-8">
                <Button 
                  onClick={handleNext} 
                  className="w-full bg-[#9b87f5] hover:bg-[#8a75f0]"
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < questions.length - 1 ? (
                    <span className="flex items-center">Next <ArrowRight className="ml-2 h-4 w-4" /></span>
                  ) : "Complete Assessment"}
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-2">Your Risk Profile:</h2>
              <div className="text-3xl font-bold text-[#9b87f5] mb-6">{result}</div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Risk Tolerance Score:</h3>
                <div className="flex items-center gap-4">
                  <Progress value={riskScore || 0} className="h-3 flex-grow" />
                  <span className="font-bold">{riskScore}%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Conservative</span>
                  <span>Moderate</span>
                  <span>Aggressive</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="text-gray-700">{rec}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleReset} 
                  variant="outline" 
                  className="w-full"
                >
                  Take Assessment Again
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default RiskAssessment;
