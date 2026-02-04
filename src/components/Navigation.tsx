import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/airbridge-logo.png";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

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
    <Dialog>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="AirBridge Devs" className="h-7 sm:h-8 w-auto" />
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
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-sky-400 text-primary-foreground hover:shadow-sky-blue min-h-[44px]">
                  Run Your Audit
                </Button>
              </DialogTrigger>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
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
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-sky-400 text-primary-foreground w-full mt-2 min-h-[48px] text-base font-semibold">
                  Run Your Audit
                </Button>
              </DialogTrigger>
            </div>
          )}
        </div>
      </nav>
      <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
        <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
          <div className="p-0">
            <ContactForm onlyForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Navigation;
