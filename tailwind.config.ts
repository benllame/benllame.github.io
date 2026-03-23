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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: "hsl(var(--secondary))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
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
        worker: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        scanline: {
          "0%": { top: "0" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        worker: "worker 1.4s ease-in-out infinite",
        scanline: "scanline 3s linear infinite",
      },
      boxShadow: {
        glow: "0 0 24px rgba(125,250,107,0.18)",
      },
    },
  },
  plugins: [animate],
};

export default config;
