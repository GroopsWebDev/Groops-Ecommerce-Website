/** @type {import('tailwindcss').Config} */
/** 
Use * to match anything except slashes and hidden files
Use ** to match zero or more directories
Use comma separate values between {} to match against a list of options
*/
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,svg,png}", 
    "./public/**/*.{svg,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-image-svg': "url('/public/assets/welcome-image.svg')",
      },
      spacing:{

      }
    },
  },
  plugins: [],
};
