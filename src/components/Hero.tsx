import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import Hero3DImage from "./Hero3DImage";

const Hero = () => {
  return (
    <Dialog>
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left: Text */}
          <div className="flex-1 w-full text-left space-y-7 max-w-2xl md:pr-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1]">
              Your Strategic Airbridge to Efficient<br className="hidden md:block" />
              LLM Usage
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-2xl">
              Professional LLM Cost Analysis
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-2xl">
              Unlock hidden inefficiencies in your language model deployments and reduce token and model costs by up to 80 percent without compromising performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mt-4">
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-sky-400 text-primary-foreground gap-2 hover:shadow-sky-blue px-8 py-4 text-lg md:text-xl font-semibold"
                >
                  Run Your Audit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </DialogTrigger>
            </div>
            <div className="pt-6">
              <p className="text-xs md:text-base text-muted-foreground mb-6">
                Delivered by disciplined engineering teams, mission ready for your LLM stack.
              </p>
            </div>
          </div>
          {/* Right: 3D Animation */}
          <div className="flex-1 flex justify-center items-center w-full mb-8 md:mb-0">
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
