import { ChevronDown, ChevronRight } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function RAGSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const cardGlow = useGlowPulse<HTMLDivElement>();

  return (
    <section id="rag">
      <div className="module-header liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-2xl border-[rgba(77,232,255,0.1)] p-4">
        <p className="font-mono text-sm text-[rgba(240,236,255,0.75)]">
          <span className="index">01.b</span> &gt; {t.rag.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.rag.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgba(168,85,247,0.25)] bg-[rgba(168,85,247,0.07)] px-3 py-1 text-xs text-[#c084fc] [text-shadow:0_0_6px_rgba(168,85,247,0.3)]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("mt-6 grid items-start gap-12 lg:grid-cols-2", fade.className)}>
        <div>
          <h2 className="sys-title">{t.rag.title}</h2>
          <p className="sys-desc mt-4">{t.rag.description}</p>

          <ul className="specs-list mt-6 space-y-4">
            {t.rag.specs.map((spec) => (
              <li key={spec.label} className="flex items-start gap-3 text-sm">
                <ChevronRight className="mt-1 h-4 w-4 text-primary" />
                <p>
                  <strong>{spec.label}:</strong> {spec.text}
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

        <div
          ref={cardGlow.ref}
          className="liquid-glass-violet rounded-2xl border border-[rgba(168,85,247,0.15)] p-6"
        >
          <div className="-mx-6 -mt-6 mb-4 flex items-center gap-2 border-b border-[rgba(168,85,247,0.12)] bg-[rgba(168,85,247,0.08)] px-6 py-3">
            <Sparkles className="h-4 w-4 text-[#c084fc]" />
            <p className="text-sm text-[rgba(240,236,255,0.85)]">rag_chain.py - {t.rag.pipelineHeader}</p>
          </div>

          <div className="rag-query mt-4 px-4 py-3 text-sm">{t.rag.query}</div>

          <div className="mt-4 space-y-2">
            {t.rag.pipelineNodes.map((node, index) => {
              const isRerank = node.includes("RERANK");
              return (
                <div key={node}>
                  <div
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm text-[rgba(240,236,255,0.85)] liquid-glass-violet",
                      index % 2 === 0 ? "rag-node" : "rag-node-alt",
                      isRerank && "rag-node-rerank"
                    )}
                  >
                    <span>{node}</span>
                    {isRerank ? (
                      <span className="rn-badge ml-2 rounded-full px-2 py-0.5 text-[10px]">
                        +0.414 relevancy
                      </span>
                    ) : null}
                  </div>
                  {index !== t.rag.pipelineNodes.length - 1 ? (
                    <div className="flex justify-center py-1 text-[rgba(77,232,255,0.7)]">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              );
            })}
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
    <div className="liquid-glass-violet rag-metric rounded-xl p-3">
      <p className="text-[10px] text-[rgba(240,236,255,0.5)]">{title}</p>
      <p className={cn("font-mono text-base text-[#4de8ff]", highlight && "rag-highlight")}>{value}</p>
      <p className="rag-delta text-[10px]">{delta}</p>
    </div>
  );
}
