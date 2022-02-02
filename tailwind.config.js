module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Permanent Marker", "monospace"],
      second: ["Dongle", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#294856",
        secondary: "#82929e",
        third: "#b2bdd3",
        four: "#26b5eb",
        five: "#e9e1e1",
      },
    },
  },
  plugins: [],
};
