const webpackConfig = require('../webpack/webpack.development.config');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['' +
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript'
  ], webpackFinal: async config => {

    /**
     * add main project alias's to storybook webpack configuration.
     */
    config.resolve.alias = { ...config.resolve.alias, ...webpackConfig.resolve.alias };

    return config;
  },
};
