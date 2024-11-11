const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: "./src/index.ts",
  module: {
	rules: [
	  {
		test: /\.ts$/,
		use: "ts-loader",
		exclude: /node_modules/,
	  },
	],
  },
  resolve: {
	extensions: [".ts", ".js"],
  },
  output: {
	filename: "bundle.js",
	path: path.resolve(__dirname, "dist"),
	clean: true,
  },
  plugins: [
	new HtmlWebpackPlugin({
	  template: "./index.html",
	}),
	new Dotenv(),
  ],
  devServer: {
	static: "./dist",
	port: 3000,
	open: true,
  },
};
