import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
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
import NotFound from "@/pages/not-found";

function Router() {
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
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
