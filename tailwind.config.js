/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        action: "#F03A47",
        actionDark: "#F03A47",
        actionSecondary: "#109648",
      },
      textColor: {
        primary: "#183059",
        secondary: "#F6F4F3"
      },
      backgroundColor: {
        primary: "#F6F4F3",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      fontSize: {
        xl: "clamp(1.5rem, 1.5em, 2rem)",
        lg: "clamp(0.8rem, 1.3em, 1.7rem)",
        sm: "clamp(0.9rem, 1.1em, 1.4rem)",
        xsm: "clamp(0.8rem, 0.9em, 1.2rem)",
        lsm: "clamp(0.8rem, 0.7em, 1rem)",
        xxsm: "clamp(0.3rem, 0.7em, 0.6rem)",
      }
    },
  },
  plugins: [],
}

