import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Run the Free Audit",
      description: "Instantly analyze your LLM usage and get a savings snapshot.",
      details:
        "Upload your logs or connect your API to get instant visibility into token waste, model usage breakdown, and estimated monthly savings.",
    },
    {
      number: "02",
      title: "Book the Engineer Audit",
      description: "Receive a hands on blueprint built by our mission ready team.",
      details:
        "A senior AI engineer conducts a full architecture review and builds your custom optimization blueprint with detailed recommendations.",
    },
    {
      number: "03",
      title: "Join the Retainer",
      description: "Benefit from continuous monitoring, tuning, and measurable savings month after month.",
      details:
        "Our framework combines disciplined engineering, operational rigor, and transparent metrics to deliver real savings and sustained efficiency.",
    },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <Dialog>
      <section id="process" className="py-10 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#192841" }}
            >
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our framework combines disciplined engineering, operational rigor, and transparent metrics to deliver real savings and sustained efficiency.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Card
                    className={`p-8 h-full border border-border/40 transition-all duration-300 bg-[#F3F9FF] flex flex-col ${
                      hovered === index
                        ? "scale-105 shadow-2xl z-20"
                        : "hover:shadow-sky-blue"
                    }`}
                    style={{ background: "#F3F9FF" }}
                  >
                    <div className="mb-6 flex items-center justify-center">
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id={`process-gradient-${index}`}
                            x1="0"
                            y1="0"
                            x2="56"
                            y2="56"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8923cb" />
                            <stop offset="1" stopColor="#374c70ff" />
                          </linearGradient>
                        </defs>
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize="2.4rem"
                          fontWeight="bold"
                          fill={`url(#process-gradient-${index})`}
                        >
                          {step.number}
                        </text>
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3 text-center"
                      style={{ color: "#192841" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground text-center mb-6">
                      {step.description}
                    </p>
                    <p className="text-sm text-slate-600 mb-6 flex-grow">
                      {step.details}
                    </p>
                    {index === 0 && (
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-sky-400 text-white font-semibold mt-auto">
                          Run Your Audit
                        </Button>
                      </DialogTrigger>
                    )}
                    {index === 1 && (
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-sky-400 text-white font-semibold mt-auto">
                          Book Engineer Audit
                        </Button>
                      </DialogTrigger>
                    )}
                    {index === 2 && (
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-sky-400 text-white font-semibold mt-auto">
                          Join the Retainer
                        </Button>
                      </DialogTrigger>
                    )}
                  </Card>
                </div>
              ))}
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
      </section>
    </Dialog>
  );
};

export default Process;
