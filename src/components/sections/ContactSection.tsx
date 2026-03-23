import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const blockGlow = useGlowPulse<HTMLDivElement>();

  return (
    <section id="contact" className="pb-4 pt-16">
      <div className="mx-auto max-w-lg">
        <div
          ref={(element) => {
            fade.ref.current = element;
            blockGlow.ref.current = element;
          }}
          className={cn(
            "liquid-glass-strong rounded-2xl border border-[rgba(77,232,255,0.12)] p-8 [box-shadow:0_0_60px_rgba(77,232,255,0.04),0_0_0_1px_rgba(77,232,255,0.06)]",
            fade.className
          )}
        >
          <div className="whitespace-pre-wrap font-mono text-xs leading-6 text-[rgba(240,236,255,0.45)]">
            <div>
              <span className="text-[#4de8ff] [text-shadow:0_0_6px_rgba(77,232,255,0.6)]">$</span> ping -c 3 benjallancao@gmail.com
            </div>
            <div>PING benjallancao@gmail.com: 56 data bytes</div>
            <div>64 bytes: icmp_seq=1 ttl=119 time=12.4 ms</div>
            <div>64 bytes: icmp_seq=2 ttl=119 time=11.1 ms</div>
            <div>64 bytes: icmp_seq=3 ttl=119 time=10.8 ms</div>
            <div>
              <span className="text-[#4ade80]">0%</span> packet loss · time 2003ms
            </div>
            <div>
              <span className="text-[#4de8ff] [text-shadow:0_0_6px_rgba(77,232,255,0.6)]">$</span> ./connect.sh
            </div>
            <div className="neon-gradient-text font-semibold">{t.contact.channelsOpen}</div>
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
                <Linkedin className="mr-2 h-4 w-4 text-primary" />
                {t.contact.ctaLinkedIn}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
