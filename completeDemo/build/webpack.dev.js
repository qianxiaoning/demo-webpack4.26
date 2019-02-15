const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

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
  ]
});