import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function RAGSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();

  return (
    <section id="rag" className="scroll-mt-32">
      <div className="liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-xl p-4">
        <p className="font-mono text-sm text-foreground">
          <span className="font-bold text-primary">01.b</span> &gt; {t.rag.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.rag.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-indigo-300/30 bg-indigo-300/5 px-3 py-1 text-xs text-indigo-200"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={fade.ref}
        className={cn("mt-6 grid items-start gap-12 lg:grid-cols-2", fade.className)}
      >
        <div>
          <h2 className="font-sans text-2xl font-semibold text-foreground">{t.rag.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.rag.description}</p>

          <ul className="mt-6 space-y-4">
            {t.rag.specs.map((spec) => (
              <li key={spec.label} className="flex items-start gap-3 text-sm text-muted-foreground">
                <ChevronRight className="mt-1 h-4 w-4 text-primary" />
                <p>
                  <span className="font-semibold text-foreground">{spec.label}:</span> {spec.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild variant="action">
              <a href="#">[ REPO ]</a>
            </Button>
          </div>
        </div>

        <div className="liquid-glass rounded-2xl p-6">
          <p className="text-sm text-foreground">🤖 rag_chain.py - {t.rag.pipelineHeader}</p>

          <div className="mt-4 rounded-xl border border-border/40 bg-background/40 px-4 py-3 text-sm text-muted-foreground">
            {t.rag.query}
          </div>

          <div className="mt-4 space-y-2">
            {t.rag.pipelineNodes.map((node, index) => (
              <div key={node}>
                <div className="liquid-glass rounded-xl px-4 py-3 text-sm text-foreground">{node}</div>
                {index !== t.rag.pipelineNodes.length - 1 ? (
                  <div className="flex justify-center py-1 text-primary/70">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Metric title={t.rag.metrics.faithfulness} value="0.891" delta="↑ +0.022" />
            <Metric
              title={t.rag.metrics.relevancy}
              value="0.906"
              delta="↑ +0.414"
              highlight
            />
            <Metric title={t.rag.metrics.precision} value="0.716" delta="↑ +0.238" highlight />
            <Metric title={t.rag.metrics.recall} value="0.795" delta="↑ +0.498" highlight />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  title,
  value,
  delta,
  highlight = false,
}: {
  title: string;
  value: string;
  delta: string;
  highlight?: boolean;
}) {
  return (
    <div className="liquid-glass rounded-xl p-3">
      <p className="text-[10px] text-muted-foreground">{title}</p>
      <p className={cn("font-mono text-base text-foreground", highlight && "text-primary")}>{value}</p>
      <p className="text-[10px] text-primary">{delta}</p>
    </div>
  );
}
