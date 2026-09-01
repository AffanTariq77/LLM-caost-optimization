import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";

const solutions = [
  {
    index: "01",
    kicker: "Digital",
    title: "Restaurant Websites",
    description:
      "High-quality responsive restaurant websites built from professionally designed templates.",
    points: ["Template system", "Brand customization", "Menus & ordering pages", "Deployment"],
  },
  {
    index: "02",
    kicker: "Integration",
    title: "POS & Operations",
    description:
      "Connect orders, menus, branches, inventory, delivery systems and business data.",
    points: ["POS connectors", "Menu sync", "Inventory events", "Delivery APIs"],
  },
  {
    index: "03",
    kicker: "Intelligence",
    title: "AI for Food",
    description:
      "Add AI assistants, analytics, automation, recommendations and intelligent operations.",
    points: ["RAG assistants", "Recommendations", "Forecasting", "Automation"],
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="border-b ab-hairline">
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        eyebrow="Solutions"
        title="Everything your food business needs."
        description="One engineering partner across the full stack of a modern food business — presence, operations and intelligence."
      />

      <div className="mt-14 grid gap-px border ab-hairline bg-[hsl(var(--hairline)/0.1)] md:grid-cols-3">
        {solutions.map((solution, i) => (
          <Reveal
            key={solution.index}
            delay={i * 90}
            as="article"
            className="group relative bg-panel p-7 transition-colors duration-300 hover:bg-accent/[0.04] lg:p-9"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {solution.index} / {solution.kicker}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                →
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.01em]">{solution.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>

            <ul className="mt-8 space-y-2.5 border-t ab-hairline pt-6">
              {solution.points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-1 w-1 bg-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <span
              className="absolute inset-x-0 bottom-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
              aria-hidden="true"
            />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
