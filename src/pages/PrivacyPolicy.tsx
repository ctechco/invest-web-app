
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Privacy Policy" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-0' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 19, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Introduction</h2>
            <p className="mb-4">
              At Future Wave, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Identity Data includes first name, last name, username or similar identifier.</li>
              <li className="mb-2">Contact Data includes email address and telephone numbers.</li>
              <li className="mb-2">Financial Data includes investment preferences and financial goals.</li>
              <li className="mb-2">Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li className="mb-2">Usage Data includes information about how you use our website and services.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. How We Use Your Personal Data</h2>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">To register you as a new customer.</li>
              <li className="mb-2">To provide personalized investment recommendations.</li>
              <li className="mb-2">To manage our relationship with you.</li>
              <li className="mb-2">To improve our website, products/services, marketing or customer relationships.</li>
              <li className="mb-2">To recommend products or services which may be of interest to you.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Data Retention</h2>
            <p className="mb-4">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Request access to your personal data.</li>
              <li className="mb-2">Request correction of your personal data.</li>
              <li className="mb-2">Request erasure of your personal data.</li>
              <li className="mb-2">Object to processing of your personal data.</li>
              <li className="mb-2">Request restriction of processing your personal data.</li>
              <li className="mb-2">Request transfer of your personal data.</li>
              <li className="mb-2">Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@futurewave.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
