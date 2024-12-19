/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
      fontFamily: {
        rwblack: ["Raleway-Black", "sans-serif"],
        rwbold: ["Raleway-Bold", "sans-serif"],
        rwxbold: ["Raleway-ExtraBold", "sans-serif"],
        rwxlight: ["Raleway-ExtraLight", "sans-serif"],
        rwlight: ["Raleway-Light", "sans-serif"],
        rwmedium: ["Raleway-Medium", "sans-serif"],
        rwregular: ["Raleway-Regular", "sans-serif"],
        rwsemibold: ["Raleway-SemiBold", "sans-serif"],
        rwthin: ["Raleway-thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
