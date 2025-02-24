/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backdrop: "url('/new_img/backdrop.jpg')",
      },
      fontSize: {
        clamp: "clamp(1rem, 5vw, 62px)",
        clamp2: "clamp(18px, 2vw, 24px )",
        clamp3: "clamp(30px, 5vw, 72px)",
      },
    },
  },
  plugins: [require("flyonui"), require("flyonui/plugin")],
};
