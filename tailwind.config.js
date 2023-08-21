/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        salion: {
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
