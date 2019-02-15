const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    index:'./src/index.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'lazy loading'
    })
  ],
  output: {
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};