const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode:'development',
  devtool: 'inline-source-map',  
  devServer:{
    contentBase:'./dist',
    // host:'localhost',
    // port:'8080',
    // open:true,//自动拉起浏览器
    hot:true,//热加载
    //hotOnly:true
  },
  plugins:[
    // 热替换
    new webpack.HotModuleReplacementPlugin(),
    // html模板
    new HtmlWebpackPlugin({
      // 设置生成的index.html的title，设置template模板后会被覆盖
      title: 'webpack demo',
      // html生成子目录，默认为output.path也就是dist/下
      filename:'index.html',
      template: 'index.ejs',
      // favicon: path.resolve(__dirname, '../favicon.ico'),
      // 注入方式。true,'body'使js资源放入body底部。'head'使js资源放入body头部
      inject: true
    })
  ]
});