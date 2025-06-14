
import React from 'react';

const ProcessSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-futurewave-purple mb-4">Our Client Process</h2>
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
                  <h3 className="text-xl font-bold text-futurewave-purple mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">We start by understanding your current financial situation, goals, and concerns through an in-depth conversation.</p>
                </div>
                <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-futurewave-purple text-white flex items-center justify-center font-bold relative z-10">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:mt-0 mt-4 md:block hidden"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-futurewave-purple text-white flex items-center justify-center font-bold relative z-10">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-futurewave-purple mb-2">Financial Analysis</h3>
                  <p className="text-gray-600">Our team conducts a comprehensive analysis of your current financial position, identifying opportunities and potential risks.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-futurewave-purple mb-2">Strategy Development</h3>
                  <p className="text-gray-600">We create a customized financial strategy aligned with your goals, risk tolerance, and timeline.</p>
                </div>
                <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-futurewave-purple text-white flex items-center justify-center font-bold relative z-10">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:mt-0 mt-4 md:block hidden"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                  <div className="md:w-12 md:flex-shrink-0 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-futurewave-purple text-white flex items-center justify-center font-bold relative z-10">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-bold text-futurewave-purple mb-2">Implementation</h3>
                    <p className="text-gray-600">We put your personalized strategy into action, managing all aspects of the implementation process.</p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;
