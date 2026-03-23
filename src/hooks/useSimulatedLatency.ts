import { useEffect, useState } from "react";

function getRandomLatency() {
  return Math.floor(Math.random() * 11) + 10;
}

export function useSimulatedLatency() {
  const [latency, setLatency] = useState(getRandomLatency);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLatency(getRandomLatency());
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return latency;
}
