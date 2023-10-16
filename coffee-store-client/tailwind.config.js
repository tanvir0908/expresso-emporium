/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rale: ["Raleway", "sans-serif"],
      ran: ["Rancho", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
