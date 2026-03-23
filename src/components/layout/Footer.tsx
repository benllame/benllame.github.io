import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="relative z-10 mt-6 px-4 py-8">
      <div className="liquid-glass mx-auto max-w-[1200px] rounded-2xl border-t border-t-[rgba(77,232,255,0.08)] bg-[rgba(3,1,10,0.8)] p-6 sm:p-8">
        <div className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="font-mono font-semibold text-[rgba(240,236,255,0.9)]">
              <span className="neon-gradient-text">~ $</span> ./bllancao.sh
            </p>
            <p className="mt-2 font-mono text-xs text-[rgba(240,236,255,0.35)]">{t.hero.role}</p>
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            <a href="#init" className="text-[rgba(240,236,255,0.4)] transition-colors hover:text-[#4de8ff]">
              {t.nav.home}
            </a>
            <a
              href="#projects"
              className="text-[rgba(240,236,255,0.4)] transition-colors hover:text-[#4de8ff]"
            >
              {t.nav.projects}
            </a>
            <a href="#stack" className="text-[rgba(240,236,255,0.4)] transition-colors hover:text-[#4de8ff]">
              {t.nav.stack}
            </a>
            <a
              href="#contact"
              className="text-[rgba(240,236,255,0.4)] transition-colors hover:text-[#4de8ff]"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a
              href="mailto:benjallancao@gmail.com"
              className="rounded-md border border-[rgba(77,232,255,0.2)] px-2 py-0.5 font-mono text-xs text-[#4de8ff] transition-all hover:[box-shadow:0_0_12px_rgba(77,232,255,0.2)]"
            >
              {t.footer.links.email}
            </a>
            <a
              href="https://www.linkedin.com/in/bllame/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[rgba(77,232,255,0.2)] px-2 py-0.5 font-mono text-xs text-[#4de8ff] transition-all hover:[box-shadow:0_0_12px_rgba(77,232,255,0.2)]"
            >
              {t.footer.links.linkedin}
            </a>
            <a
              href="https://github.com/benllame"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[rgba(77,232,255,0.2)] px-2 py-0.5 font-mono text-xs text-[#4de8ff] transition-all hover:[box-shadow:0_0_12px_rgba(77,232,255,0.2)]"
            >
              {t.footer.links.github}
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-[rgba(77,232,255,0.05)] pt-4 font-mono text-xs text-[rgba(240,236,255,0.2)]">
          {t.footer.yearText} · {t.footer.tagline}
        </div>
      </div>
    </footer>
  );
}
