import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OurImpact from "./OurImpact";

import {
  Zap,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      step: "Step 1",
      title: "Automated LLM Cost Audit",
      description: "Upload your usage logs or connect your API. You'll receive a fast, actionable report showing:",
      details: [
        "Token waste percentage",
        "Model usage breakdown",
        "Estimated monthly savings",
        "Next step recommendations",
      ],
      price: "Starting at $99",
      cta: "Run Your Audit",
    },
    {
      icon: CheckCircle,
      step: "Step 2",
      title: "Senior Engineer Audit ($199 to $299)",
      description: "When you're ready to move beyond detection to precision execution. A senior AI engineer from our mission ready team conducts a full architecture review and builds your optimization blueprint. Includes:",
      details: [
        "Prompt and context efficiency analysis",
        "Model routing and cascading strategy",
        "Architecture and caching recommendations",
        "Cost saving roadmap with projected ROI",
      ],
      price: "$199 - $299",
      cta: "Book Engineer Audit",
    },
    {
      icon: TrendingUp,
      step: "Step 3",
      title: "Monthly Retainer (Continuous Optimization)",
      description: "Optimization is ongoing. Our retainer offering ensures you stay ahead. Choose your tier:",
      details: [
        "Essential: $1,000/month",
        "Pro: $2,500/month",
        "Enterprise: $5,000+/month",
        "Includes token tracking, model routing optimization, monthly reports, and dedicated AI engineer",
      ],
      price: "$1K - $5K+/mo",
      cta: "Join the Retainer",
    },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <>
      <section
        id="services"
        className="py-8 px-2 sm:px-6 md:py-10 bg-muted/20"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-3 sm:px-4">
            <h2
              className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 break-words"
              style={{ color: "#192841" }}
            >
              The Solution
            </h2>
            <p className="text-sm xs:text-base sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto break-words">
              At AirBridge Devs we have engineered an LLM cost optimization funnel built for mission critical environments.
            </p>
          </div>

          {/* SVG gradient definition rendered once */}
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <linearGradient
                id="services-gradient"
                x1="0"
                y1="0"
                x2="28"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8923cb" />
                <stop offset="1" stopColor="#374c70ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex h-full"
                  onMouseEnter={() => window.innerWidth >= 768 && setHovered(index)}
                  onMouseLeave={() => window.innerWidth >= 768 && setHovered(null)}
                >
                  <Card
                    className={`flex flex-col justify-between p-6 md:p-8 border border-border/40 transition-all duration-300 bg-[#F3F9FF] min-h-[520px] h-full w-full ${
                      hovered === index
                        ? "md:scale-105 md:shadow-2xl z-20 md:-translate-y-2"
                        : "md:hover:shadow-sky-blue md:hover:-translate-y-1"
                    }`}
                    style={{ background: "#F3F9FF" }}
                  >
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon
                            className="h-6 w-6"
                            style={{ color: "#8923cb" }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground">{item.step}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary font-sans tracking-tight text-left">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground font-normal mb-4">
                        {item.description}
                      </p>
                      <ul className="text-sm text-muted-foreground font-normal font-sans leading-relaxed list-disc pl-6 text-left mb-6 space-y-2">
                        {item.details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border/30">
                      <p className="text-lg font-bold text-primary mb-4">{item.price}</p>
                      <Button className="w-full bg-primary hover:bg-sky-400 text-white font-semibold">
                        {item.cta}
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <OurImpact />
    </>
  );
};

export default Services;
