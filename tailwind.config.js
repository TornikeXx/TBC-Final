/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "850px",
      xsm: "500px",
      xxsm: "360px",
    },
    colors: {
      green: "#5BBA66",
      greyBg: "#FAF8F0",
      greyTxt: "#F6EBDE",
      black: "#1E1F24",
      semiblack: "rgba(30, 31, 36, 0.8)",
      greenBtn: "#60626d",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    borderRadius: {
      "4xl": "40px",
    },
  },
  plugins: [],
};
