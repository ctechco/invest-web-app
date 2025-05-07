
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Briefcase, TrendingUp, Users, Shield, BarChart3 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
    <CardHeader className="pb-2">
      <div className="bg-blue-50 p-3 w-fit rounded-lg mb-4">
        <Icon className="h-6 w-6 text-quan-blue" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-sm text-gray-600">
          <CheckCircle className="h-4 w-4 text-quan-gold mr-2" />
          <span>Expert advisors</span>
        </li>
        <li className="flex items-center text-sm text-gray-600">
          <CheckCircle className="h-4 w-4 text-quan-gold mr-2" />
          <span>Tailored strategies</span>
        </li>
        <li className="flex items-center text-sm text-gray-600">
          <CheckCircle className="h-4 w-4 text-quan-gold mr-2" />
          <span>Continuous support</span>
        </li>
      </ul>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Investment Management',
      description: 'Customized investment portfolios designed to meet your financial goals with risk management strategies.',
    },
    {
      icon: TrendingUp,
      title: 'Wealth Planning',
      description: 'Comprehensive wealth planning to secure your financial future and create lasting legacies.',
    },
    {
      icon: Users,
      title: 'Retirement Planning',
      description: 'Strategic retirement plans to ensure financial security and lifestyle maintenance during retirement.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Protecting your assets and investments through diversification and risk mitigation strategies.',
    },
    {
      icon: BarChart3,
      title: 'Estate Planning',
      description: 'Preserve and efficiently transfer wealth to future generations with comprehensive estate plans.',
    },
    {
      icon: Briefcase,
      title: 'Tax Optimization',
      description: 'Strategic approaches to minimize tax impact and maximize the growth of your investments.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">Our Investment Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to build, protect, and grow your wealth with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
