import React, { useState } from "react";


const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between min-h-[56px]">
          <div className="flex items-center pr-8">
            <span className="text-2xl font-extrabold tracking-tight text-blue-700 select-none">LLM Costing</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection("services")} className="transition-colors transition-transform duration-200 text-headernav font-medium hover:text-blue-700 hover:scale-105">Services</button>
            <button onClick={() => scrollToSection("how-it-works")} className="transition-colors transition-transform duration-200 text-headernav font-medium hover:text-blue-700 hover:scale-105">Process</button>
            <button onClick={() => scrollToSection("tech-stack")} className="transition-colors transition-transform duration-200 text-headernav font-medium hover:text-blue-700 hover:scale-105">Tech Stack</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 font-semibold shadow transition">Book a Consultation</button>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="h-6 w-6">☰</span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("services")} className="transition-colors transition-transform duration-200 text-left text-headernav hover:text-headernav-dark hover:scale-105">Services</button>
            <button onClick={() => scrollToSection("how-it-works")} className="transition-colors transition-transform duration-200 text-left text-headernav hover:text-headernav-dark hover:scale-105">Process</button>
            <button onClick={() => scrollToSection("tech-stack")} className="transition-colors transition-transform duration-200 text-left text-headernav hover:text-headernav-dark hover:scale-105">Tech Stack</button>
            <button className="bg-primary hover:bg-sky-400 text-primary-foreground w-full hover:shadow-sky-blue rounded-lg px-4 py-2 font-semibold transition">Book a Consultation</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
