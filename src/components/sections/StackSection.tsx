import { Brain, Code2, Database, MessageSquareText, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const iconMap = [Brain, MessageSquareText, Database, Server, Code2];

export function StackSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const colors = ["#4de8ff", "#c084fc", "#22d3ee", "#818cf8", "#a78bfa"];

  return (
    <section id="stack" className="py-16">
      <div className="liquid-glass mx-auto mb-8 w-fit rounded-full border border-[rgba(77,232,255,0.2)] px-4 py-2 [box-shadow:0_0_20px_rgba(77,232,255,0.08)]">
        <span className="neon-gradient-text font-mono text-sm">{t.stack.header}</span>
      </div>

      <div
        ref={fade.ref}
        className={cn(
          "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
          fade.className
        )}
      >
        {t.stack.cards.map((card, index) => {
          return (
            <TechCard
              key={card.title}
              icon={iconMap[index] ?? Code2}
              iconColor={colors[index] ?? colors[0]}
              title={card.title}
              items={card.items}
            />
          );
        })}
      </div>
    </section>
  );
}

function TechCard({
  icon: Icon,
  iconColor,
  title,
  items,
}: {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  items: string;
}) {
  const cardGlow = useGlowPulse<HTMLElement>();

  return (
    <article
      ref={cardGlow.ref}
      className="liquid-glass rounded-2xl p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:border-[rgba(77,232,255,0.2)] hover:bg-[rgba(77,232,255,0.035)] hover:[box-shadow:0_0_30px_rgba(77,232,255,0.06)]"
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(77,232,255,0.15)] bg-[rgba(77,232,255,0.08)]"
        style={{ color: iconColor, filter: "drop-shadow(0 0 6px rgba(77, 232, 255, 0.4))" }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-sans text-sm font-semibold text-[rgba(240,236,255,0.9)]">{title}</h3>
      <p className="mt-2 font-mono text-xs leading-6 text-[rgba(240,236,255,0.45)]">{items}</p>
    </article>
  );
}
