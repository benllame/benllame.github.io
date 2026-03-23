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
    <div className="fixed inset-x-0 top-0 z-50 h-7 border-b border-[rgba(77,232,255,0.08)] bg-[rgba(3,1,10,0.92)] backdrop-blur-[10px]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-2 px-4 font-mono text-[11px] text-[rgba(240,236,255,0.45)] sm:px-6 lg:px-8">
        <span>
          {t.telemetry.timeLabel}: <span className="text-primary [text-shadow:0_0_8px_rgba(77,232,255,0.4)]">{time}</span>
        </span>
        <span className="text-[rgba(77,232,255,0.15)]">|</span>
        <span className="hidden items-center gap-1 sm:flex">
          {t.telemetry.statusLabel}:{" "}
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-[#4de8ff]" />
          <span className="text-[#4de8ff] [text-shadow:0_0_8px_rgba(77,232,255,0.4)]">{t.telemetry.status}</span>
        </span>
        <span className="hidden text-[rgba(77,232,255,0.15)] sm:inline">|</span>
        <span className="hidden md:inline">
          {t.telemetry.latencyLabel}: <span className="text-[rgba(240,236,255,0.6)]">{latency}ms</span>
        </span>
        <span className="hidden text-[rgba(77,232,255,0.15)] md:inline">|</span>
        <span className="hidden lg:inline">{`${t.telemetry.ipLabel}: 127.0.0.1`}</span>
      </div>
    </div>
  );
}
