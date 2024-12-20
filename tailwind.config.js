/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#816BFF",
        cyan: "#1FCEC9",
        black: "#3B4747",
        blue: "#4B97D3",
      },
    },
    fontFamily: { roboto: "Roboto, serif" },
  },
  plugins: [],
};
