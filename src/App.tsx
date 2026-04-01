import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import WhatIsASD from "@/pages/WhatIsASD";
import Resources from "@/pages/Resources";
import Dashboard from "@/pages/Dashboard";
import Evaluation from "@/pages/Evaluation";
import Results from "@/pages/Results";
import ModelPerformance from "@/pages/ModelPerformance";
import Login from "@/pages/Login";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-is-asd" element={<WhatIsASD />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/results" element={<Results />} />
          <Route path="/model-performance" element={<ModelPerformance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
