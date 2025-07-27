import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Shield, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const isMobile = useIsMobile();

  const steps = [
    {
      number: 1,
      title: 'Strategic Fund Management',
      description: 'Future Wave operates as a suite of investment funds, focusing on allocating capital to both debt and equity projects across diverse markets.',
      icon: Target,
      details: [
        'Professional fund management',
        'Diversified investment strategies',
        'Focus on sustainable growth',
        'Rigorous due diligence process'
      ]
    },
    {
      number: 2,
      title: 'Capital Pooling & Investment',
      description: 'Our funds pool capital from investors and deploy it according to specific investment strategies that guide allocation and management.',
      icon: Users,
      details: [
        'Collective investment power',
        'Professional portfolio management',
        'Risk distribution benefits',
        'Access to institutional opportunities'
      ]
    },
    {
      number: 3,
      title: 'Risk-Tailored Plans',
      description: 'Choose from three risk plans - Conservative, Balanced, and Growth - aligned with your risk tolerance and financial objectives.',
      icon: Shield,
      details: [
        'Personalized risk assessment',
        'Flexible allocation options',
        'Transparent risk management',
        'Regular portfolio rebalancing'
      ]
    },
    {
      number: 4,
      title: 'Optimized Returns',
      description: 'Our structured approach aims to optimize returns while managing risks, creating a harmonious balance for sustainable growth.',
      icon: TrendingUp,
      details: [
        'Performance optimization',
        'Regular monitoring & adjustments',
        'Market opportunity identification',
        'Long-term wealth building focus'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="How It Works" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'}`}>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                How Future Wave Works
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding our investment process - from fund management to optimized returns
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">4</div>
                  <p className="text-sm text-muted-foreground">Simple Steps</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <p className="text-sm text-muted-foreground">Risk Plans</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <p className="text-sm text-muted-foreground">Monitoring</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">∞</div>
                  <p className="text-sm text-muted-foreground">Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="mb-12 last:mb-0">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 md:mb-0">
                          {step.number}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <Card className="border-none shadow-lg">
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                              <CardTitle className="text-xl">{step.title}</CardTitle>
                            </div>
                            <CardDescription className="text-base">
                              {step.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {step.details.map((detail, i) => (
                                <div key={i} className="flex items-center text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className="flex justify-center my-8">
                        <ArrowRight className="h-8 w-8 text-primary/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment Philosophy */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Investment Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Risk Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive risk assessment and mitigation strategies to protect your investments while pursuing growth opportunities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Strategic Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Carefully selected investment opportunities based on thorough market analysis and long-term growth potential.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Sustainable Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Building wealth through disciplined investment strategies that balance current returns with future growth potential.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Investment Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of investors who trust Future Wave with their financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Investing Today
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;