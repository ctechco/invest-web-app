
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import MobileNavBar from '@/components/MobileNavBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Phone, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Support = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Support" showBackButton={false} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0 pb-20' : 'pt-14 md:pt-16'}`}>
        {/* Header Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-futurewave-purple mb-4">How Can We Help You?</h2>
              <p className="text-lg text-gray-600">
                Choose the support option that works best for you, or browse our frequently asked questions below.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Support Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-[#9b87f5] mb-2" />
                  <CardTitle>Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Chat with our support team in real time for immediate assistance.</p>
                  <Button className="bg-[#9b87f5] hover:bg-[#8a74e8] w-full">Start Chat</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-10 w-10 text-[#9b87f5] mb-2" />
                  <CardTitle>Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
                  <Button className="bg-[#9b87f5] hover:bg-[#8a74e8] w-full">Email Us</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-10 w-10 text-[#9b87f5] mb-2" />
                  <CardTitle>Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Call us directly at our customer service line.</p>
                  <Button className="bg-[#9b87f5] hover:bg-[#8a74e8] w-full">Call Now</Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea placeholder="Describe your issue in detail" className="min-h-[120px]" />
                  </div>
                  <Button className="bg-[#9b87f5] hover:bg-[#8a74e8]">Submit</Button>
                </form>
              </CardContent>
            </Card>
            
            {/* FAQ Section */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <HelpCircle className="h-6 w-6 text-[#9b87f5] mr-2" />
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
              </div>
              
              {[
                {
                  question: "How do I open an investment account?",
                  answer: "To open an account, click on the 'Get Started' button, complete the registration form, verify your email address, and follow the guided process to set up your account."
                },
                {
                  question: "What are the minimum investment requirements?",
                  answer: "Our standard accounts have a minimum investment of $1,000. However, our starter portfolios can be opened with as little as $100."
                },
                {
                  question: "How are my investments protected?",
                  answer: "Your investments are protected by industry-standard encryption and security protocols. Additionally, we have SIPC insurance which covers up to $500,000 per account."
                },
                {
                  question: "Can I withdraw my funds at any time?",
                  answer: "Yes, you can withdraw your funds at any time. Standard withdrawals typically process within 2-3 business days. Some specialized investments may have specific lock-up periods."
                }
              ].map((item, index) => (
                <Card key={index} className="mb-3">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">{item.question}</h4>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {isMobile && <MobileNavBar />}
    </div>
  );
};

export default Support;
