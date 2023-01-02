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
  variants:{
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  }
};
