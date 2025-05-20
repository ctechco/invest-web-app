
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/Dashboard";
import MarketData from "./pages/MarketData";
import InvestmentTools from "./pages/InvestmentTools";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Authentication from "./pages/Authentication";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Import the tool pages
import InvestmentCalculator from "./pages/tools/InvestmentCalculator";
import PortfolioAnalyzer from "./pages/tools/PortfolioAnalyzer";
import RetirementPlanner from "./pages/tools/RetirementPlanner";
import RiskAssessment from "./pages/tools/RiskAssessment";

// Import education subpages
import InvestingBasics from "./pages/education/InvestingBasics";
import MarketAnalysis from "./pages/education/MarketAnalysis";
import RetirementPlanning from "./pages/education/RetirementPlanning";

// Import education article pages
import ETFvsMutualFunds from "./pages/education/articles/ETFvsMutualFunds";
import TaxEfficientInvesting from "./pages/education/articles/TaxEfficientInvesting";
import MarketVolatility from "./pages/education/articles/MarketVolatility";

import "./App.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  // Set viewport height for mobile browsers
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppShell>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/market-data" element={<MarketData />} />
                <Route path="/tools" element={<InvestmentTools />} />
                <Route path="/education" element={<Education />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/support" element={<Support />} />
                <Route path="/auth" element={<Authentication />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                
                {/* Add routes for the individual tool pages */}
                <Route path="/tools/calculator" element={<InvestmentCalculator />} />
                <Route path="/tools/portfolio-analyzer" element={<PortfolioAnalyzer />} />
                <Route path="/tools/retirement-planner" element={<RetirementPlanner />} />
                <Route path="/tools/risk-assessment" element={<RiskAssessment />} />
                
                {/* Education subpages */}
                <Route path="/education/investing-basics" element={<InvestingBasics />} />
                <Route path="/education/market-analysis" element={<MarketAnalysis />} />
                <Route path="/education/retirement-planning" element={<RetirementPlanning />} />
                
                {/* Education article pages */}
                <Route path="/education/articles/etf-vs-mutual-funds" element={<ETFvsMutualFunds />} />
                <Route path="/education/articles/tax-efficient-investing" element={<TaxEfficientInvesting />} />
                <Route path="/education/articles/market-volatility" element={<MarketVolatility />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppShell>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
