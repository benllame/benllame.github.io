import { Globe, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(observedSections);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "sticky top-7 z-40 border-b transition-colors duration-300",
        isScrolled
          ? "border-b-[rgba(77,232,255,0.15)]"
          : "border-b-[rgba(77,232,255,0.08)]"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-4 pt-4 sm:px-6 lg:px-8">
        <div className="liquid-glass relative mx-auto max-w-[850px] rounded-3xl border-[rgba(77,232,255,0.12)] px-4 py-3 [box-shadow:0_0_40px_rgba(0,0,0,0.5),0_0_80px_rgba(77,232,255,0.03)]">
          <div className="flex items-center justify-between gap-4">
            <a href="#init" className="font-mono text-sm font-semibold text-[rgba(240,236,255,0.9)]">
              <span className="neon-gradient-text">~ $</span> ./bllancao.sh
            </a>

            <nav className="hidden items-center gap-5 md:flex">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    "border-b pb-0.5 font-sans text-sm transition-all",
                    activeTab === link.id
                      ? "neon-gradient-text border-[#4de8ff] [text-shadow:0_0_12px_rgba(77,232,255,0.5)]"
                      : "border-transparent text-[rgba(240,236,255,0.5)] hover:text-[rgba(240,236,255,0.9)]"
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
                className="liquid-glass inline-flex h-9 items-center gap-2 rounded-full border-[rgba(77,232,255,0.2)] px-4 font-sans text-xs text-primary transition-shadow hover:[box-shadow:0_0_15px_rgba(77,232,255,0.15)]"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span>{lang === "es" ? "EN" : "ES"}</span>
              </button>
              <a
                href="https://github.com/benllame"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass rounded-full border-[rgba(77,232,255,0.2)] px-4 py-2 font-mono text-xs text-primary transition-shadow hover:[box-shadow:0_0_15px_rgba(77,232,255,0.15)]"
              >
                {t.nav.repo}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(77,232,255,0.2)] text-[rgba(240,236,255,0.9)] md:hidden"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={cn(
              "mobile-nav absolute inset-x-2 top-[calc(100%+8px)] rounded-2xl p-3 transition-all duration-300 md:hidden",
              "liquid-glass",
              mobileOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            )}
          >
            <nav className="flex flex-col gap-0">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "mobile-nav-link rounded-xl px-3 py-2 font-sans text-sm transition-colors",
                    activeTab === link.id
                      ? "neon-gradient-text [text-shadow:0_0_12px_rgba(77,232,255,0.5)]"
                      : "text-[rgba(240,236,255,0.5)] hover:text-[rgba(240,236,255,0.9)]"
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
                className="liquid-glass inline-flex h-9 items-center gap-2 rounded-full border-[rgba(77,232,255,0.2)] px-4 font-sans text-xs text-primary"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span>{lang === "es" ? "EN" : "ES"}</span>
              </button>
              <a
                href="https://github.com/benllame"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass rounded-full border-[rgba(77,232,255,0.2)] px-4 py-2 font-mono text-xs text-primary"
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
