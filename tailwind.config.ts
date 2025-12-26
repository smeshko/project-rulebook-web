import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Surface colors
        surface: {
          primary: "#FFFFFF",
          "primary-dark": "#1C1C1E",
          secondary: "#FFF9F0",
          "secondary-dark": "#2C2C2E",
          tertiary: "#F5E6D3",
          "tertiary-dark": "#3A3A3C",
        },
        // Content colors
        content: {
          primary: "#000000",
          "primary-dark": "#FFFFFF",
          secondary: "rgba(0, 0, 0, 0.7)",
          "secondary-dark": "rgba(255, 255, 255, 0.7)",
          tertiary: "rgba(0, 0, 0, 0.4)",
          "tertiary-dark": "rgba(255, 255, 255, 0.4)",
        },
        // Brutalist accent palette
        brutalist: {
          orange: "#FF6B35",
          "orange-dark": "#FF8C5F",
          blue: "#3498DB",
          "blue-dark": "#5DADE2",
          yellow: "#FFD23F",
          "yellow-dark": "#FFE066",
          purple: "#7209B7",
          "purple-dark": "#9D4EDD",
          pink: "#E91E63",
          "pink-dark": "#F06292",
          green: "#2ECC71",
          "green-dark": "#58D68D",
          red: "#E74C3C",
          "red-dark": "#EC7063",
          teal: "#1ABC9C",
          "teal-dark": "#48C9B0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display
        "display-lg": ["3rem", { lineHeight: "1.1", fontWeight: "900" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "900" }],
        "display-sm": ["1.75rem", { lineHeight: "1.3", fontWeight: "700" }],
        // Brutalist
        "brutalist-title": ["1.5rem", { lineHeight: "1.2", fontWeight: "900", letterSpacing: "0.02em" }],
        "brutalist-section": ["1rem", { lineHeight: "1.4", fontWeight: "900", letterSpacing: "0.05em" }],
        "brutalist-button": ["0.875rem", { lineHeight: "1", fontWeight: "900", letterSpacing: "0.05em" }],
      },
      boxShadow: {
        "brutalist-sm": "4px 4px 0 0 #000000",
        "brutalist-md": "6px 6px 0 0 #000000",
        "brutalist-lg": "8px 8px 0 0 #000000",
        "brutalist-xl": "12px 12px 0 0 #000000",
        "brutalist-orange": "8px 8px 0 0 #FF6B35",
        "brutalist-pink": "6px 6px 0 0 #E91E63",
        "brutalist-blue": "6px 6px 0 0 #3498DB",
        "brutalist-green": "6px 6px 0 0 #2ECC71",
        "brutalist-purple": "6px 6px 0 0 #7209B7",
        "brutalist-yellow": "6px 6px 0 0 #FFD23F",
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
