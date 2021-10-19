const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
		counts: "./src/counts.js",
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve("dist"),
	},
	mode: "development",
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
