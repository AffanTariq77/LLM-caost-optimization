import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import logo from "@/assets/airbridge-logo.png";



const Footer = () => {
  return (
    <Dialog>
    <footer
      className="text-secondary-foreground border-t-[0.5px] border-[#b3c7e6]/50"
      style={{ background: "#98cfecff" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="flex flex-col items-center space-y-4 md:space-y-5">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="AirBridge Devs" className="h-8 w-auto" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#192841" }}
          >
            Start Your Strategic Airbridge to Efficient LLM Usage
          </h2>
          <p className="text-xl text-[#23395d] max-w-2xl mx-auto text-center">
            Run your audit now and discover how much you could be saving.
          </p>
         <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-sky-400 text-primary-foreground  hover:shadow-sky-blue">
                  Run Your Audit
                </Button>
          </DialogTrigger>
        </div>
      </div>

      <div className="border-t border-[#b3c7e6]">
        <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#23395d] opacity-50">
              © 2025 AirBridge Devs. All rights reserved.<br />
              Mission ready engineering for AI systems that deliver precision, discipline, and results.
            </p>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6">
                <a href="#services" className="text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium">Services</a>
                <a href="#process" className="text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium">How It Works</a>
                <a href="#faq" className="text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium">FAQ</a>
              </nav>
              <a
                href="https://www.linkedin.com/company/airbridgedevs/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#23395d] opacity-40 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="text-sm text-[#23395d] opacity-40 hover:text-sky-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
        <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
          <div className="p-0">
            <ContactForm onlyForm />
          </div>
        </div>
      </DialogContent>
    </footer>
    </Dialog>
    
  );
};

export default Footer;
