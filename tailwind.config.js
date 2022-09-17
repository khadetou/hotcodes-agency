/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "body-bg": "rgb(17, 23, 34,  1)",
        "blue-color": "rgb(74, 108, 247 )",
        "blue-dark": "rgb(34, 44, 64)",
        gray: "#78808a",
      },
      fontFamily: {
        lexend: ["lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
