var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: ['./app/frontend/javascripts/main.js'],
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};