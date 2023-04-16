const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name]-[chunkhash:8].js',
		path: path.resolve(__dirname, './dist')
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './public/index.html',
			title: '单页应用示例'
		}),
		new CleanWebpackPlugin()
	]
};
