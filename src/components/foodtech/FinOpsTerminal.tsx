import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Line = { text: string; tone?: "prompt" | "muted" | "ok" };

const lines: Line[] = [
  { text: "$ airbridge analyze --food-platform", tone: "prompt" },
  { text: "" },
  { text: "Requests analyzed ........ 48,291" },
  { text: "Cacheable requests ....... 31.8%" },
  { text: "Model routing savings .... 24.6%" },
  { text: "Prompt optimization ...... 11.2%" },
  { text: "p95 latency .............. 1.42s → 0.86s" },
  { text: "" },
  { text: "✓ AI infrastructure optimized", tone: "ok" },
  { text: "✓ Lower inference cost", tone: "ok" },
  { text: "✓ Lower latency", tone: "ok" },
];

const FinOpsTerminal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisibleCount(lines.length);
      return;
    }
    const timer = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= lines.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 280);
    return () => window.clearInterval(timer);
  }, [started]);

  return (
    <div ref={ref} className="ab-panel overflow-hidden shadow-panel">
      <div className="flex items-center justify-between border-b px-4 py-2.5 ab-hairline">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">airbridge · finops</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      </div>

      <pre className="min-h-[300px] overflow-x-auto px-4 py-5 font-mono text-[12px] leading-[1.9] sm:px-6 sm:text-[13px]" aria-live="polite">
        {lines.slice(0, visibleCount).map((line, index) => (
          <div
            key={`${line.text}-${index}`}
            className={cn(
              "animate-fade-up whitespace-pre",
              line.tone === "prompt" && "text-accent",
              line.tone === "ok" && "text-emerald-500 dark:text-emerald-400",
              !line.tone && "text-muted-foreground",
            )}
          >
            {line.text || " "}
          </div>
        ))}
        {visibleCount >= lines.length && (
          <div className="text-accent">
            $ <span className="animate-caret-blink">▍</span>
          </div>
        )}
      </pre>
    </div>
  );
};

export default FinOpsTerminal;
