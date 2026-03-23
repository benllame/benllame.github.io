import { Check, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
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
  const terminalGlow = useGlowPulse<HTMLDivElement>();
  const profileGlow = useGlowPulse<HTMLDivElement>();
  const lines = useMemo(() => t.hero.terminal.lines, [t.hero.terminal.lines]);
  const { visibleText, isComplete } = useTypewriter(lines, 30);
  let remainingChars = visibleText.length;

  return (
    <section id="init" className="relative min-h-screen overflow-hidden rounded-3xl">
      <div
        ref={fade.ref}
        className={cn(
          "relative z-10 flex min-h-screen flex-col justify-center gap-12 px-4 py-24 sm:px-8",
          fade.className
        )}
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(77,232,255,0.25)] px-4 py-2 text-sm liquid-glass [filter:drop-shadow(0_0_20px_rgba(77,232,255,0.15))]">
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-[#4de8ff] [box-shadow:0_0_8px_#4de8ff]" />
          <span className="font-sans text-[rgba(240,236,255,0.9)]">
            <span className="neon-gradient-text">⚡</span> {t.hero.badge}
          </span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div
            ref={terminalGlow.ref}
            className="liquid-glass-strong overflow-hidden rounded-2xl border border-[rgba(77,232,255,0.12)]"
          >
            <div className="flex items-center gap-2 border-b border-[rgba(77,232,255,0.1)] bg-[rgba(77,232,255,0.04)] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <p className="ml-3 text-xs text-[rgba(240,236,255,0.5)]">{t.hero.terminal.title}</p>
            </div>
            <div className="bg-[#020108] px-5 py-5 [box-shadow:inset_0_20px_40px_rgba(77,232,255,0.03)]">
              <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7">
                {lines.map((line, index) => {
                  const promptText = `${line.prompt}\n`;
                  const outputText = `${line.output}\n`;
                  const promptVisible = promptText.slice(0, Math.max(0, Math.min(promptText.length, remainingChars)));
                  remainingChars -= promptVisible.length;
                  const outputVisible = outputText.slice(0, Math.max(0, Math.min(outputText.length, remainingChars)));
                  remainingChars -= outputVisible.length;

                  const outputTone =
                    index === 0
                      ? "neon-gradient-text"
                      : index === 1
                        ? "text-[rgba(240,236,255,0.85)]"
                        : "text-[rgba(240,236,255,0.55)]";

                  return (
                    <span key={`${line.prompt}-${line.output}`}>
                      <span className="text-[#4de8ff] [text-shadow:0_0_6px_rgba(77,232,255,0.6)]">
                        {promptVisible}
                      </span>
                      <span className={cn("output", outputTone)}>{outputVisible}</span>
                    </span>
                  );
                })}
                {isComplete ? <span className="animate-blink text-[#4de8ff]">_</span> : null}
              </pre>
            </div>
          </div>

          <div
            ref={profileGlow.ref}
            className="liquid-glass rounded-2xl border-[rgba(77,232,255,0.12)] p-8"
          >
            <p className="font-mono text-xs text-[rgba(77,232,255,0.5)]">{t.hero.profileHeader}</p>

            <ul className="specs-list mt-6 space-y-4">
              {t.hero.checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-[#4de8ff] [text-shadow:0_0_8px_rgba(77,232,255,0.5)]" />
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2 font-mono text-sm">
              <span className="text-[rgba(240,236,255,0.5)]">{t.hero.statusLabel}:</span>
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-[#4de8ff]" />
              <span className="text-[#4de8ff]">{t.hero.statusValue}</span>
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
          <p className="font-mono text-xs text-[rgba(240,236,255,0.5)]">{t.hero.stackLabel}</p>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-3 pr-3 motion-reduce:animate-none">
              {[...stackItems, ...stackItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={cn(
                    "liquid-glass rounded-full px-4 py-1 font-mono text-xs text-[rgba(240,236,255,0.65)] transition-colors hover:text-[#4de8ff]",
                    "hover:border-[rgba(77,232,255,0.3)]",
                    (index + 1) % 3 === 0 && "border-[rgba(168,85,247,0.25)]"
                  )}
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
