const customColors = {
  // FIX THE FUCKING COLORS
  "bg-color": "#f3f3f3",
  primary: { DEFAULT: "#0D6EFD", 500: "hsl(215, 80%, 33%)" },
  "primary-150": "hsl(215, 80%, 20%)",

  "primary-50": "hsl(190, 90%, 40%)",

  "primary-100": "hsl(190, 90%, 50%)",
  "primary-200": "hsl(190, 100%, 80%)",
  "primary-300": "hsl(190, 100%, 90%)",

  "primary-trans": "hsl(215, 80%, 60%, 100%)",
  "primary-0": "hsl(215, 80%, 60%, 15%)",
  secondary: "hsl(358, 83%, 56%)",

  dark: {
    DEFAULT: "hsl(0, 0%, 8%)",
    50: "hsl(0, 0%, 8%, 60%)",

    100: "hsl(0, 15%, 24%)",

    400: "#686868",

    transparent: "hsl(0, 0%, 8%, 0.5)",
  },
  white: {
    DEFAULT: "hsl(0, 0%, 100%)",
    20: "hsl(0, 0%, 99%)",

    50: "hsl(0, 0%, 95%)",
    100: "hsl(0, 0%, 100%, 60%)",
  },
  "white-lighter-trans": "hsl(0, 0%, 100%, 30%)",
  blue: {
    DEFAULT: "#0077b6",

    100: "#00b4d8",
    150: "#90e0ef",
    200: "#29C5F6",
    250: "#29C5F6",
    300: "#29C5F6",
  },
  green: "hsl(92, 50%, 54%)",
  gray: {
    DEFAULT: "hsl(0, 0%, 85%)",
    100: "#fafafa",
    200: "#a1a1aa",
    250: "#5a5a5a",
    300: "#f6f6f6",
    400: "#eee",
    500: "grey",
    550: "#f8f9fc",
    600: "#f4f4fc",
    bord: "#dfdfdf",
    darker: "hsl(0, 0%, 50%)",
  },
  grayBg: "#f0f0f0",
  transparent: "transparent",
  blog: {
    DEFAULT: "rgb(241, 241, 241)",
  },
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      zeroToXl: { max: "1280px" },
      xs: { min: "350px" },
      sm: { min: "640px" },
      "max-sm": {
        max: "640px",
      },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px" },
      "max-md": {
        max: "768px",
      },
      smToLg: { min: "640px", max: "1024px" },
      lg: { min: "1024px" },
      "max-lg": { max: "1024px" },
      smToXl: { min: "640px", max: "1280px" },

      xl: { min: "1280px" },
      "max-xl": { max: "1280px" },
      "2xl": { min: "1536px" },
      "max-2xl": { max: "1536px" },

      "max-3xl": {
        max: "1800px",
      },
      "3xl": { min: "1800px" },
    },
    colors: customColors,
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "min(100% - 2rem, 1300px);",
        },
      });
    },
  ],
};
