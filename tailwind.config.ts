import type { Config } from "tailwindcss";

// Design tokens — see DESIGN_SYSTEM.md for the full spec.
// Colors are locked brand values; do not introduce new hexes outside this file.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#132A19",
        gold: "#F2761E",
        emerald: "#2F6B3E",
        sand: "#EDE6D6",
        paper: "#F7F3EA",
        ruby: "#E3241F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      // Named type scale — display / heading / body / caption / mono-data.
      // [fontSize, { lineHeight, letterSpacing, fontWeight }]
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "400" }], // 64px
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }], // 48px
        heading: ["1.75rem", { lineHeight: "1.25", letterSpacing: "0em", fontWeight: "500" }], // 28px
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" }], // 18px
        body: ["1rem", { lineHeight: "1.65", letterSpacing: "0em", fontWeight: "400" }], // 16px
        caption: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }], // 13px
        "mono-data": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }], // 13px
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        18: "4.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 27, 45, 0.06), 0 8px 24px rgba(15, 27, 45, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
