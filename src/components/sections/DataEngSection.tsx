import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function DataEngSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();

  return (
    <section id="data-eng" className="scroll-mt-32">
      <div className="liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-xl p-4">
        <p className="font-mono text-sm text-foreground">
          <span className="font-bold text-primary">01.c</span> &gt; {t.dataEng.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.dataEng.badges.map((badge) => (
            <span
              key={badge}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-muted-foreground"
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
          <h2 className="font-sans text-2xl font-semibold text-foreground">{t.dataEng.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.dataEng.description}</p>

          <ul className="mt-6 space-y-4">
            {t.dataEng.specs.map((spec) => (
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
              <a
                href="https://github.com/benllame/Olist-E-Commerce-Data-Platform"
                target="_blank"
                rel="noreferrer"
              >
                [ REPO ]
              </a>
            </Button>
          </div>
        </div>

        <div className="liquid-glass rounded-2xl p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flow-node">{t.dataEng.diagram.source}</div>
            <span className="flow-arrow">→</span>
            <div className="flow-node relative">
              {t.dataEng.diagram.airflow}
              <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulseDot rounded-full bg-primary" />
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-node flow-node-accent">
              {t.dataEng.diagram.dataflow}
              <div className="mt-1 flex justify-center gap-1">
                <span className="h-1.5 w-1.5 animate-worker rounded-full bg-primary [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-worker rounded-full bg-primary [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-worker rounded-full bg-primary [animation-delay:240ms]" />
              </div>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-node">{t.dataEng.diagram.bigquery}</div>
          </div>

          <div className="mt-6 liquid-glass rounded-xl p-4">
            <pre className="font-mono text-xs leading-6 text-muted-foreground">
              terraform apply -auto-approve
              {"\n"}
              Apply complete! Resources: 28 added, 0 changed, 0 destroyed.
              {"\n"}
              bigquery_dataset_id = "olist_analytics"
              {"\n"}
              dataflow_bucket = "gs://olist-etl-...-bucket"
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
