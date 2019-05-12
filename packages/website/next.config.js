const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ["@mager1794/app-interface",'react-native-web/dist'],
  webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web/dist'
    }

    return config
  }
});