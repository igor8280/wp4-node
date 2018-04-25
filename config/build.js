// https://github.com/shelljs/shelljs
process.env.NODE_ENV = 'production';

const ora = require('ora');
const path = require('path');
const chalk = require('chalk');
const shell = require('shelljs');
const webpack = require('webpack');
const config = require('./config');
const webpackConfig = require('./config.prod');

const spinner = ora('building for production...');
spinner.start();

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
console.log('asset path', assetsPath);
shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;
shell.cp('-R', 'static/*', assetsPath);
shell.config.silent = false;

webpack(webpackConfig, function (err, stats) {
	spinner.stop();
	if (err) throw err;
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n\n');

	console.log(chalk.cyan('  Build complete.\n'));
	console.log(chalk.yellow(
		'  Tip: built files are meant to be served over an HTTP server.\n' +
		'  Opening index.html over file:// won\'t work.\n'
	))
});
