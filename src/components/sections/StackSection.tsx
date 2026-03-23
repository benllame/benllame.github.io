import { Brain, Code2, Database, MessageSquareText, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const iconMap = [Brain, MessageSquareText, Database, Server, Code2];

export function StackSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();

  return (
    <section id="stack" className="scroll-mt-32 py-16">
      <div className="mx-auto mb-8 w-fit rounded-full px-4 py-2 liquid-glass">
        <span className="font-mono text-sm text-foreground">{t.stack.header}</span>
      </div>

      <div
        ref={fade.ref}
        className={cn(
          "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
          fade.className
        )}
      >
        {t.stack.cards.map((card, index) => {
          const Icon = iconMap[index] ?? Code2;

          return (
            <article
              key={card.title}
              className="liquid-glass rounded-2xl p-6 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-sans text-sm font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 font-mono text-xs leading-6 text-muted-foreground">{card.items}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
