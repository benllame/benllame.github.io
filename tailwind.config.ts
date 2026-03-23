import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-glow": "var(--primary-glow)",
        "secondary-accent": "var(--secondary-accent)",
        "secondary-glow": "var(--secondary-glow)",
        "tertiary-accent": "var(--tertiary-accent)",
        border: "var(--border)",
        "border-bright": "var(--border-bright)",
        "card-bg": "var(--card-bg)",
        "card-bg-hover": "var(--card-bg-hover)",
        muted: "var(--muted)",
        "muted-strong": "var(--muted-strong)",
        "gradient-start": "var(--gradient-start)",
        "gradient-mid": "var(--gradient-mid)",
        "gradient-end": "var(--gradient-end)",
        neon: "var(--primary)",
        violet: "var(--secondary-accent)",
        glow: "var(--primary-glow)",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"],
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.88)" },
        },
        pulseNeon: {
          "0%": { boxShadow: "0 0 0 0 rgba(77, 232, 255, 0.4)" },
          "70%": { boxShadow: "0 0 0 8px rgba(77, 232, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(77, 232, 255, 0)" },
        },
        worker: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { top: "0" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        pulseNeon: "pulseNeon 2s infinite",
        worker: "worker 1.4s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        scanline: "scanline 3s linear infinite",
      },
      boxShadow: {
        glow: "0 0 24px rgba(77,232,255,0.22)",
      },
    },
  },
  plugins: [animate],
};

export default config;
