const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// 压缩css，另外需要安装UglifyJsPlugin
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode:'production',
  devtool:'source-map',
  plugins:[
    new CleanWebpackPlugin(
      ['dist'],
      {
          root:path.resolve(__dirname,'../'),
          verbose:true
      }
    ),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // 开启缓存
        cache: true,
        // 压缩需要
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },  
});