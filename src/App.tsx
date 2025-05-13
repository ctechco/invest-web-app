
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
import BrandAssets from "./pages/BrandAssets";
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
                <Route path="/brand-assets" element={<BrandAssets />} />
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
