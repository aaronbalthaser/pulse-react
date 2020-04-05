const webpackConfig = require('../webpack/webpack.development.config');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.resolve.alias = { ...config.resolve.alias, ...webpackConfig.resolve.alias };
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
