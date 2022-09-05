/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        22: "88px",
        74: "310px",
        94: "379px",
      },
      screens: {
        mdmax: { max: "910px" },
      },
    },
  },
  plugins: [],
};
