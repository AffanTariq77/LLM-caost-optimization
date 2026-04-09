import { Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";

// Lazy load non-critical components
const Services = lazy(() => import("@/components/Services"));
const Process = lazy(() => import("@/components/Process"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholder
const LoadingPlaceholder = () => <div className="h-64 bg-gray-100 animate-pulse" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
    <div className="pt-24 sm:pt-28 md:pt-32 mb-[-5rem] sm:mb-[-5rem] md:mb-[-6rem] text-center bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight px-2"
      style={{ color: "#192841" }}
    >
      LLM Cost Optimization
    </h1>
  </div>
</div>

      <Hero />
      <Problem />
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Process />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <ContactForm />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
