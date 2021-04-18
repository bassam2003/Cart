module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D3AA9',
          'variant-2': '#1C58EE',
          'variant-3': '#B3C7F9',
          'variant-4': '#F1F5FE',
          'accent-1': '#186DF5',
        },
        monochromes: {
          DEFAULT: '#212121',
          grey: '#f2f2f2',
        },
        success: {
          DEFAULT: '#0E754A',
          'variant-2': '#24E594',
          'variant-3': '#B6F6DB',
          'variant-4': '#F1FDF8',
          'accent-1': '#44DE9E',
        },
        warning: {
          DEFAULT: '#EF8A00',
          'variant-2': '#FF980A',
          'variant-3': '#FFDDAD',
          'variant-4': '#FFF9F0',
          'accent-1': '#EF5600',
        },
        error: {
          DEFAULT: '#CC2500',
          'variant-2': '#FF370A',
          'variant-3': '#FFBCAD',
          'variant-4': '#FFF3F0',
          'accent-1': '#EF5600',
        },
      },
      spacing: {
        '2/3': '66.666667%',
        '5/6': '83.333333%',
      },
      opacity: {
        16: '.16',
        12: '.12',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      gradientColorStops: ['active', 'group-hover'],
      //   opacity: ["disabled"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
