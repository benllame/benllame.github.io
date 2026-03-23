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

  return (
    <section id="contact" className="scroll-mt-32 py-16">
      <div className="mx-auto max-w-lg">
        <div ref={fade.ref} className={cn("liquid-glass rounded-2xl p-8", fade.className)}>
          <div className="whitespace-pre-wrap font-mono text-xs leading-6 text-muted-foreground">
            <div>$ ping -c 3 benjallancao@gmail.com</div>
            <div>PING benjallancao@gmail.com: 56 data bytes</div>
            <div>64 bytes: icmp_seq=1 ttl=119 time=12.4 ms</div>
            <div>64 bytes: icmp_seq=2 ttl=119 time=11.1 ms</div>
            <div>64 bytes: icmp_seq=3 ttl=119 time=10.8 ms</div>
            <div>0% packet loss · time 2003ms</div>
            <div>$ ./connect.sh</div>
            <div className="text-primary">{t.contact.channelsOpen}</div>
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
