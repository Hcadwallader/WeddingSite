const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/preset-react'],
					plugins: ['@babel/plugin-transform-runtime'],
				},
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[hash].[ext]',
					},
				},
			},
			{
				test: /\.ttf$/,
				use: {
					loader: 'url-loader',
					options: {
						name: './fonts/[name].[ext]',
						limit: 8192,
					},
				},
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: '[name].bundle.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production',
		}),
	],
};
