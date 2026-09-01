const flow = "animate-dash-flow";

const Box = ({
  x,
  y,
  w,
  h,
  label,
  meta,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  meta?: string;
  accent?: boolean;
}) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={2}
      className={accent ? "fill-accent/10 stroke-accent" : "fill-panel stroke-current opacity-100"}
      strokeWidth={1}
      stroke={accent ? undefined : "currentColor"}
      strokeOpacity={accent ? 1 : 0.18}
    />
    <text
      x={x + w / 2}
      y={meta ? y + h / 2 - 3 : y + h / 2 + 4}
      textAnchor="middle"
      className={accent ? "fill-accent" : "fill-current"}
      style={{ fontSize: 12, letterSpacing: "0.14em", fontFamily: "ui-monospace, monospace" }}
    >
      {label}
    </text>
    {meta && (
      <text
        x={x + w / 2}
        y={y + h / 2 + 14}
        textAnchor="middle"
        className="fill-current opacity-45"
        style={{ fontSize: 9, letterSpacing: "0.18em", fontFamily: "ui-monospace, monospace" }}
      >
        {meta}
      </text>
    )}
  </g>
);

const Link = ({ d, delay = 0 }: { d: string; delay?: number }) => (
  <path
    d={d}
    fill="none"
    strokeWidth={1}
    strokeDasharray="5 7"
    className={`stroke-accent ${flow}`}
    strokeOpacity={0.75}
    style={{ animationDelay: `${delay}ms` }}
  />
);

const HeroArchitecture = () => (
  <svg
    viewBox="0 0 560 620"
    role="img"
    aria-label="Airbridge architecture: restaurant POS feeds orders, menu and inventory into the Airbridge integration layer, which powers data and AI, producing business intelligence."
    className="h-auto w-full max-w-[560px] text-foreground"
  >
    <defs>
      <linearGradient id="ab-hero-fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.12" />
        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
      </linearGradient>
    </defs>

    <rect x="0" y="0" width="560" height="620" fill="url(#ab-hero-fade)" />

    <text x="20" y="24" className="fill-current opacity-40" style={{ fontSize: 9, letterSpacing: "0.28em", fontFamily: "ui-monospace, monospace" }}>
      SYSTEM / DATA FLOW
    </text>

    <Box x={150} y={40} w={260} h={52} label="RESTAURANT POS" meta="TERMINALS · BRANCHES" />
    <Link d="M280 92 V126" />

    <Box x={150} y={126} w={80} h={44} label="ORDERS" />
    <Box x={240} y={126} w={80} h={44} label="MENU" />
    <Box x={330} y={126} w={80} h={44} label="STOCK" />

    <Link d="M190 170 V196 H280 V214" delay={120} />
    <Link d="M280 170 V214" delay={240} />
    <Link d="M370 170 V196 H280 V214" delay={360} />

    <Box x={110} y={214} w={340} h={66} label="AIRBRIDGE" meta="INTEGRATION LAYER" accent />

    <Link d="M280 280 V310 H170 V336" delay={80} />
    <Link d="M280 280 V310 H390 V336" delay={200} />

    <Box x={90} y={336} w={160} h={52} label="DATA" meta="EVENTS · WAREHOUSE" />
    <Box x={310} y={336} w={160} h={52} label="AI" meta="LLM · AGENTS" />

    <Link d="M170 388 V420" delay={140} />
    <Link d="M390 388 V420" delay={260} />

    <Box x={90} y={420} w={160} h={44} label="ANALYTICS" />
    <Box x={310} y={420} w={160} h={44} label="ASSISTANTS" />

    <Link d="M170 464 V500 H280 V526" delay={60} />
    <Link d="M390 464 V500 H280 V526" delay={180} />

    <Box x={150} y={526} w={260} h={56} label="BUSINESS INTELLIGENCE" meta="DECISIONS · AUTOMATION" />

    {[
      [280, 109],
      [280, 297],
      [170, 404],
      [390, 404],
      [280, 512],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3} className="fill-accent animate-pulse-node" style={{ transformOrigin: `${cx}px ${cy}px` }} />
    ))}
  </svg>
);

export default HeroArchitecture;
