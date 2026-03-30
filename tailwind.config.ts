import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand Colors ──────────────────────────────────────────────
      colors: {
        coral: {
          DEFAULT: "#FF5344",
          hover: "#E8402F",
          light: "#FFF0EE",
        },
        teal: {
          DEFAULT: "#00C6C0",
          hover: "#00A8A3",
          light: "#E6FAFA",
        },
        sky: {
          DEFAULT: "#387CDE",
          hover: "#2D67C3",
          light: "#EBF2FD",
        },
        marigold: {
          DEFAULT: "#FFBD00",
          hover: "#E6A900",
          light: "#FFF8E1",
        },
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          "gray-light": "#F2F2F2",
          "gray-dark": "#7F7F7F",
        },
      },

      // ── Typography ────────────────────────────────────────────────
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        // Design-spec sizes
        "display-xl": ["72px", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "1.15", fontWeight: "700" }],
        "h2": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "h2-sm": ["36px", { lineHeight: "1.25", fontWeight: "600" }],
        "h3": ["30px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-sm": ["24px", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "caption": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "btn": ["16px", { lineHeight: "1", fontWeight: "600" }],
      },

      // ── Spacing ───────────────────────────────────────────────────
      spacing: {
        "section": "96px",
        "section-sm": "64px",
      },

      // ── Border Radius ─────────────────────────────────────────────
      borderRadius: {
        "btn": "8px",
        "card": "12px",
        "card-lg": "16px",
      },

      // ── Box Shadow ────────────────────────────────────────────────
      boxShadow: {
        card: "0 2px 16px 0 rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px 0 rgba(0,0,0,0.14)",
        btn: "0 2px 8px 0 rgba(255,83,68,0.24)",
      },

      // ── Max Width ─────────────────────────────────────────────────
      maxWidth: {
        content: "1200px",
        "content-narrow": "800px",
        "content-wide": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
