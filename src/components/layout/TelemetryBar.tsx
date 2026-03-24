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
    <div className="telemetry-bar">
      <div className="telemetry-item">
        <span>{t.telemetry.timeLabel}:</span>
        <span id="sys-time">{time}</span>
      </div>

      <span className="telemetry-separator">|</span>

      <div className="telemetry-item hidden sm:flex">
        <span>{t.telemetry.statusLabel}:</span>
        <span className="status-dot" aria-hidden="true" />
        <span className="status-ok">{t.telemetry.status}</span>
      </div>

      <span className="telemetry-separator hidden sm:inline">|</span>

      <div className="telemetry-item hidden md:flex">
        <span>{t.telemetry.latencyLabel}:</span>
        <span id="ping-sim">{latency}ms</span>
      </div>

      <span className="telemetry-separator hidden md:inline">|</span>

      <div className="telemetry-item hidden lg:flex">
        <span>{t.telemetry.ipLabel}: 127.0.0.1</span>
      </div>
    </div>
  );
}
