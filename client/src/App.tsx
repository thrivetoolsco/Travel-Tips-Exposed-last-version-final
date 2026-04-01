import { Switch, Route, Router } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import DealSeekers from "@/pages/DealSeekers";
import Contact from "@/pages/Contact";
import VisualJourneys from "@/pages/VisualJourneys";
import Ayahuasca from "@/pages/blog/Ayahuasca";
import RishikeshDharamshala from "@/pages/blog/RishikeshDharamshala";
import BalisOneLoveVibe from "@/pages/blog/BalisOneLoveVibe";
import SkipTheLines from "@/pages/blog/SkipTheLines";
import BaliDelhiBelly from "@/pages/blog/BaliDelhiBelly";
import YogaTeacherTraining from "@/pages/blog/YogaTeacherTraining";
import HousesittingGuide from "@/pages/blog/HousesittingGuide";
import IbogaGabon from "@/pages/blog/IbogaGabon";
import KutaLombok from "@/pages/blog/KutaLombok";
import GiliAir from "@/pages/blog/GiliAir";
import Tetebatu from "@/pages/blog/Tetebatu";
import IndonesiaMoney from "@/pages/blog/IndonesiaMoney";
import NotFound from "@/pages/not-found";

type LocationHook = () => [string, (to: string) => void];

function ClientOnlyToaster() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <Toaster />;
}

interface AppProps {
  helmetContext?: Record<string, any>;
  locationHook?: LocationHook;
}

function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/deal-seekers" component={DealSeekers} />
        <Route path="/contact" component={Contact} />
        <Route path="/visual-journeys" component={VisualJourneys} />
        <Route path="/blog/ayahuasca-retreats-peru" component={Ayahuasca} />
        <Route path="/blog/rishikesh-to-dharamshala" component={RishikeshDharamshala} />
        <Route path="/blog/balis-one-love-vibe" component={BalisOneLoveVibe} />
        <Route path="/blog/skip-lines-bali" component={SkipTheLines} />
        <Route path="/blog/bali-belly-delhi-belly" component={BaliDelhiBelly} />
        <Route path="/blog/yoga-teacher-training-rishikesh" component={YogaTeacherTraining} />
        <Route path="/blog/housesitting-guide" component={HousesittingGuide} />
        <Route path="/blog/iboga-gabon-sacred-wood-la-cite-de-la-source" component={IbogaGabon} />
        <Route path="/is-kuta-lombok-overrated" component={KutaLombok} />
        <Route path="/gili-air-indonesia-travel-guide" component={GiliAir} />
        <Route path="/tetebatu-lombok-honest-review" component={Tetebatu} />
        <Route path="/atm-fees-money-exchange-indonesia" component={IndonesiaMoney} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App({ helmetContext, locationHook }: AppProps = {}) {
  const routerProps = locationHook ? { hook: locationHook as any } : {};

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router {...routerProps}>
            <AppRoutes />
          </Router>
          <ClientOnlyToaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
