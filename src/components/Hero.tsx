import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import Hero3DImage from "./Hero3DImage";

const Hero = () => {
  return (
    <Dialog>
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden ">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-20 w-full">
          {/* Left: Text */}
          <div className="flex-1 w-full text-center md:text-left space-y-4 sm:space-y-5 md:space-y-7 max-w-2xl md:pr-8 overflow-hidden">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight break-words">
              Cut Your LLM Costs<br className="hidden sm:block" />
              by Up to 80%
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Professional LLM Cost Analysis
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Unlock hidden inefficiencies in your language model deployments and reduce token and model costs by up to 80 percent without compromising performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start mt-3 sm:mt-4 pt-2 w-full max-w-full">
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-sky-400 text-primary-foreground gap-2 md:hover:shadow-sky-blue px-5 sm:px-6 md:px-8 py-6 md:py-4 text-sm xs:text-base sm:text-lg md:text-xl font-semibold min-h-[52px] sm:min-h-[56px] max-w-full"
                >
                  Run Your Audit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </DialogTrigger>
            </div>
            <div className="pt-4 md:pt-6">
              <p className="text-sm md:text-base text-muted-foreground">
                Delivered by disciplined engineering teams, mission ready for your LLM stack.
              </p>
            </div>
          </div>
          {/* Right: 3D Animation */}
          <div className="flex-1 flex justify-center items-center w-full">
            <Hero3DImage />
          </div>
        </div>
        <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
          <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
            <div className="p-0">
              <ContactForm onlyForm />
            </div>
          </div>
        </DialogContent>
      </section>
    </Dialog>

  );
};

export default Hero;
