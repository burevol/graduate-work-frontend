const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
})],
};