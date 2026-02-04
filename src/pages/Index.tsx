import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
    <div className="pt-20 sm:pt-24 md:pt-32 pb-2 md:pb-3 text-center bg-white overflow-x-hidden">
  <div className="container mx-auto px-3 sm:px-4 md:px-6 w-full">
    <h1
      className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight break-words"
      style={{ color: "#192841" }}
    >
      LLM Cost Optimization
    </h1>
  </div>
</div>

      <Hero />
      <Problem />
      <Services />
      <Process />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
