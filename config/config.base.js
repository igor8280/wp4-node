const path = require('path');
const config = require('./config');
const loaders = require('./loaders');

const resolve = (dir) => {
	return path.join(__dirname, '..', dir);
};

module.exports = {
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
			resolve('node_modules')
		],
		alias: {
			'src': resolve('src')
		}
	},
	module: loaders
};
