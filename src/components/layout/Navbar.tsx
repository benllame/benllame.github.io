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
    const onScroll = () => {
      const heroSection = document.getElementById("init");
      const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
      setIsScrolled(heroBottom < 100);
    };

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

  const cleanNavLabel = (label: string) => label.replace(/^\[[^\]]+\]\s*/u, "");

  return (
    <header className="navbar-wrap">
      <nav className={cn("navbar", isScrolled && "scrolled")}>
        <a href="#init" className="navbar-brand" onClick={() => setMobileOpen(false)}>
          <div className="navbar-monogram">BL</div>
          <span className="navbar-name">Benjamín Llancao</span>
        </a>

        <div className="tabs-container hidden md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn("tab", activeTab === link.id && "active")}
            >
              {cleanNavLabel(link.label)}
            </a>
          ))}
        </div>

        <div className="nav-actions hidden md:flex">
          <button type="button" onClick={toggleLang} className="nav-btn" aria-label="Toggle language">
            <Globe className="h-3.5 w-3.5" />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
          <a
            href="https://github.com/benllame"
            target="_blank"
            rel="noreferrer"
            className="navbar-cta"
          >
            {t.nav.repo}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="nav-btn md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        <div className={cn("mobile-nav", mobileOpen && "open")}>
          <div className="mobile-nav-panel">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className={cn("mobile-nav-link", activeTab === link.id && "active")}
              >
                {cleanNavLabel(link.label)}
              </a>
            ))}
            <div className="mobile-nav-actions">
              <button type="button" onClick={toggleLang} className="nav-btn" aria-label="Toggle language">
                <Globe className="h-3.5 w-3.5" />
                <span>{lang === "es" ? "EN" : "ES"}</span>
              </button>
              <a
                href="https://github.com/benllame"
                target="_blank"
                rel="noreferrer"
                className="navbar-cta"
              >
                {t.nav.repo}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
