/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   bg: "#F4F4F7",
      //   surface: "#FFFFFF",
      //   card: "#FFFFFF",
      //   border: "#E6E6EC",

      //   accent: "#CFC5FF",
      //   "accent-lt": "#B8A9FF",

      //   text: "#1E1E24",
      //   muted: "#8C8C98",

      //   success: "#7EE7B8",
      //   warning: "#FFB86B",
      //   danger: "#FF8A8A",

      //   lavender: "#CFC5FF",
      //   violet: "#B8A9FF",
      //   dark: "#1E1E24",

      //   glow: "rgba(207,197,255,0.25)",
      //   glowStrong: "rgba(207,197,255,0.45)",
      // },
      fontFamily: {
        sans: ["'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.4)",
        md: "0 4px 16px rgba(0,0,0,0.5)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease both",
        "spin-fast": "spin 0.8s linear infinite",
      },
      transitionTimingFunction: {
        sidebar: "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
};
