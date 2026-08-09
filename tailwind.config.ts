import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF9",
        ink: "#0A0A0A",
        primary: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        gold: {
          DEFAULT: "#C9A227",
          soft: "#E8D5A3",
          muted: "#B8A06A",
        },
        warm: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(10, 10, 10, 0.06), 0 4px 16px -4px rgba(10, 10, 10, 0.08)",
        card: "0 1px 3px rgba(10, 10, 10, 0.04), 0 8px 24px -8px rgba(10, 10, 10, 0.08)",
        "card-hover":
          "0 4px 12px -2px rgba(10, 10, 10, 0.06), 0 16px 40px -12px rgba(59, 130, 246, 0.18)",
        glow: "0 0 24px -4px rgba(59, 130, 246, 0.35), 0 0 48px -8px rgba(59, 130, 246, 0.2)",
        "glow-sm": "0 0 16px -2px rgba(59, 130, 246, 0.3)",
        button: "0 1px 2px rgba(10, 10, 10, 0.05), 0 4px 12px -2px rgba(59, 130, 246, 0.35)",
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59, 130, 246, 0.15), transparent 70%)",
        "hero-glow":
          "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(59, 130, 246, 0.18), transparent 65%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
