/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#4EA8DE",
        dark: "#1E6F9F",
      },
      purple: {
        DEFAULT: "#8284FA",
        dark: "#5E60CE",
      },
      gray: {
        100: "#F2F2F2",
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1A1A1A",
        700: "#0D0D0D",
      },
      red: "#E25858",
    },
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        inter700: ["Inter_700Bold"],
      },
    },
  },
  plugins: [],
};
