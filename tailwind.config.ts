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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1E3A8A", // Deep Blue
          hover: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#D4AF37", // Gold
          hover: "#B8960B",
        },
        gold: {
          50: '#FDFCF6',
          100: '#FBF8E6',
          200: '#F5ECC0',
          300: '#EEDC93',
          400: '#E5C961',
          500: '#D4AF37', // Gold base
          600: '#BE972B',
          700: '#9B7422',
          800: '#816023',
          900: '#6E5124',
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "marquee-vertical-up": "marquee-vertical-up 30s linear infinite",
        "marquee-vertical-down": "marquee-vertical-down 30s linear infinite",
      },
      keyframes: {
        "marquee-vertical-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-50% - 8px))" },
        },
        "marquee-vertical-down": {
          from: { transform: "translateY(calc(-50% - 8px))" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
