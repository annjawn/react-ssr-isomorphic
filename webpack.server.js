//THIS file configures webpack to run babel on the server
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  //inform webbpack that we are building bundle for NodeJS,
  //rather than browser
  target: 'node',

  //tell webpack the root file for our server application
  //entry file
  entry: './src/index.js',

  //Tell webpack where to put the output file
  //that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
