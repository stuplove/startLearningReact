module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/build/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude : /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	}
}