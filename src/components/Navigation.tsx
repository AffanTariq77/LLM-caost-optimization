import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/airbridge-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="AirBridge Devs" className="h-7 sm:h-8 w-auto" width="284" height="86" loading="eager" decoding="async" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="transition-colors transition-transform duration-200 text-headernav hover:text-headernav-dark hover:scale-105"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="transition-colors transition-transform duration-200 text-headernav hover:text-headernav-dark hover:scale-105"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="transition-colors transition-transform duration-200 text-headernav hover:text-headernav-dark hover:scale-105"
              >
                FAQ
              </button>
              <Button asChild className="bg-primary hover:bg-sky-400 text-primary-foreground hover:shadow-sky-blue min-h-[44px]">
                <a href="#contact">Run Your Audit</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-2xl leading-none" aria-hidden="true">☰</span>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-base font-medium text-headernav hover:text-headernav-dark py-2 px-2 rounded-lg hover:bg-muted/30 transition-all"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-base font-medium text-headernav hover:text-headernav-dark py-2 px-2 rounded-lg hover:bg-muted/30 transition-all"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-base font-medium text-headernav hover:text-headernav-dark py-2 px-2 rounded-lg hover:bg-muted/30 transition-all"
              >
                FAQ
              </button>
              <Button asChild className="bg-primary hover:bg-sky-400 text-primary-foreground w-full mt-2 min-h-[48px] text-base font-semibold">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Run Your Audit</a>
              </Button>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
