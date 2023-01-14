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
  plugins: [],
  theme: {
    extend:{
      fontFamily:{
        'league-spartan': ['League Spartan', 'sans-serif'],
      }
    }
  }
};

