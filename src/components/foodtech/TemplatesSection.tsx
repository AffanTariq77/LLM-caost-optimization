import { useState } from "react";
import LiveCustomizer from "@/components/foodtech/LiveCustomizer";
import Reveal from "@/components/foodtech/Reveal";
import SectionHeader from "@/components/foodtech/SectionHeader";
import TemplatePreview from "@/components/foodtech/TemplatePreview";
import { templates, type TemplateId } from "@/components/foodtech/templates";
import { cn } from "@/lib/utils";

const TemplatesSection = () => {
  const [selected, setSelected] = useState<TemplateId>("restaurant");

  return (
    <section id="templates" className="relative border-b ab-hairline">
      <div className="ab-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Ready to launch"
          title="Start with a template."
          description="Choose a design, add your brand and launch without waiting weeks for a custom website."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {templates.map((template, i) => {
            const isActive = selected === template.id;
            return (
              <Reveal key={template.id} delay={i * 90} as="article" className="flex">
                <button
                  type="button"
                  onClick={() => setSelected(template.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex w-full flex-col border p-4 text-left transition-all duration-300 ab-hairline",
                    isActive ? "border-accent/70 bg-accent/[0.04]" : "hover:border-accent/40",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{template.code}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{template.category}</span>
                  </div>

                  <div className="mt-4 overflow-hidden">
                    <TemplatePreview
                      template={template}
                      compact
                      className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-panel"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.06em]">{template.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{template.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    {isActive ? "Selected" : "Customize"}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16" delay={60}>
          <LiveCustomizer templateId={selected} onTemplateChange={setSelected} />
        </Reveal>
      </div>
    </section>
  );
};

export default TemplatesSection;
