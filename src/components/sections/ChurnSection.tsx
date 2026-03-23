import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ChurnSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const cardGlow = useGlowPulse<HTMLDivElement>();

  return (
    <section id="churn">
      <div className="module-header liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-2xl border-[rgba(77,232,255,0.1)] p-4">
        <p className="font-mono text-sm text-[rgba(240,236,255,0.75)]">
          <span className="index">01.a</span> &gt; {t.churn.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.churn.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgba(77,232,255,0.2)] bg-[rgba(77,232,255,0.06)] px-3 py-1 text-xs text-[#4de8ff] [text-shadow:0_0_6px_rgba(77,232,255,0.3)]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("mt-6 grid items-start gap-12 lg:grid-cols-2", fade.className)}>
        <div>
          <h2 className="sys-title">{t.churn.title}</h2>
          <p className="sys-desc mt-4">{t.churn.description}</p>

          <ul className="specs-list mt-6 space-y-4">
            {t.churn.specs.map((spec) => (
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
              <a
                href="https://github.com/benllame/classical_ml_and_agents"
                target="_blank"
                rel="noreferrer"
              >
                [ REPO ]
              </a>
            </Button>
          </div>
        </div>

        <div ref={cardGlow.ref} className="liquid-glass rounded-2xl p-6">
          <div className="arch-flow flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="node source">{t.churn.diagram.source}</div>
            <span className="flow-arrow">→</span>
            <div className="node processing relative">
              {t.churn.diagram.pipeline}
              <span className="status-dot-neon absolute -right-1 -top-1 h-2 w-2 rounded-full" />
            </div>
            <span className="flow-arrow">→</span>
            <div className="node processing">{t.churn.diagram.best}</div>
            <span className="flow-arrow">→</span>
            <div className="node destination">
              {t.churn.diagram.policy}
              <div className="mt-1 flex justify-center gap-1">
                <span className="worker-dot h-1.5 w-1.5 rounded-full [animation-delay:0ms]" />
                <span className="worker-dot h-1.5 w-1.5 rounded-full [animation-delay:120ms]" />
                <span className="worker-dot h-1.5 w-1.5 rounded-full [animation-delay:240ms]" />
              </div>
            </div>
          </div>

          <div className="code-snippet mt-6 rounded-xl p-4">
            <pre className="font-mono text-xs leading-6">
              <span className="cmd">catboost</span> <span className="arg">best_model</span> · all_features
              {"\n"}
              <span className="output highlight">ROC-AUC : 0.847 ± 0.012</span>
              {"\n"}
              <span className="output">F1-Macro: 0.743 ± 0.011</span>
              {"\n"}
              <span className="output">ReAct Agent → Gemini 2.5 Flash</span>
              {"\n"}
              <span className="output">Tools: predict | explain | policy | budget</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
