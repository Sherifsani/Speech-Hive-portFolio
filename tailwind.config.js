/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["oswald", "sans-serif"],
        serif: ["quattrocento", "serif"],
      },
      colors: {
        "logo-color": "rgb(17,24,39)",
        primary: "rgb(213, 231, 242)",
        cta: "rgb(17, 24, 39)",
      },
    },
  },
  plugins: [require("daisyui")],
};
