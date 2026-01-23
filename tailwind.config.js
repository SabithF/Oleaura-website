/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimay: "#fff5cd",
        greenText: "#4e5a16",
        greenBg: "#868e33",
        greenTextDark: "#203514"

      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        cursiveFont: ["cursiveFont", "cursive"],
        funkyFont: ["funkyFont", "cursive"],
      },

    },
  },
  plugins: [],
};
