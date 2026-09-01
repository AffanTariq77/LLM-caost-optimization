import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";

const steps = [
  { index: "01", title: "Choose", description: "Choose a template or tell us what you need." },
  { index: "02", title: "Customize", description: "Add your brand or work with our team." },
  { index: "03", title: "Connect", description: "Integrate your POS, APIs and data." },
  { index: "04", title: "Intelligence", description: "Add AI when your business is ready." },
  { index: "05", title: "Scale", description: "Optimize your technology and AI costs." },
];

const ProcessSection = () => (
  <section id="process" className="border-b ab-hairline">
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader eyebrow="How it works" title="Five steps from template to intelligent operations." />

      <ol className="mt-14 grid gap-px border ab-hairline bg-[hsl(var(--hairline)/0.1)] sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => (
          <Reveal key={step.index} delay={i * 70} as="li" className="group relative bg-panel p-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{step.index}</span>
              <span className="h-px flex-1 bg-[hsl(var(--hairline)/0.16)] transition-colors duration-500 group-hover:bg-accent" aria-hidden="true" />
            </div>
            <h3 className="mt-8 text-lg font-semibold tracking-[-0.01em]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
