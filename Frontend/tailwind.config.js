/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#181100",
        customGrayLight: "#181100a6",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
