//THIS file configures webpack to run babel on the server
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');

const config = {
  //inform webbpack that we are building bundle for NodeJS,
  //rather than browser <NOT REQUIRED since this is for client>
  // target: 'node',

  //tell webpack the root file entry
  entry: './src/client/client.js',

  //Tell webpack where to put the output file
  //that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public')
  }
};

module.exports = merge(baseConfig, config);
