import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, User, DollarSign, Target, FileText } from 'lucide-react';

interface OnboardingData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  };
  financialInfo: {
    annualIncome: string;
    investmentExperience: string;
    investmentAmount: string;
  };
  riskProfile: {
    riskTolerance: string;
    investmentGoals: string[];
    timeHorizon: string;
  };
  agreements: {
    termsAccepted: boolean;
    riskDisclosureAccepted: boolean;
    privacyPolicyAccepted: boolean;
  };
}

const InvestmentOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: ''
    },
    financialInfo: {
      annualIncome: '',
      investmentExperience: '',
      investmentAmount: ''
    },
    riskProfile: {
      riskTolerance: '',
      investmentGoals: [],
      timeHorizon: ''
    },
    agreements: {
      termsAccepted: false,
      riskDisclosureAccepted: false,
      privacyPolicyAccepted: false
    }
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: 'Personal Information', icon: User },
    { number: 2, title: 'Financial Profile', icon: DollarSign },
    { number: 3, title: 'Risk Assessment', icon: Target },
    { number: 4, title: 'Terms & Agreements', icon: FileText }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (section: keyof OnboardingData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.personalInfo.fullName}
                onChange={(e) => updateFormData('personalInfo', { fullName: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => updateFormData('personalInfo', { email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.personalInfo.phone}
                onChange={(e) => updateFormData('personalInfo', { phone: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.personalInfo.dateOfBirth}
                onChange={(e) => updateFormData('personalInfo', { dateOfBirth: e.target.value })}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Annual Income</Label>
              <RadioGroup
                value={formData.financialInfo.annualIncome}
                onValueChange={(value) => updateFormData('financialInfo', { annualIncome: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under-50k" id="under-50k" />
                  <Label htmlFor="under-50k">Under $50,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50k-100k" id="50k-100k" />
                  <Label htmlFor="50k-100k">$50,000 - $100,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100k-250k" id="100k-250k" />
                  <Label htmlFor="100k-250k">$100,000 - $250,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-250k" id="over-250k" />
                  <Label htmlFor="over-250k">Over $250,000</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Investment Experience</Label>
              <RadioGroup
                value={formData.financialInfo.investmentExperience}
                onValueChange={(value) => updateFormData('financialInfo', { investmentExperience: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner (0-2 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate (2-5 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="experienced" id="experienced" />
                  <Label htmlFor="experienced">Experienced (5+ years)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="investmentAmount">Initial Investment Amount</Label>
              <Input
                id="investmentAmount"
                type="number"
                value={formData.financialInfo.investmentAmount}
                onChange={(e) => updateFormData('financialInfo', { investmentAmount: e.target.value })}
                placeholder="Enter amount ($)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Risk Tolerance</Label>
              <RadioGroup
                value={formData.riskProfile.riskTolerance}
                onValueChange={(value) => updateFormData('riskProfile', { riskTolerance: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="conservative" id="conservative" />
                  <Label htmlFor="conservative">Conservative - Preserve capital, low volatility</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate">Moderate - Balanced growth with manageable risk</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="aggressive" id="aggressive" />
                  <Label htmlFor="aggressive">Aggressive - Maximize growth, accept higher volatility</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Investment Time Horizon</Label>
              <RadioGroup
                value={formData.riskProfile.timeHorizon}
                onValueChange={(value) => updateFormData('riskProfile', { timeHorizon: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="short" id="short" />
                  <Label htmlFor="short">Short-term (1-3 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium-term (3-7 years)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="long" id="long" />
                  <Label htmlFor="long">Long-term (7+ years)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Investment Goals (Select all that apply)</Label>
              <div className="space-y-3 mt-2">
                {['Retirement Planning', 'Wealth Building', 'Income Generation', 'Tax Efficiency', 'Education Funding'].map((goal) => (
                  <div key={goal} className="flex items-center space-x-2">
                    <Checkbox
                      id={goal}
                      checked={formData.riskProfile.investmentGoals.includes(goal)}
                      onCheckedChange={(checked) => {
                        const goals = formData.riskProfile.investmentGoals;
                        if (checked) {
                          updateFormData('riskProfile', { investmentGoals: [...goals, goal] });
                        } else {
                          updateFormData('riskProfile', { investmentGoals: goals.filter(g => g !== goal) });
                        }
                      }}
                    />
                    <Label htmlFor={goal}>{goal}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreements.termsAccepted}
                  onCheckedChange={(checked) => updateFormData('agreements', { termsAccepted: checked })}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the <span className="text-primary cursor-pointer">Terms of Service</span> and understand the investment process
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="risk"
                  checked={formData.agreements.riskDisclosureAccepted}
                  onCheckedChange={(checked) => updateFormData('agreements', { riskDisclosureAccepted: checked })}
                />
                <Label htmlFor="risk" className="text-sm leading-relaxed">
                  I acknowledge the <span className="text-primary cursor-pointer">Risk Disclosure</span> and understand that all investments carry inherent risks
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={formData.agreements.privacyPolicyAccepted}
                  onCheckedChange={(checked) => updateFormData('agreements', { privacyPolicyAccepted: checked })}
                />
                <Label htmlFor="privacy" className="text-sm leading-relaxed">
                  I agree to the <span className="text-primary cursor-pointer">Privacy Policy</span> and consent to data processing
                </Label>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Important Disclaimer:</strong> Future Wave provides investment opportunities but does not guarantee returns. 
                All investments carry risk and you may lose money. Please ensure you understand the risks before proceeding.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.personalInfo.fullName && formData.personalInfo.email && formData.personalInfo.phone;
      case 2:
        return formData.financialInfo.annualIncome && formData.financialInfo.investmentExperience && formData.financialInfo.investmentAmount;
      case 3:
        return formData.riskProfile.riskTolerance && formData.riskProfile.timeHorizon;
      case 4:
        return formData.agreements.termsAccepted && formData.agreements.riskDisclosureAccepted && formData.agreements.privacyPolicyAccepted;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Investment Onboarding</h2>
          <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Navigation */}
      <div className="flex justify-between mb-8">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center ${
                step.number <= currentStep ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step.number <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                <IconComponent className="h-5 w-5" />
              </div>
              <span className="text-xs hidden sm:block">{step.title}</span>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>
            {currentStep === 1 && "Tell us about yourself"}
            {currentStep === 2 && "Help us understand your financial situation"}
            {currentStep === 3 && "Assess your investment preferences"}
            {currentStep === 4 && "Review and accept terms"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
        
        {currentStep < totalSteps ? (
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex items-center gap-2"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            disabled={!isStepValid()}
            className="flex items-center gap-2"
          >
            Complete Onboarding
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default InvestmentOnboarding;