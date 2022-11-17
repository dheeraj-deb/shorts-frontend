/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT(
  {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        },
        colors: {
          white: "#ffffff",
          accent: {
            100: "#c2d0f8",
            200: "#9ab1f4",
            300: "#7292f0",
            400: "#537aec",
            500: "#3563e9",
            600: "#305be6",
            700: "#2851e3",
            800: "#2247df",
            900: "#1635d9",
          },
          "primary-neutral": {
            900: "#1D1178",
            800: "#2D1D92",
            700: "#432EB5",
            600: "#5E43D8",
            500: "#7C5CFC",
            400: "#9F84FD",
            300: "#B49DFE",
            200: "#CEBEFE",
            100: "#E7DEFE",
            000: "#ffffff",
          },
          success: {
            900: "#3B6506",
            800: "#4C7A0B",
            700: "#659711",
            600: "#7FB519",
            500: "#9CD323",
            400: "#BCE455",
            300: "#D3F178",
            200: "#E8FAA6",
            100: "#F5FCD2",
          },
          error: {
            900: "#7A0619",
            800: "#930B16",
            700: "#B71112",
            600: "#DB2719",
            500: "#FF4423",
            400: "#FF7F59",
            300: "#FFA37A",
            200: "#FFC8A6",
            100: "#FFE7D3",
          },
          warning: {
            900: "#7A4D0B",
            800: "#936312",
            700: "#B7821D",
            600: "#DBA32A",
            500: "#FFC73A",
            400: "#FFD96B",
            300: "#FFE488",
            200: "#FFEFB0",
            100: "#FFF8D7",
          },
          info: {
            900: "#102E7A",
            800: "#1A4393",
            700: "#2A60B7",
            600: "#3D81DB",
            500: "#54A6FF",
            400: "#7EC2FF",
            300: "#98D3FF",
            200: "#BAE5FF",
            100: "#DCF3FF",
          },
          secondary: {
            900: "#040815",
            800: "#080C19",
            700: "#0D121F",
            600: "#131825",
            500: "#1A202C",
            400: "#596780",
            300: "#90A3BF",
            200: "#C3D4E9",
            100: "#E0E9F4",
          },
          // ...
        },
      },
    },
    plugins: [],
  }
)
