
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Terms of Service" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 19, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Future Wave ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at futurewave.com (together or individually "Service") operated by Future Wave.
            </p>
            <p className="mb-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Investment Advice Disclaimer</h2>
            <p className="mb-4">
              The content on our Service is for informational purposes only. Future Wave is not a registered investment advisor, broker/dealer, or financial analyst. All information provided is general in nature and is not tailored to any specific investor's needs or investment objectives.
            </p>
            <p className="mb-4">
              The financial markets are volatile and all types of investment or trading involve risk of loss. Capital invested is at risk of loss. Past performance is not indicative of future results.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Future Wave and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Future Wave.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Future Wave, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at legal@futurewave.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
