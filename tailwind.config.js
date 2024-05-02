/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    keyframes: {
      bounce: {
        "0%, 100% ": {
          transform: "translateX(0) ",
        },
        "50%": {
          transform: "translateX(8px)",
        },
      },
    },
    extend: {
      fontFamily: {
        primary: ["Cormorant Garamond"],
        button: ["Josefin Sans"],
        text: ["Montserrat"],
        text2: ["Lora"],
      },
      colors: {
        primary: "#d3bea5",
        secondary: "#181e22",
        secondary2: "#D2B48C",
        accent: "#936c32",
        twitter: "#1da1f2",
        facebook: "#1877f2",
        instagram: "#c13584",
        tiktok: "#00f2ea",
      },
      minHeight: {
        fscreen: "calc(100dvh - 88px)",
      },
      width: {
        img: "calc(100% - 80px)",
        tbtype: "calc(100% - 350px)",
      },
      backgroundImage: {
        footer: "url('../../public/images/footerbg.jpg') ",
        lp: "url('../../public/images/landingpagebg.jpg') ",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
