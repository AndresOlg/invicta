/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./test/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "gray": {
          "100": "#828282",
          "200": "#5F5F5F",
          "300": "#666666",
        },
        "white": "#FFFFFF",
        "white-gray": "#F7F7F7",
        "highlight-color": "#e00f0f",
        "primary": "#feee00",
        "secundary": "#FFF200",
        "accent": "#0071B9",
      },
    },
    fontFamily: {
      'sans': ['system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    screens: {
      'sm': { 'min': '357px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' },
      "2xl": "1536px",
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

