/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-main": "#242882",
        "navy": "#060942",
        "light-blue": "#B2C6E4",
        "mid-blue": "#CFDDF5",
        "pale-blue": "#E4ECF8"
      },
      fontFamily: {
        dmsans: ["'DM Sans'", "sans-serif"], // Correct Google Font name
        main: ["'customFont'", "sans-serif"], // Custom font (matches @font-face)
        fragmentMono: ["Fragment Mono", "monospace"], // Correct Google Font name (monospace font)
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
