/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  future: {
    // Only apply `hover:` / `group-hover:` utilities on devices that truly
    // support hover (pointer: fine). Without this, tapping a card on a phone
    // triggers a "sticky" :hover that keeps `hover:scale-105` applied, so the
    // card stays enlarged and overlaps its neighbours — the mobile "mismatch".
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        // Warm editorial UI/body type
        sans: ["'DM Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
        // Serif display for big magazine-style headings
        display: ["'Fraunces'", "'DM Sans'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        /* ---- Warm editorial palette ---- */
        cream: {
          DEFAULT: "#F5F1EA",
          50: "#FBF9F5",
          100: "#F7F3EC",
          200: "#F5F1EA",
          300: "#EFE9DE",
          400: "#E7DECE",
          500: "#DCD0BB",
        },
        paper: "#EFE9DE",
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#57534E",
          muted: "#8A817A",
        },
        gold: {
          DEFAULT: "#C39A4E",
          light: "#D9B978",
          deep: "#A8823B",
        },
        sage: {
          DEFAULT: "#5CA595",
          light: "#8FC3B7",
          deep: "#4A8578",
        },
        clay: {
          DEFAULT: "#C15F3C",
          light: "#D98A6E",
          deep: "#A84E2F",
        },

        /* ---- Existing token-based colors (kept for compatibility) ---- */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(26, 26, 26, 0.35)",
        card: "0 24px 60px -30px rgba(120, 90, 40, 0.45)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.7s ease-out both",
        "slide-up": "slide-up 0.5s ease-out both",
        "spin-slow": "spin 22s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "50%": { transform: "translate(14px, -22px) rotate(6deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
}
