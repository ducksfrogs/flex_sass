const path = require('path');

module.exports = {
	entry: './src/js/main.js',

	module: {
		test: /\.(scss)$/,
		use: [
		{
			loader: 'style-loader',
		},
		{
			loader: 'css-loader',
		},
		{
			loader: 'postcss-loader'
		}]
	}
}