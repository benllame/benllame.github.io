import { useLanguage } from "@/context/LanguageContext";
import { useLiveClock } from "@/hooks/useLiveClock";
import { useSimulatedLatency } from "@/hooks/useSimulatedLatency";
import { translations } from "@/lib/i18n";

export function TelemetryBar() {
  const time = useLiveClock();
  const latency = useSimulatedLatency();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-7 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-2 px-4 font-mono text-[11px] text-muted-foreground sm:px-6 lg:px-8">
        <span>{`${t.telemetry.timeLabel}: ${time}`}</span>
        <span className="text-muted-foreground/40">|</span>
        <span className="hidden items-center gap-1 sm:flex">
          {t.telemetry.statusLabel}: <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-primary" />
          <span className="text-primary">{t.telemetry.status}</span>
        </span>
        <span className="hidden text-muted-foreground/40 sm:inline">|</span>
        <span className="hidden md:inline">{`${t.telemetry.latencyLabel}: ${latency}ms`}</span>
        <span className="hidden text-muted-foreground/40 md:inline">|</span>
        <span className="hidden lg:inline">{`${t.telemetry.ipLabel}: 127.0.0.1`}</span>
      </div>
    </div>
  );
}
