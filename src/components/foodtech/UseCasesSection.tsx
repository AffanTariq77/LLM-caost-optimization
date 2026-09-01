import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";

const useCases = [
  { code: "R–01", title: "Restaurants", description: "Digital presence, ordering and customer engagement.", span: "lg:col-span-2" },
  { code: "R–02", title: "Restaurant Chains", description: "Centralized systems across locations.", span: "" },
  { code: "R–03", title: "Cloud Kitchens", description: "Digital-first ordering and operations.", span: "" },
  { code: "R–04", title: "Food Startups", description: "Launch quickly without building infrastructure from scratch.", span: "" },
  { code: "R–05", title: "Food Platforms", description: "Integrations, APIs, AI and scalable infrastructure.", span: "lg:col-span-2" },
];

const UseCasesSection = () => (
  <section id="work" className="border-b ab-hairline">
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        eyebrow="Use cases"
        title="Built for every layer of food."
        description="The same engineering system adapts from a single dining room to a multi-brand platform."
      />

      <div className="mt-14 grid gap-px border ab-hairline bg-[hsl(var(--hairline)/0.1)] sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, i) => (
          <Reveal
            key={useCase.code}
            delay={i * 70}
            as="article"
            className={`group relative bg-panel p-7 transition-colors duration-300 hover:bg-accent/[0.04] lg:p-9 ${useCase.span}`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{useCase.code}</span>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] sm:text-2xl">{useCase.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
            <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
