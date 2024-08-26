import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark",
    defaultExtendTheme: "dark",
    addCommonColors: true,
    themes: {
      dark: {
        background: "#101010",
        foreground: "",
        primary: {
          foreground: "#70E000",
        },
        secondary: {},
        colors: {
          forestgreen: "#006400",
          limegreen: "#70E000",
          crimson: "#D00000",
          neonmagenta: "#F72585",
        },
        focus: "",
      },
      light: {},
    },
    layout: {}
  })],
}
