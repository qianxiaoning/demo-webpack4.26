const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理/dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// webpack-dev-server 提供一个简单的web服务器，能实时加载
// 开启webpack-dev-server的HMR插件
const webpack = require('webpack');

module.exports = {
  entry: {
    // 开启热替换后似乎只要有一个入口文件就行了，print.js正被index.js引用
    // print: './src/print.js',
    app:'./src/index.js'
  },
  // 追踪到错误和警告在源代码中的原始位置
  // 例子使用inline-source-map 选项，为了说明，生成环境不用inline-source-map
  // 不用提示报错在app.bundle.js:1，用了提示报错在print.js:3
  devtool:'inline-source-map',
  // 设置dev server开发者服务器
  devServer:{
    // 告诉服务器在哪找文件，默认localhost:8080建立服务，将dist目录作为访问目录
    contentBase:'./dist',
    // 开启热替换
    hot:true
  },
  // 增加插件
  plugins:[
    new CleanWebpackPlugin(['dist']),
    // 会生成新的index.html把老的index.html替换掉
    new HtmlWebpackPlugin({
      // 设置生成的index.html的title
      title:'Output Management'
    }),
    // webpack内置的HMR插件
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // [name]指entry的key值
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 但是如果更改了入口起点的名称，甚至添加了一个新的名称，index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题
};