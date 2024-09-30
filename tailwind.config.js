/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        himami: "url('./bg-himami.jpg')",
        contact: "url('./bg-contact.jpg')",
        oprec: "url('./bg-oprec.jpg')",
        logoHimami: "url('../src/assets/logo/logo_himami.png')",
      },
      colors: {
        primary: "#25156E",
        secondary: "#FFD800",
        secondaryHover: "#FFC400",
        secondaryhover: "#FFC400",
        tertiary: "#404764",
      },
    },
  },
  plugins: [],
};
