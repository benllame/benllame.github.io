import { useEffect, useState } from "react";

function getClockString() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

export function useLiveClock() {
  const [time, setTime] = useState(getClockString);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getClockString());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return time;
}
