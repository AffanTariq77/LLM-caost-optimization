import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";



const Footer = () => {
  return (
    <footer
      className="text-secondary-foreground border-t-[0.5px] border-[#b3c7e6]/50 overflow-x-hidden"
      style={{ background: "#98cfecff" }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-10 max-w-full">
        <div className="flex flex-col items-center space-y-4 md:space-y-5">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="AirBridge Devs" className="h-7 sm:h-8 w-auto" width="284" height="86" loading="lazy" decoding="async" />
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center px-3 sm:px-4 break-words max-w-full"
            style={{ color: "#192841" }}
          >
            Start Your Strategic Airbridge to Efficient LLM Usage
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-[#23395d] max-w-2xl mx-auto text-center px-3 sm:px-4 break-words">
            Run your audit now and discover how much you could be saving.
          </p>
                <Button asChild className="w-full sm:w-auto bg-primary hover:bg-sky-400 text-primary-foreground md:hover:shadow-sky-blue min-h-[56px] px-6 sm:px-8 text-base sm:text-lg font-semibold max-w-full">
                  <a href="#contact">
                  Run Your Audit
                  <span className="ml-2" aria-hidden="true">→</span>
                  </a>
                </Button>
        </div>
      </div>

      <div className="border-t border-[#b3c7e6]">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4 max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs sm:text-sm text-[#23395d] opacity-50 text-center md:text-left break-words max-w-full">
              © 2025 AirBridge Devs. All rights reserved.<br />
              Mission ready engineering for AI systems that deliver precision, discipline, and results.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-6 w-full md:w-auto">
              <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6">
                <a href="#services" className="text-xs md:text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium whitespace-nowrap">Services</a>
                <a href="#process" className="text-xs md:text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium whitespace-nowrap">How It Works</a>
                <a href="#faq" className="text-xs md:text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium whitespace-nowrap">FAQ</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
