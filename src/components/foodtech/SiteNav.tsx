import { useEffect, useState } from "react";
import logo from "@/assets/airbridge-logo.png";
import ThemeToggle from "@/components/foodtech/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { id: "solutions", label: "Solutions" },
  { id: "templates", label: "Templates", highlight: true },
  { id: "technology", label: "Technology" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        "ab-hairline",
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
          aria-label="Airbridge home"
        >
          <img
            src={logo}
            alt="Airbridge"
            width={284}
            height={86}
            className="h-6 w-auto sm:h-7 dark:brightness-0 dark:invert"
            loading="eager"
            decoding="async"
          />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground lg:inline">
            AI × Food × Infrastructure
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className={cn(
                "relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-foreground",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                link.highlight && "text-foreground",
              )}
            >
              {link.label}
              {link.highlight && <span className="ml-1.5 inline-block h-1 w-1 -translate-y-0.5 rounded-full bg-accent align-middle" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => goTo("contact")}
            className="hidden border border-accent bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground transition-all duration-300 hover:bg-transparent hover:text-accent sm:inline-flex"
          >
            Start a project →
          </button>
          <button
            type="button"
            className="border p-2 md:hidden ab-hairline"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="block h-4 w-5">
              <span className={cn("block h-px w-full bg-foreground transition-transform duration-300", menuOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("mt-[6px] block h-px w-full bg-foreground transition-opacity duration-200", menuOpen && "opacity-0")} />
              <span className={cn("mt-[6px] block h-px w-full bg-foreground transition-transform duration-300", menuOpen && "-translate-y-[7px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t ab-hairline bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className="border-b py-3 text-left font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground ab-hairline"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => goTo("contact")}
              className="flex-1 border border-accent bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground"
            >
              Start a project →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
