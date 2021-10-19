const path = require("path/posix");

module.exports = {
	entry: {
		main: "./src/index.js",
		counts: "./src/counts.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve("dist"),
	},
	mode: "development",
};
