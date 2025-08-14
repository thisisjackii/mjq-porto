/** @type {import('tailwindcss').Config} */
const config = {


  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },


  plugins: [require('@tailwindcss/typography')],
};

export default config;