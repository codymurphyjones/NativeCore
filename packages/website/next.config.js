const withTM = require('next-transpile-modules');
//const withTypescript = require('@zeit/next-typescript')
const modulesToTranspile = require('./transpile.js');

    
module.exports = withTM({
	transpileModules: modulesToTranspile,
	webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web'
    }
	
	config.module.rules.push({
		test: /\.(jpe?g|png|gif|svg)$/i,
		use: [
			'url-loader?limit=10000',
			'img-loader'
		]
	});

    return config
  }
})
