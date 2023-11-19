import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#e2126d",
          dark: "#a00d6f",
        },
        secondary: {
          light: "#efe2e0",
          main: "#f97d65",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
