import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const cleanNavLabel = (label: string) => label.replace(/^\[[^\]]+\]\s*/u, "");

  return (
    <footer className="console-footer fade-in-up">
      <div className="ping-status">
        {t.footer.yearText} · {t.footer.tagline}
      </div>
      <div className="contact-array">
        <a href="mailto:benjallancao@gmail.com">{t.footer.links.email}</a>
        <a href="https://www.linkedin.com/in/bllame/" target="_blank" rel="noreferrer">
          {t.footer.links.linkedin}
        </a>
        <a href="https://github.com/benllame" target="_blank" rel="noreferrer">
          {t.footer.links.github}
        </a>
        <a href="#init">{cleanNavLabel(t.nav.home)}</a>
        <a href="#projects">{cleanNavLabel(t.nav.projects)}</a>
        <a href="#stack">{cleanNavLabel(t.nav.stack)}</a>
        <a href="#contact">{cleanNavLabel(t.nav.contact)}</a>
      </div>
    </footer>
  );
}
