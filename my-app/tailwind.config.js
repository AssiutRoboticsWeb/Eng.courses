import Homebanner from "./src/assets/images/HomeBanner.jpg";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      // 'home-banner': `url(${Homebanner})`,
      "home-banner": `url("./src/assets/images/22.jpg")`,
      "electrical-department": `url("./src/assets/images/HomeBanner.jpg")`,
    },
  },
  plugins: [],
};
