const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/app.js','./src/players.js'],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kissing Turtles!!',
      template: './index.html',
      inject: true
    })
  ],
  devtool: 'inline-source-map'
};