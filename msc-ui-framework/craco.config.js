// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
//   css: ['./src/tailwind.css'],
//   // Include any special characters you're using in this regular expression
//   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// });

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
        // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
        require('postcss-preset-env')({ stage: 1 }),
      ],
    },
  },
};
