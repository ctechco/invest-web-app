
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from '@/components/MobileHeader';
import MobileNavBar from '@/components/MobileNavBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CookiePolicy = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Cookie Policy" showBackButton={true} />
      ) : (
        <Navbar />
      )}
      <main className={`flex-grow ${isMobile ? 'pt-0 pb-20' : 'pt-14 md:pt-16'} px-4 py-6`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What are Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function properly. They enable you to navigate 
                    the website and use its features, such as accessing secure areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-gray-700">
                    We use analytics cookies to understand how visitors interact with our website. This helps us 
                    improve our services and user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Functional Cookies</h4>
                  <p className="text-gray-700">
                    These cookies allow the website to remember choices you make and provide enhanced features 
                    and personal content.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left">Cookie Name</th>
                        <th className="border border-gray-300 p-3 text-left">Purpose</th>
                        <th className="border border-gray-300 p-3 text-left">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">_session</td>
                        <td className="border border-gray-300 p-3">Maintains user session</td>
                        <td className="border border-gray-300 p-3">Session</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">_analytics</td>
                        <td className="border border-gray-300 p-3">Website analytics</td>
                        <td className="border border-gray-300 p-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">_preferences</td>
                        <td className="border border-gray-300 p-3">User preferences</td>
                        <td className="border border-gray-300 p-3">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in various ways. Please note that removing or blocking 
                  cookies may impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">• Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.</p>
                  <p className="text-gray-700">• You can delete existing cookies from your browser.</p>
                  <p className="text-gray-700">• You can set your browser to notify you when you receive a cookie.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  If you have any questions about our Cookie Policy, please contact us at:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="text-gray-700">Email: privacy@futurewave.com</p>
                  <p className="text-gray-700">Phone: +44 20 1234 5678</p>
                  <p className="text-gray-700">Address: 123 Financial District, London, UK EC4A 2BP</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      {isMobile && <MobileNavBar />}
    </div>
  );
};

export default CookiePolicy;
