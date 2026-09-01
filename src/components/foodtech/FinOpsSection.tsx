import FinOpsTerminal from "@/components/foodtech/FinOpsTerminal";
import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";

const workloads = [
  "Customer support",
  "Recommendations",
  "Analytics",
  "Menu assistants",
  "Internal operations",
  "Automation",
];

const levers = [
  { name: "Prompt optimization", value: 62, detail: "Context pruning, structured prompts, shared system layers" },
  { name: "Model routing", value: 78, detail: "Cheapest capable model per request class" },
  { name: "Caching", value: 54, detail: "Semantic and exact-match caching across repeat traffic" },
  { name: "Token optimization", value: 47, detail: "Response shaping, truncation policies, streaming budgets" },
  { name: "Latency reduction", value: 68, detail: "Parallel retrieval, warm pools, region-aware routing" },
];

const FinOpsSection = () => (
  <section id="technology" className="relative border-b ab-hairline">
    <div className="ab-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
    <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        eyebrow="AI FinOps"
        title="Make every AI request count."
        description="Food platforms generate enormous AI volume — support threads, recommendations, analytics questions, menu assistants, internal operations and automation. Airbridge measures that workload and engineers the cost and latency out of it."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="ab-label">Where the volume comes from</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {workloads.map((workload) => (
                <li key={workload} className="border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground ab-hairline">
                  {workload}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 space-y-6">
            {levers.map((lever, i) => (
              <Reveal key={lever.name} delay={i * 70}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground">{lever.name}</h3>
                  <span className="font-mono text-[11px] text-accent">{lever.value}%</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{lever.detail}</p>
                <div className="mt-3 h-px w-full bg-[hsl(var(--hairline)/0.14)]">
                  <div className="h-px bg-accent transition-[width] duration-1000 ease-out" style={{ width: `${lever.value}%` }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <FinOpsTerminal />
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Representative output from an Airbridge workload audit.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FinOpsSection;
