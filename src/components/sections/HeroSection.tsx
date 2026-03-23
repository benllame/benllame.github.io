import { Check, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useTypewriter } from "@/hooks/useTypewriter";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const stackItems = [
  "PyTorch",
  "Gemini",
  "GCP",
  "LangGraph",
  "ONNX",
  "Terraform",
  "FastAPI",
  "ChromaDB",
];

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const lines = useMemo(() => t.hero.terminal.lines, [t.hero.terminal.lines]);
  const { visibleText, isComplete } = useTypewriter(lines, 30);

  return (
    <section id="init" className="relative min-h-screen scroll-mt-32 overflow-hidden rounded-3xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-close-up-of-code-on-a-screen-1579/1080p.mp4"
      />

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,hsl(260_87%_3%_/_0.1)_45%,hsl(260_87%_3%_/_0.4)_60%,hsl(260_87%_3%_/_0.75)_75%,hsl(260_87%_3%)_95%)]" />

      <div
        ref={fade.ref}
        className={cn(
          "relative z-10 flex min-h-screen flex-col justify-center gap-12 px-4 py-24 sm:px-8",
          fade.className
        )}
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm liquid-glass">
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-primary" />
          <span className="font-sans text-foreground">⚡ {t.hero.badge}</span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="liquid-glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-border/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <p className="ml-3 text-xs text-muted-foreground">{t.hero.terminal.title}</p>
            </div>
            <div className="px-5 py-5">
              <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-muted-foreground">
                {visibleText}
                {isComplete ? <span className="animate-pulse text-primary">_</span> : null}
              </pre>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <p className="text-xs text-muted-foreground">{t.hero.profileHeader}</p>

            <ul className="mt-6 space-y-4">
              {t.hero.checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2 font-mono text-sm">
              <span className="text-muted-foreground">{t.hero.statusLabel}:</span>
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-primary" />
              <span className="text-primary">{t.hero.statusValue}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <a href="mailto:benjallancao@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.hero.ctaEmail}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://www.linkedin.com/in/bllame/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4 text-primary" />
                  {t.hero.ctaLinkedIn}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 overflow-hidden">
          <p className="text-xs text-muted-foreground">{t.hero.stackLabel}</p>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-3 pr-3">
              {[...stackItems, ...stackItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="liquid-glass rounded-full px-4 py-2 text-xs text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
