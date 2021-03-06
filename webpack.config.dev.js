const path = require("path");

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: [path.resolve(__dirname, "src/index")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [],
  module: {
    rules: [
      { test: /.js$/, exclude: /node_modules/ //, loader: "babel-loader",
      },
      { test: /\.css$/i,
        use: ['style-loader', 'css-loader'] }
    ]
  }
};
