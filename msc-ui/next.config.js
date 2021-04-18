const path = require('path');
// const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);

        return config;
    }
    // i18n: {
    //     locales: ['en', 'fr'],
    //     defaultLocale: 'en'
    // },
    // rewrites: async () => nextI18NextRewrites(localeSubpaths),
    // publicRuntimeConfig: {
    //     localeSubpaths
    // }
};
