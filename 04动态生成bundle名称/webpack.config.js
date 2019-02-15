const path = require('path');

module.exports = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js'
  },
  output: {
    // [name]指entry的key值
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 但是如果更改了入口起点的名称，甚至添加了一个新的名称，index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题
};