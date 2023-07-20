/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lugrasimo: ["Lugrasimo", "cursive"], // Define the custom font family
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
