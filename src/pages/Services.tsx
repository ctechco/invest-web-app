import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import ServiceCard from '@/components/ServiceCard';
import ServiceDetailDrawer from '@/components/ServiceDetailDrawer';
import { 
  Briefcase, CheckCircle, TrendingUp, Shield, 
  Users, BarChart3, Calculator, LineChart, 
  Building, Landmark, FileText, PiggyBank
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
};

const Services = () => {
  const isMobile = useIsMobile();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const services: Service[] = [
    {
      icon: Briefcase,
      title: 'Investment Management',
      description: 'Our investment management service builds and manages diversified portfolios tailored to your risk tolerance, time horizon, and financial goals.',
      benefits: [
        'Personalized investment strategies',
        'Regular portfolio rebalancing',
        'Active risk management',
        'Access to exclusive investment opportunities'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Wealth Planning',
      description: 'Comprehensive wealth planning to help you build, protect, and transfer your wealth effectively across generations.',
      benefits: [
        'Holistic financial assessment',
        'Goal-oriented planning',
        'Regular strategy reviews and updates',
        'Integration with tax and estate planning'
      ]
    },
    {
      icon: Users,
      title: 'Retirement Planning',
      description: 'Develop a robust retirement strategy to ensure financial independence and maintain your desired lifestyle after your working years.',
      benefits: [
        'Income needs assessment',
        'Social security optimization',
        'Pension analysis and planning',
        'Healthcare cost planning'
      ]
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify potential risks to your financial wellbeing and implement strategies to protect your assets, income, and loved ones.',
      benefits: [
        'Insurance needs analysis',
        'Portfolio risk assessment',
        'Crisis preparation strategies',
        'Wealth preservation techniques'
      ]
    },
    {
      icon: BarChart3,
      title: 'Estate Planning',
      description: 'Create a comprehensive estate plan to ensure your assets are distributed according to your wishes and minimize tax implications.',
      benefits: [
        'Will and trust creation',
        'Beneficiary designation review',
        'Estate tax minimization strategies',
        'Legacy planning guidance'
      ]
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Implement tax-efficient investment strategies and planning techniques to minimize your tax burden and maximize wealth accumulation.',
      benefits: [
        'Tax-loss harvesting',
        'Strategic income timing',
        'Charitable giving strategies',
        'Retirement account optimization'
      ]
    },
    {
      icon: LineChart,
      title: 'Financial Planning',
      description: 'Develop a comprehensive roadmap for achieving your short and long-term financial goals with actionable strategies.',
      benefits: [
        'Cash flow analysis',
        'Debt management strategies',
        'Education funding planning',
        'Major purchase planning'
      ]
    },
    {
      icon: Building,
      title: 'Corporate Services',
      description: 'Specialized financial services for businesses, including employee benefits, succession planning, and corporate investments.',
      benefits: [
        'Employee retirement plans',
        'Business continuity planning',
        'Key person insurance strategies',
        'Corporate cash management'
      ]
    },
    {
      icon: Landmark,
      title: 'Banking Services',
      description: 'Premium banking solutions designed for high-net-worth individuals with personalized service and exclusive benefits.',
      benefits: [
        'Private banking relationships',
        'Competitive lending rates',
        'International banking solutions',
        'Concierge financial services'
      ]
    },
    {
      icon: FileText,
      title: 'Financial Education',
      description: 'Educational resources and personalized coaching to help you make informed financial decisions with confidence.',
      benefits: [
        'One-on-one financial coaching',
        'Investment workshops',
        'Financial literacy resources',
        'Market insights and research'
      ]
    },
    {
      icon: PiggyBank,
      title: 'Trust Services',
      description: 'Establish and manage trusts to protect your assets, provide for loved ones, and support charitable causes.',
      benefits: [
        'Trust establishment guidance',
        'Professional trust administration',
        'Beneficiary support services',
        'Regular trust reviews and updates'
      ]
    },
    {
      icon: Briefcase,
      title: 'Alternative Investments',
      description: 'Access to exclusive alternative investment opportunities including private equity, real estate, and hedge funds.',
      benefits: [
        'Portfolio diversification',
        'Reduced market correlation',
        'Potential for enhanced returns',
        'Access to exclusive opportunities'
      ]
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'investment', label: 'Investment' },
    { id: 'planning', label: 'Planning' },
    { id: 'advisory', label: 'Advisory' }
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => {
        if (activeCategory === 'investment') {
          return ['Investment Management', 'Alternative Investments', 'Corporate Services'].includes(service.title);
        } else if (activeCategory === 'planning') {
          return ['Wealth Planning', 'Retirement Planning', 'Estate Planning', 'Financial Planning'].includes(service.title);
        } else if (activeCategory === 'advisory') {
          return ['Risk Management', 'Tax Optimization', 'Financial Education', 'Trust Services'].includes(service.title);
        }
        return true;
      });

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Services" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      {/* Page Header */}
      <section className="bg-futurewave-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              Comprehensive Financial Solutions
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              From investment management to financial planning, we offer a complete suite of services designed to help you achieve your financial goals and secure your future.
            </p>
          </div>
        </div>
      </section>
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-0'} px-4 py-6`}>
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold heading-gradient mb-4">Comprehensive Financial Solutions</h2>
              <p className="text-lg text-gray-700">
                At Quan Financial, we offer a wide range of specialized services tailored to meet your unique financial needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white rounded-lg">
                  <div className="p-6">
                    <div className="bg-blue-50 p-3 w-fit rounded-lg mb-4">
                      <service.icon className="h-6 w-6 text-quan-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <h4 className="font-semibold text-quan-blue mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-quan-gold mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold heading-gradient mb-4">Our Client Process</h2>
              <p className="text-lg text-gray-700">
                Experience our structured yet flexible approach to achieving your financial goals.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process steps with timeline */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                
                <div className="space-y-12 relative">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-quan-blue mb-2">Initial Consultation</h3>
                      <p className="text-gray-600">We start by understanding your current financial situation, goals, and concerns through an in-depth conversation.</p>
                    </div>
                    <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-quan-blue text-white flex items-center justify-center font-bold relative z-10">1</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:mt-0 mt-4 md:block hidden"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                    <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-quan-blue text-white flex items-center justify-center font-bold relative z-10">2</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold text-quan-blue mb-2">Financial Analysis</h3>
                      <p className="text-gray-600">Our team conducts a comprehensive analysis of your current financial position, identifying opportunities and potential risks.</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-quan-blue mb-2">Strategy Development</h3>
                      <p className="text-gray-600">We create a customized financial strategy aligned with your goals, risk tolerance, and timeline.</p>
                    </div>
                    <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-quan-blue text-white flex items-center justify-center font-bold relative z-10">3</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:mt-0 mt-4 md:block hidden"></div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                    <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-quan-blue text-white flex items-center justify-center font-bold relative z-10">4</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold text-quan-blue mb-2">Implementation</h3>
                      <p className="text-gray-600">Our team executes your financial plan efficiently, coordinating with other professional advisors as needed.</p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-quan-blue mb-2">Ongoing Monitoring</h3>
                      <p className="text-gray-600">We continuously monitor your financial plan, making adjustments as needed to keep you on track toward your goals.</p>
                    </div>
                    <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-quan-blue text-white flex items-center justify-center font-bold relative z-10">5</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:mt-0 mt-4 md:block hidden"></div>
                  </div>
                  
                  {/* Step 6 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                    <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-quan-blue text-white flex items-center justify-center font-bold relative z-10">6</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold text-quan-blue mb-2">Regular Review</h3>
                      <p className="text-gray-600">We conduct scheduled reviews to assess performance, discuss changes in your circumstances, and adjust strategies accordingly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
      <ServiceDetailDrawer 
        service={selectedService}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Services;
