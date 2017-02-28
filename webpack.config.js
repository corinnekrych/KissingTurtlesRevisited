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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader'
      }


    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kissing Turtles!',
      template: './index.html',
      inject: true
    })
  ],
  devtool: 'inline-source-map'
};