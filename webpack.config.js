'use strict';

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		publicPath: '/js/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
		]
	}
};
