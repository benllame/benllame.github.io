import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const sectionLabel = lang === "es" ? "Contacto" : "Contact";

  return (
    <section id="contact" className="module fade-in-up">
      <div className="module-header">
        <h2>{sectionLabel}</h2>
      </div>

      <div className="module-content">
        <div className="mx-auto max-w-[580px]">
            <div
              ref={fade.ref}
              className={cn("code-border", fade.className)}
            >
            <div className="terminal-body">
              <div>
                <span className="prompt">$</span> ping -c 3 benjallancao@gmail.com
              </div>
              <div>PING benjallancao@gmail.com: 56 data bytes</div>
              <div>64 bytes: icmp_seq=1 ttl=119 time=12.4 ms</div>
              <div>64 bytes: icmp_seq=2 ttl=119 time=11.1 ms</div>
              <div>64 bytes: icmp_seq=3 ttl=119 time=10.8 ms</div>
              <div>
                <span className="text-[#4ade80]">0%</span> packet loss · time 2003ms
              </div>
              <div>
                <span className="prompt">$</span> ./connect.sh
              </div>
              <div className="output highlight">{t.contact.channelsOpen}</div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild variant="primary">
                <a href="mailto:benjallancao@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.contact.ctaEmail}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://www.linkedin.com/in/bllame/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  {t.contact.ctaLinkedIn}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
