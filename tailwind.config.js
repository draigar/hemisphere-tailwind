module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0fff1',
          100: '#b3ffda',
          200: '#84fec3',
          300: '#56feab',
          400: '#32fe94',
          500: '#24e57a',
          600: '#18b25f',
          700: '#0c8043',
          800: '#004d28',
          900: '#001b0b',
        },
        brand: {
          primary: '#004F29',
          darker: '#002E18'
        },
        neutral: {
          1: '#646464',
          2: '#969696',
          3: '#C8C8C8',
          4: '#EAECE7',
          'hover': '#423f3f'
        },
        black: {
          1: '#000000',
          2: '#001209'
        }
      },
      height: {
        '6/6': '90%',
        'screen-90': '90vh',
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
        '700px': '700px',
        '800px': '800px',
      },
      width: {
        '30': '30%',
        '45': '45%',
        '48': '48%',
        '65': '65%',
      },
      spacing: {
        '10px': '10px'
      }
    },
  },
  plugins: [],
}