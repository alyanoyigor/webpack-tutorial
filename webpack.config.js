const path = require("path/posix");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve("dist"),
	},
	mode: "development",
};
