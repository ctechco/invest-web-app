import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Zap } from 'lucide-react';

const InvestmentPlans = () => {
  const isMobile = useIsMobile();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'low-risk',
      title: 'Conservative Plan',
      icon: Shield,
      description: 'Stable investments with substantial collateral protection',
      features: [
        'High collateral-to-loan ratio',
        'Minimum risk exposure',
        'Stable returns',
        'Can allocate 100% of capital'
      ],
      allocation: 'Up to 100% of portfolio',
      riskLevel: 'Low',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 'medium-risk',
      title: 'Balanced Plan',
      icon: TrendingUp,
      description: 'Balanced approach with moderate growth potential',
      features: [
        'Diversified collateral portfolio',
        'Moderate loan-to-value ratio',
        'Balanced risk-return profile',
        'Requires equal low-risk investment'
      ],
      allocation: 'Up to 50% of portfolio',
      riskLevel: 'Medium',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 'high-risk',
      title: 'Growth Plan',
      icon: Zap,
      description: 'Higher potential returns with elevated risk',
      features: [
        'Higher loan-to-value ratios',
        'Potential for higher returns',
        'Some uncollateralized positions',
        'Requires balanced portfolio base'
      ],
      allocation: 'Up to 33% of portfolio',
      riskLevel: 'High',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Investment Plans" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Diversified Investment Plans
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our three carefully designed investment plans to match your risk tolerance and financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Plans */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const IconComponent = plan.icon;
                return (
                  <Card 
                    key={plan.id} 
                    className={`${plan.color} ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''} cursor-pointer transition-all hover:shadow-lg`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-white`}>
                          <IconComponent className={`h-6 w-6 ${plan.iconColor}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{plan.title}</CardTitle>
                          <span className={`text-sm font-medium px-2 py-1 rounded-full ${plan.iconColor} bg-white`}>
                            {plan.riskLevel} Risk
                          </span>
                        </div>
                      </div>
                      <CardDescription className="text-gray-700">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-sm font-medium text-gray-900">
                            Portfolio Allocation: {plan.allocation}
                          </p>
                        </div>
                        <Button 
                          className="w-full"
                          variant={selectedPlan === plan.id ? "default" : "outline"}
                        >
                          {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Diversification Model */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Future Wave Diversification Model
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Smart Allocation Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">Conservative Plan: Unlimited allocation for security-focused investors</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">Balanced Plan: Up to 50% with equal low-risk requirement</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">Growth Plan: Maximum 33% with balanced foundation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Risk Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Our diversification model ensures responsible investment by avoiding concentration risk in any single venture.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Portfolio Diversification</span>
                        <span className="text-sm font-medium">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Collateral Protection</span>
                        <span className="text-sm font-medium">Multi-layered</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Risk Distribution</span>
                        <span className="text-sm font-medium">Optimized</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                <p className="text-gray-600">Assets Under Management</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-gray-600">Active Investors</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
                <p className="text-gray-600">Investor Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {selectedPlan && (
          <section className="py-12 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Investing?</h2>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of investors building wealth with Future Wave
              </p>
              <Button variant="secondary" size="lg">
                Get Started Today
              </Button>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default InvestmentPlans;