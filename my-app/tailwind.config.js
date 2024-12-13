/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#ff9c01",
          100: "#ff9001",
          200: "#ff8e01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1e1e2d",
          200: "#232533",
        },
        gray: {
          100: "#cdcde0",
        },
      },
    },
  },
  plugins: [],
};
