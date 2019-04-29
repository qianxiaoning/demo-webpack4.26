process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// js压缩
const TerserJSPlugin = require("terser-webpack-plugin");
// css压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode:'production',
  devtool:'source-map',
  module:{
    rules:[      
      {
        test: /\.(css|less|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader",
            options: {
              // 为了兼容babel-plugin-import ant
              javascriptEnabled: true
            }
          }
        ]            
      }        
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/css/[name].[hash:8].css",
      //此处也可以根据splitChunkPlugin的chunk名字做对应
      // chunkFilename: devMode ? '[id].css' : '[id].[hash:8].css',
    }),
    new CleanWebpackPlugin(
      // 自动清除output.path下目录
      {
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
      favicon: 'fav.ico',
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
      }
    })  
  ],
  // optimization.splitChunks代码引用去重分离，把公共引用代码抽离到再另一个output.js中
  // 感觉optimization.splitChunks是用在多页面代码去重分离的
  // 单页面所有第三方库已经用了dll配合manifest保证只引入一次了，不用optimization.splitChunks了
  // 如果多页面用了dll还需要用optimization.splitChunks的，如果生成的commonSplit.js文件过大，可以试试import(/* webpackChunkName:"xxx"*/ 'xxx')动态引入xxx库，打包时output会通过chunkFilename动态拆分细化commonSplit.js，减小不必要的加载
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        // 开启缓存
        cache: true,
        // 压缩需要
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({}),      
    ],
    splitChunks:{
      // 使用默认配置
      chunks:'all',
      // 至少有2个entry文件引用重复时分离
      minChunks: 2
      // cacheGroups: {
      //   vendors: {
      //     // test: /[\\/]node_modules[\\/](react|react-dom|antd|echarts-for-react|prop-types|jquery|moment|postal)[\\/]/,
      //     // test: /[\\/]dll[\\/](react|react-dom)[\\/]/,
      //     // test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
      //     test: /[\\/]node_modules[\\/]/,
      //     // name: 'vendors',
      //     priority: -9,
      //     chunks: 'all',
      //   }
      // }
    },
    // 多页面开启single避免每个chunk都写入了webpack初始化，设置single多页面将只写入一个webpack初始化
    runtimeChunk: "single"
  }
});