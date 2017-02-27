const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: __dirname + '/build',
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    enforceExtension: false,
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        },
        exclude: /node_modules/
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kissing Turtles!',
      template: './index.html',
      inject: true
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  devtool: 'inline-source-map'
};