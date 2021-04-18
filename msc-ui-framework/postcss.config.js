module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested')({ bubble: ['screen'] }),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' &&
      require('postcss-clean')({
        format: {
          breaks: {
            afterComment: 1,
          },
        },
      }),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
