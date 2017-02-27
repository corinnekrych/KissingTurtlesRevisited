# Tutorial

### Step 1: Empty app with webpack
#### Goal
Set up an empty frontend app with Webpack.

In this first step, we setup an empty node project which load js file and html.
#### Do it yourself
* run the commands:
```
npm init
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
```
The first command will prompt you for details to be part of package.json
It will create the initial package.json file.
Install webpack as dev dependencies.
Install [webpack-dev-server]() to enable dev watch mode.
* create `./webpack.config.js` with content:
```
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
```
* create `./src/app.js` with content:
```
var app = require('./players.js');
console.log(greet("Corinne"));
```
* create `./src/app.js` with content:
```
function greet(name) {
  return "Hello " + name;
}
module.exports = {
  greet: greet
};
```
* create `./index.html`
* update `./package.json` to add:
```
  "scripts": {
     "build": "rm -rf build && webpack --config webpack.config.js",
     "start": "webpack-dev-server"
  }
```
* run:
```
npm run start
```
* go to [http://localhost:8080/](http://localhost:8080/)

#### Explore deeper
* In webpack.config.js, add `devtool: 'inline-source-map'` to have source map for debug.
* with webpack-merge plugin, make several version of webpack config: prod, dev.

### Step 2: ReactJS and Webpack
* run command to install reactJS:
```
npm i react --save
npm i react-dom --save
```
* run command to install babel:
we need a transpiler for interpreting our ES6 code. This is where Babel comes in.
```
npm install babel-loader --save-dev
npm install babel-core --save-dev
npm install babel-preset-es2015 --save-dev
npm install babel-preset-react --save-dev
```
* rename `players.js`` to `players.jsx``:
```
import React from 'react';
import ReactDom from 'react-dom';

const players = [{name: "Corinne"}, {name: "Emil"}]
class Players extends React.Component {
  render() {
    return <div>
      <h3>Hello {players[0].name}</h3>
    </div>
  }
}
ReactDom.render(<Players/>, document.getElementById('content'));
```
* update `app.js` to include dependant jsx:
```
import React from 'react';
import ReactDom from 'react-dom';
import Players from './components/Players'
```
* update `webpack.config.js` to add `module` key to transpile `jsx`:
```
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],

          }
        },
        exclude: /node_modules/
      }
    ]
  },

```

