let webpack = require('webpack');
let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  BUILD: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src'),
  INDEX: path.resolve(__dirname, 'src/index.ejs')
};

const config = {
  entry: PATHS.JS + '/app.jsx',
  output: {
    path: PATHS.BUILD,
    filename: 'bundle.js'
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.JS,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.JS,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React',
      template: PATHS.INDEX
    })
  ]
};

module.exports = config;
