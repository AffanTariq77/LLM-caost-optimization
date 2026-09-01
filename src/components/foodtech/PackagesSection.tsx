import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const packages = [
  {
    index: "01",
    name: "Launch",
    tagline: "Do it yourself.",
    description: "For customers who want to use a ready-made template.",
    includes: [
      "Ready-made template",
      "Logo customization",
      "Brand colors",
      "Text and images",
      "Menu",
      "Contact information",
      "Responsive design",
      "Basic deployment",
    ],
    cta: "Start building →",
    target: "templates",
    featured: false,
  },
  {
    index: "02",
    name: "Custom",
    tagline: "We build it.",
    description: "For businesses that need a custom website or system.",
    includes: [
      "Everything in Launch",
      "Custom UI/UX",
      "Custom pages",
      "Brand system",
      "POS / API integrations",
      "Analytics",
      "Deployment",
      "Support",
    ],
    cta: "Talk to an expert →",
    target: "contact",
    featured: true,
  },
  {
    index: "03",
    name: "AI",
    tagline: "Add intelligence.",
    description: "For businesses that want AI integrated into their systems.",
    includes: [
      "Everything in Custom",
      "AI customer assistant",
      "RAG over restaurant data",
      "AI recommendations",
      "AI analytics",
      "Automated support",
      "LLM integrations",
      "LLM cost optimization",
    ],
    cta: "Build with AI →",
    target: "contact",
    featured: false,
  },
];

const PackagesSection = () => (
  <section id="packages" className="border-b ab-hairline">
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        eyebrow="Engagement models"
        title="Choose how much you want from us."
        description="Three ways to work with Airbridge — from self-serve launch to a fully intelligent food-tech system."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
        {packages.map((pack, i) => (
          <Reveal
            key={pack.name}
            delay={i * 90}
            as="article"
            className={cn(
              "relative flex h-full flex-col border p-7 transition-all duration-300 ab-hairline lg:p-9",
              pack.featured ? "border-accent/60 bg-accent/[0.05] lg:-mt-4 lg:pb-12" : "bg-panel hover:border-accent/40",
            )}
          >
            {pack.featured && (
              <span className="absolute -top-px right-6 -translate-y-1/2 border border-accent bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-foreground">
                Most popular
              </span>
            )}

            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{pack.index} / Package</span>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">{pack.name}</h3>
            <p className="mt-2 text-lg text-foreground/80">{pack.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pack.description}</p>

            <ul className="mt-8 flex-1 space-y-3 border-t ab-hairline pt-6">
              {pack.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-[7px] h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => scrollToSection(pack.target)}
              className={cn(
                "mt-8 w-full border px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300",
                pack.featured
                  ? "border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent"
                  : "text-muted-foreground hover:border-accent/60 hover:text-foreground ab-hairline",
              )}
            >
              {pack.cta}
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
