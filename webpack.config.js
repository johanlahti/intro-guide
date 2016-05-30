const webpack = require('webpack');

module.exports = {
	entry: './js/index.jsx',
	output: {
		path: './dist/js',
		filename: 'bundle.js',
		library: "introGuide",
        libraryTarget: "umd"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|dist)/g,
			loader: 'babel'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}