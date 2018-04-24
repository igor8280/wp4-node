const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = {
	rules: [
		{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		},
		{
			test: /\.js$/,
			loader: [
				'babel-loader',
			],
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
				'css-hot-loader',
				MiniCssExtractPlugin.loader,
				'css-loader'
			]
		}
	]
};

module.exports = loaders;
