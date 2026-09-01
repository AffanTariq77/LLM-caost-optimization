import { useState, type ChangeEvent, type FormEvent } from "react";
import Reveal from "@/components/foodtech/Reveal";
import { scrollToSection } from "@/lib/scroll";
import { submitForm } from "@/lib/supabaseClient";

const businessTypes = ["Restaurant", "Restaurant chain", "Cloud kitchen", "Café", "Food startup", "Food platform", "Other"];
const interests = ["Launch — template", "Custom — we build it", "AI — add intelligence", "LLM cost optimization"];

const fieldClass =
  "mt-2.5 h-11 w-full border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent ab-hairline";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    businessType: businessTypes[0],
    interest: interests[0],
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [event.target.id]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.details) {
      setError("Please add your name, work email and a short brief.");
      return;
    }

    setStatus("loading");
    try {
      await submitForm({
        platform: "Airbridge-FoodTech",
        full_name: form.name,
        work_email: form.email,
        company_name: form.company,
        project_details: form.details,
        metadata: { business_type: form.businessType, interest: form.interest },
      });
      setStatus("success");
      setForm({ name: "", email: "", company: "", businessType: businessTypes[0], interest: interests[0], details: "" });
    } catch (submissionError) {
      setStatus("idle");
      setError(submissionError instanceof Error ? submissionError.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative border-b ab-hairline">
      <div className="ab-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] bg-[radial-gradient(50%_60%_at_50%_100%,hsl(var(--accent)/0.14),transparent_70%)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_520px] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="ab-label flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Start a project
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Your food business.
            <br />
            Your technology.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Start with a template, work with our team, or build an intelligent food-tech system around your business.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact-form"
              className="group border border-accent bg-accent px-6 py-3.5 text-center font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground transition-all duration-300 hover:bg-transparent hover:text-accent"
            >
              Start a conversation <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("templates")}
              className="border px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:border-accent/60 hover:text-foreground ab-hairline"
            >
              Explore templates →
            </button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-2 gap-px border ab-hairline bg-[hsl(var(--hairline)/0.1)]">
            {[
              { term: "Response time", value: "< 24 hours" },
              { term: "Engagements", value: "Launch · Custom · AI" },
            ].map((item) => (
              <div key={item.term} className="bg-panel p-5">
                <dt className="ab-label">{item.term}</dt>
                <dd className="mt-2 font-mono text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={90}>
          <form id="contact-form" onSubmit={handleSubmit} className="ab-panel p-6 sm:p-8" noValidate>
            <p className="ab-label">Project inquiry</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="ab-label">
                  Full name *
                </label>
                <input id="name" value={form.name} onChange={handleChange} placeholder="Jamie Chen" className={fieldClass} required />
              </div>
              <div>
                <label htmlFor="email" className="ab-label">
                  Work email *
                </label>
                <input id="email" type="email" value={form.email} onChange={handleChange} placeholder="jamie@restaurant.com" className={fieldClass} required />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="company" className="ab-label">
                Company
              </label>
              <input id="company" value={form.company} onChange={handleChange} placeholder="Maison Group" className={fieldClass} />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="businessType" className="ab-label">
                  Business type
                </label>
                <select id="businessType" value={form.businessType} onChange={handleChange} className={fieldClass}>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="interest" className="ab-label">
                  Interested in
                </label>
                <select id="interest" value={form.interest} onChange={handleChange} className={fieldClass}>
                  {interests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="details" className="ab-label">
                Project brief *
              </label>
              <textarea
                id="details"
                value={form.details}
                onChange={handleChange}
                rows={5}
                placeholder="What are you building, which systems do you run today, and what would success look like?"
                className={`${fieldClass} h-auto py-3`}
                required
              />
            </div>

            {error && (
              <p role="alert" className="mt-4 border border-destructive/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-destructive">
                {error}
              </p>
            )}
            {status === "success" && (
              <p role="status" className="mt-4 border border-accent/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Received — we'll be in touch within 24 hours.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full border border-accent bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground transition-all duration-300 hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send inquiry →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
