import { Brain, Code2, Database, MessageSquareText, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const iconMap = [Brain, MessageSquareText, Database, Server, Code2];

export function StackSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const colors = ["#4de8ff", "#c084fc", "#22d3ee", "#818cf8", "#a78bfa"];

  return (
    <section id="stack" className="module fade-in-up">
      <div className="module-header">
        <h2>Tech Stack</h2>
      </div>

      <div ref={fade.ref} className={cn("module-content", fade.className)}>
        <div className="tech-grid">
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
  return (
    <article className="tech-card">
      <div className="card-icon" style={{ color: iconColor }}>
        <Icon className="h-4 w-4" />
      </div>
      <h3>{title}</h3>
      <p>{items}</p>
    </article>
  );
}
