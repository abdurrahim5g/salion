/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sailon: {
          primary: "#DC8275",
          secondary: "#000000",
          accent: "#ECECEC",
          natural: "#FFFFFF",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
