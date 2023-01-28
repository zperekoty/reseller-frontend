/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      keyframes: {
        loader: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        loader: "loader 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
