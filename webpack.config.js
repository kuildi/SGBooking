const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules: 
		[
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: "/node_modules/"
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			route: "/",
			server: {baseDir: ['dist']}
		})
	]
}
