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
        brand: {
          red: "#FE0000",
          "red-dark": "#BA0000",
          black: "#080808",
          gold: "#FCFF00",
          white: "#FFFFFF",
          gray: {
            50: "#FAFAFA",
            100: "#F3F3F3",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          },
        },
        primary: {
          DEFAULT: "#FE0000",
          dark: "#BA0000",
          light: "#FFF1F1",
        },
        dark: {
          DEFAULT: "#080808",
          surface: "#121212",
          border: "#242424",
        },
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "Public Sans", "sans-serif"],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      spacing: {
        "unit-xs": "4px",
        "unit-sm": "8px",
        "unit-md": "16px",
        "unit-lg": "24px",
        "unit-xl": "48px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
      },
    },
  },
  plugins: [],
};

export default config;
