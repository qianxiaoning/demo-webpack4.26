process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 项目名
const PUBLIC_PATH = 'xxx';

module.exports = merge(common, {
  mode:'development',
  devtool: 'eval-source-map',// cheap-eval-source-map cheap-module-eval-source-map  
  devServer:{
    // 默认为项目根目录，无特殊需求不需设contentBase
    contentBase: false,
    open: true, // 启动后打开浏览器
    hot: true, // 热加载
    // publicPath: `/${PUBLIC_PATH}/`,
    // 代理
    proxy: {
      '/xxx': {
          changeOrigin: true,   
          target: 'https://xxx.com/',  
          secure: true // https专用
      }
    }
  },
  module: {
    rules: [
      {
        test:/\.less$/,
        use: [
            {
                loader: 'style-loader' // 样式热替换
            },
            {
                loader: 'css-loader' // 引入css
            },
            {
                loader: 'less-loader', // compiles Less to CSS
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
    // 热替换
    new webpack.HotModuleReplacementPlugin(),
    // html模板
    new HtmlWebpackPlugin({
        // 设置生成的index.html的title，设置template模板后会被覆盖
        title: 'webpack demo',
        // html生成子目录，默认为output.path也就是dist/下
        filename:'index.html',
        template: 'index.ejs',
        favicon: 'fav.ico',
        // 注入方式。true,'body'使js资源放入body底部。'head'使js资源放入body头部
        inject: true
    }),
  ]
});