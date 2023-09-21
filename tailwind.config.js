/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["luxury"],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
