
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/common/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SpineBrainSurgery from "./pages/treatments/SpineBrainSurgery";
import KidneyLiverTransplant from "./pages/treatments/KidneyLiverTransplant";
import PlanYourTrip from "./pages/PlanYourTrip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/treatments/spine-brain-surgery" element={<SpineBrainSurgery />} />
          <Route path="/treatments/kidney-liver-transplant" element={<KidneyLiverTransplant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
