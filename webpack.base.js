module.exports = {
  //tell webpack to run Babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,   //run only on javascript files
        loader: 'babel-loader',
        exclude: /node_modules/,  //exclude the node_modules dir
        options: {
          presets: [
            'react',
            'stage-0',
            ['env',{targets: {browsers: ['last 2 versions']}}]
          ]
        }
      }
    ]
  }
}
