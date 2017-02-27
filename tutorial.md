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