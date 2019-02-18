const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// 压缩css，另外需要安装UglifyJsPlugin
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode:'production',
  devtool:'source-map',
  plugins:[
    new CleanWebpackPlugin(
      ['dist'],
      {
          root:path.resolve(__dirname,'../'),
          // 排除某项
          // exclude:  ['xxx.js'],
          verbose:true
      }
    ),
    // html模板
    new HtmlWebpackPlugin({
      // 设置生成的index.html的title，设置template模板后会被覆盖
      title: 'webpack demo',
      // html生成子目录，默认为output.path也就是dist/下
      filename:'index.html',
      template: 'index.ejs',
      // favicon: path.resolve(__dirname, '../favicon.ico'),
      // 注入方式。true,'body'使js资源放入body底部。'head'使js资源放入body头部
      inject: true,
      // 使变小
      minify: {
        // 去除html注释
        removeComments: true,
        // 去除html空格
        collapseWhitespace: true,
        // 尽可能去除属性引号
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
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