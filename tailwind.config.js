/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Inter Tight", "Nunito Sans"],
        smallHeader: ["Kalnia", "Inter"],
        smallHea: ["Carattere", "Inter"],
      },
    },
  },
  plugins: [],
};
