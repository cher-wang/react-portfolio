module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lined: "url('./assets/lined_bg.png')",
      },
      colors: {
        "spring-green": { 100: "#D7E3C4", 200: "#a7bd80", 300: "#9CBD66" },
        "misty-blue": { 100: "#D0E0E9", 200: "#ADCACE" },
        aquamarine: { 100: "#B9E1E7", 200: "#7ECED9" },
      },
    },
  },
  plugins: [],
};
