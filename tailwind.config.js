/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 62px)",
        clamp2: "clamp(18px, 2vw, 24px )",
        clamp3: "clamp(30px, 5vw, 72px)"
      },
    },
  },
  plugins: [],
};

