import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function CTASection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="cta-section fade-in-up">
      <div className="cta-inner grainy-cta">
        <div className="grid-overlay" aria-hidden="true" />
        <div className="cta-content">
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-desc">{t.cta.desc}</p>
          <div className="cta-buttons">
            <Button asChild variant="primary">
              <a href="mailto:benjallancao@gmail.com">
                <Mail className="h-4 w-4" />
                {t.cta.email}
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://www.linkedin.com/in/bllame/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                {t.cta.linkedin}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
