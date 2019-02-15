const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理/dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js'
  },
  // 增加插件
  plugins:[
    new CleanWebpackPlugin(['dist']),
    // 会生成新的index.html把老的index.html替换掉
    new HtmlWebpackPlugin({
      // 设置生成的index.html的title
      title:'Output Management'
    })
  ],
  output: {
    // [name]指entry的key值
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 但是如果更改了入口起点的名称，甚至添加了一个新的名称，index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题
};