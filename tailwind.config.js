/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#151844',
        secondrey: '#E85825'
      },
      fontFamily: {
        AeonikTRIALBold: ['AeonikTRIAL-Bold'],
        AeonikTRIALRegular: ['AeonikTRIAL-Regular'],
        AeonikTRIALBoldItalic: ['AeonikTRIAL-BoldItalic'],
        AeonikTRIALLight: ['AeonikTRIAL-Light']
      }
    },
  },
  plugins: [],
}

