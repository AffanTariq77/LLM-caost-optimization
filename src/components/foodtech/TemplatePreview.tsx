import type { CSSProperties } from "react";
import type { TemplateDefinition } from "@/components/foodtech/templates";
import { cn } from "@/lib/utils";

interface TemplatePreviewProps {
  template: TemplateDefinition;
  brandColor?: string;
  brandName?: string;
  logoUrl?: string | null;
  className?: string;
  compact?: boolean;
}

const TemplateVisual = ({ id }: { id: TemplateDefinition["id"] }) => {
  if (id === "delivery") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
        <rect x="0.5" y="0.5" width="199" height="119" fill="none" stroke="currentColor" strokeOpacity="0.12" />
        <path d="M12 96 C60 96 60 40 108 40 S164 76 190 24" fill="none" stroke="var(--brand)" strokeWidth="1.5" strokeDasharray="4 5" className="animate-dash-flow" />
        <circle cx="12" cy="96" r="3.5" fill="var(--brand)" />
        <circle cx="190" cy="24" r="3.5" fill="var(--brand)" className="animate-pulse-node" style={{ transformOrigin: "190px 24px" }} />
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="currentColor" strokeOpacity="0.06" />
        ))}
      </svg>
    );
  }

  if (id === "cloud-kitchen") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
        <rect x="0.5" y="0.5" width="199" height="119" fill="none" stroke="currentColor" strokeOpacity="0.12" />
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={14 + col * 44}
              y={16 + row * 32}
              width={34}
              height={22}
              fill={(row + col) % 3 === 0 ? "var(--brand)" : "none"}
              fillOpacity={(row + col) % 3 === 0 ? 0.28 : 0}
              stroke="var(--brand)"
              strokeOpacity="0.5"
            />
          )),
        )}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="199" height="119" fill="none" stroke="currentColor" strokeOpacity="0.12" />
      <circle cx="100" cy="60" r="42" fill="none" stroke="var(--brand)" strokeOpacity="0.7" />
      <circle cx="100" cy="60" r="28" fill="var(--brand)" fillOpacity="0.16" stroke="var(--brand)" strokeOpacity="0.5" strokeDasharray="3 5" className="animate-dash-flow" />
      <line x1="20" y1="60" x2="52" y2="60" stroke="currentColor" strokeOpacity="0.25" />
      <line x1="148" y1="60" x2="180" y2="60" stroke="currentColor" strokeOpacity="0.25" />
      <line x1="20" y1="54" x2="20" y2="66" stroke="currentColor" strokeOpacity="0.25" />
      <line x1="180" y1="54" x2="180" y2="66" stroke="currentColor" strokeOpacity="0.25" />
    </svg>
  );
};

const TemplatePreview = ({ template, brandColor, brandName, logoUrl, className, compact = false }: TemplatePreviewProps) => {
  const brand = brandColor ?? template.defaultBrandColor;
  const name = (brandName ?? template.defaultBrandName).trim() || template.defaultBrandName;

  return (
    <div
      style={{ "--brand": brand } as CSSProperties}
      className={cn("relative overflow-hidden border bg-panel text-foreground transition-colors duration-300 ab-hairline", className)}
    >
      {/* preview chrome */}
      <div className="flex items-center gap-2 border-b px-3 py-2 ab-hairline">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          {name.toLowerCase().replace(/\s+/g, "")}.com
        </span>
      </div>

      {/* site nav */}
      <div className="flex items-center justify-between gap-3 border-b px-4 py-3 ab-hairline">
        <div className="flex min-w-0 items-center gap-2">
          {logoUrl ? (
            <img src={logoUrl} alt={`${name} logo`} className="h-5 w-auto max-w-[88px] object-contain" />
          ) : (
            <span className="grid h-5 w-5 place-items-center text-[10px] font-semibold text-white" style={{ background: brand }} aria-hidden="true">
              {name.charAt(0)}
            </span>
          )}
          <span className="truncate font-mono text-[10px] uppercase tracking-[0.2em]">{name}</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {template.nav.map((item) => (
            <span key={item} className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
        <span className="whitespace-nowrap px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-white" style={{ background: brand }}>
          {template.primaryCta}
        </span>
      </div>

      {/* hero */}
      <div className={cn("grid gap-4 px-4 py-5", compact ? "sm:grid-cols-[1.2fr_1fr]" : "sm:grid-cols-[1.15fr_1fr]")}>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: brand }}>
            {template.heroEyebrow}
          </p>
          <p className={cn("mt-2 font-semibold leading-tight tracking-[-0.02em]", compact ? "text-base" : "text-xl")}>{template.heroTitle}</p>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{template.heroBody}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2.5 py-1.5 text-[9px] uppercase tracking-[0.14em] text-white" style={{ background: brand }}>
              {template.primaryCta}
            </span>
            <span className="border px-2.5 py-1.5 text-[9px] uppercase tracking-[0.14em]" style={{ borderColor: brand, color: brand }}>
              {template.secondaryCta}
            </span>
          </div>
        </div>
        <div className="min-h-[96px] text-foreground">
          <TemplateVisual id={template.id} />
        </div>
      </div>

      {/* stats strip */}
      <div className="grid grid-cols-3 border-y ab-hairline">
        {template.panels.map((panel) => (
          <div key={panel.label} className="border-r px-3 py-2.5 last:border-r-0 ab-hairline">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">{panel.label}</p>
            <p className="mt-1 font-mono text-xs" style={{ color: brand }}>
              {panel.value}
            </p>
          </div>
        ))}
      </div>

      {/* list */}
      <div className="px-4 py-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{template.listTitle}</p>
        <ul className="mt-2.5 space-y-2">
          {template.list.map((row) => (
            <li key={row.name} className="flex items-center justify-between gap-3 border-b pb-2 text-[11px] last:border-b-0 ab-hairline">
              <span className="flex min-w-0 items-center gap-2">
                <span className="h-1 w-1 shrink-0" style={{ background: brand }} aria-hidden="true" />
                <span className="truncate">{row.name}</span>
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">{row.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TemplatePreview;
