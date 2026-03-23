import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="relative z-10 mt-20 border-t border-border/30 px-4 py-8">
      <div className="liquid-glass mx-auto max-w-[1200px] rounded-2xl p-6 sm:p-8">
        <div className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="font-mono font-semibold text-foreground">
              <span className="text-primary">~ $</span> ./bllancao.sh
            </p>
            <p className="mt-2 text-muted-foreground">{t.hero.role}</p>
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            <a href="#init" className="text-muted-foreground hover:text-foreground">
              {t.nav.home}
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground">
              {t.nav.projects}
            </a>
            <a href="#stack" className="text-muted-foreground hover:text-foreground">
              {t.nav.stack}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              {t.nav.contact}
            </a>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a
              href="mailto:benjallancao@gmail.com"
              className="text-primary transition-colors hover:text-foreground"
            >
              {t.footer.links.email}
            </a>
            <a
              href="https://www.linkedin.com/in/bllame/"
              target="_blank"
              rel="noreferrer"
              className="text-primary transition-colors hover:text-foreground"
            >
              {t.footer.links.linkedin}
            </a>
            <a
              href="https://github.com/benllame"
              target="_blank"
              rel="noreferrer"
              className="text-primary transition-colors hover:text-foreground"
            >
              {t.footer.links.github}
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4 font-mono text-xs text-muted-foreground">
          {t.footer.yearText} · {t.footer.tagline}
        </div>
      </div>
    </footer>
  );
}
