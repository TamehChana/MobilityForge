import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e8f0fe",
          100: "#d2e3fc",
          200: "#aecbfa",
          500: "#1a73e8",
          600: "#1a73e8",
          700: "#1765cc",
          800: "#185abc",
          900: "#174ea6",
        },
        surface: {
          DEFAULT: "#ffffff",
          dim: "#f8f9fa",
          container: "#f1f3f4",
          "container-high": "#e8eaed",
        },
        ink: {
          DEFAULT: "#1f1f1f",
          variant: "#444746",
          muted: "#5f6368",
        },
        outline: {
          DEFAULT: "#dadce0",
          variant: "#c4c7c5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Roboto", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Roboto Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" }],
        "title": ["1.375rem", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        pill: "9999px",
      },
      boxShadow: {
        "elevation-1":
          "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        "elevation-2":
          "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",
        "elevation-3":
          "0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3)",
        "elevation-4":
          "0 6px 10px 4px rgba(60, 64, 67, 0.15), 0 2px 3px rgba(60, 64, 67, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
