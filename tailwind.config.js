module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lined: "url('./assets/lined_bg.png')",
      },
      colors: {
        "spring-green": { 100: "#D7E3C4", 200: "#a7bd80", 300: "#9CBD66" },
        "misty-blue": "#D0E0E9",
        aquamarine: "#7ECED9",
      },
    },
  },
  plugins: [],
};
