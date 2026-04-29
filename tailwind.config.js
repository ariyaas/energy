

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#1A75BC",
        brandSecondary: "#6E6F73",
      },
    },
  },
  plugins: [],
}