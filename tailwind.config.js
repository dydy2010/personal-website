/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#04070f",
        ink: "#eaf2fb",
        muted: "#8ea0c0",
        dmn: "#6ee7b7", // Humanistic - aurora mint
        sal: "#a78bfa", // Creative - violet
        cen: "#38bdf8", // AI-driven - sky blue
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1120px",
      },
    },
  },
  plugins: [],
};
