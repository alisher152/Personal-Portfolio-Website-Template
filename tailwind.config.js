/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        waving: "waving 2.5s infinite",
      },
      keyframes: {
        waving: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      width: {
        220: "220px",
      },
      margin: {
        100: "100px",
        120: "120px",
        240: "240px",
      },
      colors: {
        primary: {
          light: "#1a202c",
          dark: "#e2e8f0",
        },
        text: {
          primary: "#111827",
          secondary: "#4b5563",
          "primary-dark": "#f3f4f6",
          "secondary-dark": "#9ca3af",
        },
      },
      // Тестовый стиль для проверки
      backgroundColor: {
        "test-light": "#ffffff",
        "test-dark": "#1a1a1a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
