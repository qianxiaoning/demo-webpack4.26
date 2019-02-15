const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    index:'./src/index.js'
  },
  // 增加插件
  plugins:[
    new HtmlWebpackPlugin({
      // 设置生成的index.html的title
      title:'title'
    })
  ],
  output: {
    filename:'[name].bundle.js',
    //chunkFilename决定了非入口chunk的名称 
    chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};