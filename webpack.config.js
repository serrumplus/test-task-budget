const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	devtool: 'source-map',
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

	entry: {
		custom: ['./app'],		
	},

	output: {
		path: path.resolve(__dirname, 'public'),
    filename: './script/[name].bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: ['file-loader'],
			},
			{
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
		],
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	plugins: [
		process.env.NODE_ENV === 'development' && new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title: 'The-movies-DB',
			template: './index.html',
    }),

	].filter(Boolean),

	devServer: {  
    port: 9005,
    hot: true,
		compress: true,
		historyApiFallback: true
  }
  
};