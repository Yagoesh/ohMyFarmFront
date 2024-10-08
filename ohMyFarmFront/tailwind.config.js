/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' if you want to use the OS color scheme
  theme: {
    extend: {
      colors: {
        primary: "#0398AE",
        secondary: "#878787",
        secondarylight: "#ececec",
        customgreen: "#65711D",
        customlightgreen: "#B0D9AE",
        customlightblue: "#C7DDD3",
        customblue: "#5FA2BF",
        buttonPrimary: "#41788F",
        headerBorder: "#94F892",
        gradienteB1: "#A7E4A6",
        gradienteB2: "#BFE8BE",
        gradienteB3: "#7EB8D1",
        footerGrad1: "#78A716",
        footerGrad2: "#50AAf6",
        footerGrad3: "#337031",
      },
      fontFamily: {
        Whisper: ["Whisper", "sans-serif"],
      },
      //shadow
      boxShadow: {
        sup: "1px -14px 32px -18px rgba(0,0,0,0.27);",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/background-home.jpg')",
        "menu-lines": "url('/images/fondo-menu.svg')",
        "search-icon": "url('/images/search-icon.svg')",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein .5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["responsive", "hover", "focus", "group-hover"],
      transition: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "scrollbar-width": "none", // Firefox
          "-ms-overflow-style": "none", // Internet Explorer 10+
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none", // Safari and Chrome
        },
        ".underline-offset": {
          "text-decoration": "underline",
          "text-decoration-thickness": "2px",
          "text-underline-offset": "5px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
