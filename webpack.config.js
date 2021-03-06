const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: {
		main: "./index.js",
		counts: "./counts.js",
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
};
