const HtmlWebpackPlugin = require('html-webpack-plugin');
var LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const path = require('path');

options = {
  '*.css': 'text/css',
  '*.js': 'text/javascript',
  '*.png': 'image/png',
  '*.jpg': 'image/jpeg',
  '*.jpeg': 'image/jpeg',
  '*.gif': 'image/gif',
  '*.webp': 'image/webp',
  '*.bmp': 'image/bmp',
};

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
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: path.join(__dirname, './dist/index.html'),
        hash: false,
        inject: 'body',
        showErrors: false,
        template: path.join(__dirname, "./index.html")
      }),
    new LinkTypePlugin(options),
  ],
};