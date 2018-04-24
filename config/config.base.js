const path = require('path');
const config = require('./config');
const loaders = require('./loaders');

const resolve = (dir) => {
	return path.join(__dirname, '..', dir);
};

module.exports = {
	// split to multiple entry points (src and vendor)
	entry: {
		app: '../src/index.js'
	},
	context: resolve('src'),
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.json'],
		modules: [
			// resolve('src'),
			resolve('node_modules')
		],
		alias: {
			// 'vue$': 'vue/dist/vue.common.js',
			'src': resolve('src')
			// 'assets': resolve('src/assets'),
			// 'components': resolve('src/components')
		}
	},
	module: loaders
};
