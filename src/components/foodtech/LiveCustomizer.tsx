import { useEffect, useRef, useState, type ChangeEvent } from "react";
import TemplatePreview from "@/components/foodtech/TemplatePreview";
import { getTemplate, templates, type TemplateId } from "@/components/foodtech/templates";
import { scrollToSection } from "@/lib/scroll";

const swatches = ["#C2410C", "#0EA5E9", "#7C3AED", "#16A34A", "#E11D48", "#F59E0B"];

interface LiveCustomizerProps {
  templateId: TemplateId;
  onTemplateChange: (id: TemplateId) => void;
}

const LiveCustomizer = ({ templateId, onTemplateChange }: LiveCustomizerProps) => {
  const template = getTemplate(templateId);
  const [brandColor, setBrandColor] = useState(template.defaultBrandColor);
  const [brandName, setBrandName] = useState(template.defaultBrandName);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoName, setLogoName] = useState<string | null>(null);
  const [touchedBrand, setTouchedBrand] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (touchedBrand) return;
    setBrandColor(template.defaultBrandColor);
    setBrandName(template.defaultBrandName);
  }, [template, touchedBrand]);

  useEffect(
    () => () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    },
    [],
  );

  const handleLogo = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setLogoUrl(url);
    setLogoName(file.name);
  };

  const clearLogo = () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = null;
    setLogoUrl(null);
    setLogoName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const reset = () => {
    clearLogo();
    setTouchedBrand(false);
    setBrandColor(template.defaultBrandColor);
    setBrandName(template.defaultBrandName);
  };

  return (
    <div className="grid gap-px border ab-hairline bg-[hsl(var(--hairline)/0.1)] lg:grid-cols-[340px_1fr]">
      <div className="bg-panel p-6 lg:p-8">
        <p className="ab-label">Live customizer</p>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em]">Make it yours in seconds.</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Every change renders instantly in the preview — the same system our team ships to production.
        </p>

        <div className="mt-8 space-y-7">
          <div>
            <label htmlFor="customizer-template" className="ab-label">
              Template
            </label>
            <select
              id="customizer-template"
              value={templateId}
              onChange={(event) => onTemplateChange(event.target.value as TemplateId)}
              className="mt-2.5 h-11 w-full border bg-background px-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground outline-none transition-colors focus:border-accent ab-hairline"
            >
              {templates.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.code} — {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="customizer-color" className="ab-label">
              Brand color
            </label>
            <div className="mt-2.5 flex items-center gap-3">
              <input
                id="customizer-color"
                type="color"
                value={brandColor}
                onChange={(event) => {
                  setTouchedBrand(true);
                  setBrandColor(event.target.value);
                }}
                className="h-11 w-14 cursor-pointer border bg-background p-1 ab-hairline"
              />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{brandColor}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {swatches.map((swatch) => (
                <button
                  key={swatch}
                  type="button"
                  aria-label={`Use brand color ${swatch}`}
                  aria-pressed={brandColor.toLowerCase() === swatch.toLowerCase()}
                  onClick={() => {
                    setTouchedBrand(true);
                    setBrandColor(swatch);
                  }}
                  className="h-7 w-7 border transition-transform duration-200 hover:scale-110 ab-hairline"
                  style={{ background: swatch, outline: brandColor.toLowerCase() === swatch.toLowerCase() ? "1px solid hsl(var(--accent))" : undefined, outlineOffset: "2px" }}
                />
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="customizer-name" className="ab-label">
              Brand name
            </label>
            <input
              id="customizer-name"
              type="text"
              value={brandName}
              maxLength={22}
              onChange={(event) => {
                setTouchedBrand(true);
                setBrandName(event.target.value);
              }}
              className="mt-2.5 h-11 w-full border bg-background px-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground outline-none transition-colors focus:border-accent ab-hairline"
            />
          </div>

          <div>
            <span className="ab-label">Upload logo</span>
            <div className="mt-2.5 flex items-center gap-3">
              <label
                htmlFor="customizer-logo"
                className="inline-flex cursor-pointer items-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground ab-hairline"
              >
                Upload
                <span aria-hidden="true">↑</span>
              </label>
              <input
                id="customizer-logo"
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                onChange={handleLogo}
                className="sr-only"
              />
              {logoName && (
                <button type="button" onClick={clearLogo} className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground underline underline-offset-4 hover:text-foreground">
                  Remove
                </button>
              )}
            </div>
            {logoName && <p className="mt-2 truncate font-mono text-[10px] text-muted-foreground">{logoName}</p>}
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2.5 border-t ab-hairline pt-6 sm:flex-row lg:flex-col">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="border border-accent bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:bg-transparent hover:text-accent"
          >
            Launch this template →
          </button>
          <button
            type="button"
            onClick={reset}
            className="border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground ab-hairline"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-panel p-5 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <p className="ab-label">Live website preview</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {template.code} · {template.name}
          </p>
        </div>
        <div className="mt-4 transition-opacity duration-300">
          <TemplatePreview
            key={template.id}
            template={template}
            brandColor={brandColor}
            brandName={brandName}
            logoUrl={logoUrl}
            className="animate-fade-up shadow-panel"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveCustomizer;
