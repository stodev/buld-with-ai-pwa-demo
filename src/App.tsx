
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Submissions from "./pages/Submissions";
import Prizes from "./pages/Prizes";
import NotFound from "./pages/NotFound";
import { SignupPanelProvider } from "./contexts/SignupPanelContext";
import { LearnMoreProvider } from "./contexts/LearnMoreContext"; 
import SignupPanel from "./components/signup/SignupPanel";
import PageTransition from "./components/PageTransition";
import { useSignupPanel } from "./contexts/SignupPanelContext";

const queryClient = new QueryClient();

// App wrapper component to use the context
const AppContent = () => {
  const { isOpen, setIsOpen } = useSignupPanel();
  
  return (
    <>
      <SignupPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/submissions" element={<PageTransition><Submissions /></PageTransition>} />
        <Route path="/prizes" element={<PageTransition><Prizes /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SignupPanelProvider>
          <LearnMoreProvider>
            <AppContent />
          </LearnMoreProvider>
        </SignupPanelProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
