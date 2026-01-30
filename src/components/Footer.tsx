import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-secondary-foreground border-t-[0.5px] border-[#b3c7e6]/50" style={{ background: "#F3F9FF" }}>
      <div className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-7 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#192841" }}>
            Start Your Strategic Pathway to Efficient LLM Usage
          </h2>
          <p className="text-xl text-[#23395d] max-w-2xl mx-auto">
            Get your free audit now and discover how much you could be saving.
          </p>
          <button className="bg-[#23395d] hover:bg-sky-400 text-white gap-2 hover:shadow-[0_4px_24px_0_rgba(25,40,65,0.15)] rounded-lg px-6 py-3 font-semibold text-lg transition">
            Run Free Audit
            <span className="inline-block ml-2">→</span>
          </button>
        </div>
      </div>
      <div className="border-t border-[#b3c7e6]">
        <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-base text-[#23395d] font-semibold mb-2">
              Mission ready engineering for AI systems that deliver precision, discipline, and results.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full mt-4">
              <p className="text-xs text-[#23395d] opacity-50 mb-2 md:mb-0">
                © 2026 LLM Costing. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#23395d] opacity-40 hover:text-sky-400 transition-colors">
                  <span className="inline-block">in</span>
                </a>
                <a href="#" className="text-sm text-[#23395d] opacity-40 hover:text-sky-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
