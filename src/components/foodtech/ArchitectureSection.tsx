import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";

const stages = [
  { code: "01", label: "Customer", meta: "Web · Mobile · Kiosk" },
  { code: "02", label: "Website / App", meta: "Templates · Custom" },
  { code: "03", label: "Ordering", meta: "Cart · Payments" },
  { code: "04", label: "POS", meta: "Tickets · Branches" },
  { code: "05", label: "Airbridge", meta: "Integration layer", accent: true },
  { code: "06", label: "Data", meta: "Events · Warehouse" },
  { code: "07", label: "AI", meta: "LLM · RAG · Agents" },
  { code: "08", label: "Analytics / Automation", meta: "Decisions · Actions" },
];

const COLS = 4;
const CELL_W = 280;
const CELL_H = 150;
const BOX_W = 210;
const BOX_H = 72;

const ArchitectureSection = () => {
  const rows = Math.ceil(stages.length / COLS);
  const width = COLS * CELL_W;
  const height = rows * CELL_H;

  const position = (index: number) => {
    const row = Math.floor(index / COLS);
    const col = index % COLS;
    const leftToRight = row % 2 === 0;
    const visualCol = leftToRight ? col : COLS - 1 - col;
    const cx = visualCol * CELL_W + CELL_W / 2;
    const cy = row * CELL_H + CELL_H / 2;
    return { cx, cy, row, leftToRight };
  };

  return (
    <section id="architecture" className="border-b ab-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Food-tech architecture"
          title="From the customer to the kitchen and back again."
          description="Airbridge sits in the middle of the food stack — capturing every order event, normalizing it, and turning it into data, intelligence and automation."
        />

        {/* Desktop / tablet: connected SVG pipeline */}
        <Reveal className="mt-14 hidden md:block">
          <div className="ab-panel overflow-hidden p-6 lg:p-10">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="h-auto w-full text-foreground"
              role="img"
              aria-label="Pipeline: customer, website or app, ordering, POS, Airbridge, data, AI, analytics and automation."
            >
              {stages.slice(0, -1).map((stage, index) => {
                const from = position(index);
                const to = position(index + 1);
                const sameRow = from.row === to.row;
                const dir = from.leftToRight ? 1 : -1;
                const d = sameRow
                  ? `M${from.cx + dir * (BOX_W / 2)} ${from.cy} H${to.cx - dir * (BOX_W / 2)}`
                  : `M${from.cx + dir * (BOX_W / 2)} ${from.cy} H${from.cx + dir * (CELL_W / 2 - 12)} V${to.cy} H${to.cx + dir * (BOX_W / 2)}`;
                return (
                  <path
                    key={stage.code}
                    d={d}
                    fill="none"
                    strokeWidth={1}
                    strokeDasharray="5 7"
                    strokeOpacity={0.8}
                    className="stroke-accent animate-dash-flow"
                    style={{ animationDelay: `${index * 90}ms` }}
                  />
                );
              })}

              {stages.map((stage, index) => {
                const { cx, cy } = position(index);
                return (
                  <g key={stage.label}>
                    <rect
                      x={cx - BOX_W / 2}
                      y={cy - BOX_H / 2}
                      width={BOX_W}
                      height={BOX_H}
                      rx={2}
                      className={stage.accent ? "fill-accent/10 stroke-accent" : "fill-panel stroke-current"}
                      strokeWidth={1}
                      strokeOpacity={stage.accent ? 1 : 0.18}
                    />
                    <text
                      x={cx - BOX_W / 2 + 14}
                      y={cy - 12}
                      className="fill-current opacity-40"
                      style={{ fontSize: 9, letterSpacing: "0.22em", fontFamily: "ui-monospace, monospace" }}
                    >
                      {stage.code}
                    </text>
                    <text
                      x={cx - BOX_W / 2 + 14}
                      y={cy + 8}
                      className={stage.accent ? "fill-accent" : "fill-current"}
                      style={{ fontSize: 14, letterSpacing: "0.02em", fontWeight: 600 }}
                    >
                      {stage.label}
                    </text>
                    <text
                      x={cx - BOX_W / 2 + 14}
                      y={cy + 24}
                      className="fill-current opacity-45"
                      style={{ fontSize: 9, letterSpacing: "0.16em", fontFamily: "ui-monospace, monospace" }}
                    >
                      {stage.meta}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </Reveal>

        {/* Mobile: vertical stack with animated connectors */}
        <div className="mt-12 md:hidden">
          {stages.map((stage, index) => (
            <Reveal key={stage.label} delay={index * 50}>
              <div
                className={`border p-4 ab-hairline ${stage.accent ? "border-accent/60 bg-accent/[0.05]" : "bg-panel"}`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{stage.code}</p>
                <p className={`mt-1.5 text-base font-semibold ${stage.accent ? "text-accent" : ""}`}>{stage.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{stage.meta}</p>
              </div>
              {index < stages.length - 1 && (
                <svg viewBox="0 0 2 28" preserveAspectRatio="none" className="mx-auto h-7 w-px" aria-hidden="true">
                  <line x1="1" y1="0" x2="1" y2="28" strokeDasharray="4 5" strokeWidth="1" className="stroke-accent animate-dash-flow" />
                </svg>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
