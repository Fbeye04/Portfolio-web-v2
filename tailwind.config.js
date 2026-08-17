/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        "off-white": "#FBF9F6",
        "primary-olive": "#86825C",
        "dark-olive": "#76734B",
        "dark-brown": "#26160F",
        "warm-gray": "#6F6B67",
        "soft-taupe": "#D8D3C8",
        "light-olive": "#E3E0D3",
      },
    },
  },
  plugins: [],
};
