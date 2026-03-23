import { Globe, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const observedSections = [
  "init",
  "projects",
  "churn",
  "rag",
  "data-eng",
  "vision",
  "stack",
  "contact",
];

export function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(observedSections);

  const activeTab = useMemo(() => {
    if (["churn", "rag", "data-eng", "vision", "projects"].includes(activeSection)) {
      return "projects";
    }
    if (["stack", "contact", "init"].includes(activeSection)) {
      return activeSection;
    }
    return "init";
  }, [activeSection]);

  const links = [
    { id: "init", label: t.nav.home },
    { id: "projects", label: t.nav.projects },
    { id: "stack", label: t.nav.stack },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-7 z-40">
      <div className="mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 lg:px-8">
        <div className="liquid-glass relative mx-auto max-w-[850px] rounded-3xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#init" className="font-mono text-sm font-semibold text-foreground">
              <span className="text-primary">~ $</span> ./bllancao.sh
            </a>

            <nav className="hidden items-center gap-5 md:flex">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    "border-b border-transparent pb-0.5 font-sans text-sm transition-colors",
                    activeTab === link.id
                      ? "border-primary text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggleLang}
                className="liquid-glass inline-flex h-9 items-center gap-2 rounded-full px-4 font-sans text-xs text-foreground"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span>{lang === "es" ? "EN" : "ES"}</span>
              </button>
              <a
                href="https://github.com/benllame"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass rounded-full px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-white/5"
              >
                {t.nav.repo}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={cn(
              "absolute inset-x-2 top-[calc(100%+8px)] rounded-2xl p-3 transition-all duration-300 md:hidden",
              "liquid-glass",
              mobileOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            )}
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 font-mono text-sm transition-colors",
                    activeTab === link.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLang}
                className="liquid-glass inline-flex h-9 items-center gap-2 rounded-full px-4 font-sans text-xs"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span>{lang === "es" ? "EN" : "ES"}</span>
              </button>
              <a
                href="https://github.com/benllame"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass rounded-full px-4 py-2 font-mono text-xs"
              >
                {t.nav.repo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
