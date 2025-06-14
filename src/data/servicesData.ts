
import React from 'react';
import { 
  Briefcase, TrendingUp, Users, Shield, 
  BarChart3, Calculator, LineChart, 
  Building, Landmark, FileText, PiggyBank
} from 'lucide-react';

export type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
    {
      icon: Briefcase,
      title: 'Investment Management',
      description: 'Our investment management service builds and manages diversified portfolios tailored to your risk tolerance, time horizon, and financial goals.',
      benefits: [ 'Personalized investment strategies', 'Regular portfolio rebalancing', 'Active risk management', 'Access to exclusive investment opportunities' ]
    },
    {
      icon: TrendingUp,
      title: 'Wealth Planning',
      description: 'Comprehensive wealth planning to help you build, protect, and transfer your wealth effectively across generations.',
      benefits: [ 'Holistic financial assessment', 'Goal-oriented planning', 'Regular strategy reviews and updates', 'Integration with tax and estate planning' ]
    },
    {
      icon: Users,
      title: 'Retirement Planning',
      description: 'Develop a robust retirement strategy to ensure financial independence and maintain your desired lifestyle after your working years.',
      benefits: [ 'Income needs assessment', 'Social security optimization', 'Pension analysis and planning', 'Healthcare cost planning' ]
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify potential risks to your financial wellbeing and implement strategies to protect your assets, income, and loved ones.',
      benefits: [ 'Insurance needs analysis', 'Portfolio risk assessment', 'Crisis preparation strategies', 'Wealth preservation techniques' ]
    },
    {
      icon: BarChart3,
      title: 'Estate Planning',
      description: 'Create a comprehensive estate plan to ensure your assets are distributed according to your wishes and minimize tax implications.',
      benefits: [ 'Will and trust creation', 'Beneficiary designation review', 'Estate tax minimization strategies', 'Legacy planning guidance' ]
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Implement tax-efficient investment strategies and planning techniques to minimize your tax burden and maximize wealth accumulation.',
      benefits: [ 'Tax-loss harvesting', 'Strategic income timing', 'Charitable giving strategies', 'Retirement account optimization' ]
    },
    {
      icon: LineChart,
      title: 'Financial Planning',
      description: 'Develop a comprehensive roadmap for achieving your short and long-term financial goals with actionable strategies.',
      benefits: [ 'Cash flow analysis', 'Debt management strategies', 'Education funding planning', 'Major purchase planning' ]
    },
    {
      icon: Building,
      title: 'Corporate Services',
      description: 'Specialized financial services for businesses, including employee benefits, succession planning, and corporate investments.',
      benefits: [ 'Employee retirement plans', 'Business continuity planning', 'Key person insurance strategies', 'Corporate cash management' ]
    },
    {
      icon: Landmark,
      title: 'Banking Services',
      description: 'Premium banking solutions designed for high-net-worth individuals with personalized service and exclusive benefits.',
      benefits: [ 'Private banking relationships', 'Competitive lending rates', 'International banking solutions', 'Concierge financial services' ]
    },
    {
      icon: FileText,
      title: 'Financial Education',
      description: 'Educational resources and personalized coaching to help you make informed financial decisions with confidence.',
      benefits: [ 'One-on-one financial coaching', 'Investment workshops', 'Financial literacy resources', 'Market insights and research' ]
    },
    {
      icon: PiggyBank,
      title: 'Trust Services',
      description: 'Establish and manage trusts to protect your assets, provide for loved ones, and support charitable causes.',
      benefits: [ 'Trust establishment guidance', 'Professional trust administration', 'Beneficiary support services', 'Regular trust reviews and updates' ]
    },
    {
      icon: Briefcase,
      title: 'Alternative Investments',
      description: 'Access to exclusive alternative investment opportunities including private equity, real estate, and hedge funds.',
      benefits: [ 'Portfolio diversification', 'Reduced market correlation', 'Potential for enhanced returns', 'Access to exclusive opportunities' ]
    },
  ];
