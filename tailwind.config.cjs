/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir"],
      },
      colors: {
        primary: "#ea580c",
      },
    },
  },
  plugins: [],
};
