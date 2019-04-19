const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    index:'./src/index.js',
    another:'./src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new HtmlWebpackPlugin()
  ],
  // webpack3
  // plugins:[    
  //   // CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将之前的示例中重复的 lodash 模块去除：
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name:'common'//指定公共bundle的名称
  //   })
  // ],

  // webpack4
  // 能看见lodash被抽到了一个单独的chunk（vendors~another~index.bundle.js）里去了
  optimization:{
    // optimization.splitChunks去重和分离    
    splitChunks:{
      // 以下和production模式有关
      // 以下为重复代码引用的commonSplit（包含自己的和第三方的库）
      // chunks 需要处理的代码块 initial 表示首次加载的js,async 表示异步加载的js,all 表示所有（包含初次加载和异步）
      chunks:'all',
      // 至少有2个entry文件引用重复时分离
      minChunks: 2,
      name:'commonSplit',
      // cacheGroups缓存组 和dev模式有关
      // 默认模式:所有来自node_modules的模块分配到一个叫vendors的缓存组；所有重复引用至少两次的代码，会被分配到default的缓存组
      // 可以通过optimization.splitChunks.cacheGroups.default: false禁用default缓存组
      // 默认缓存组priority为0，负数越小优先级越高，更高优先级的缓存组可以优先打包所选择的模块
      // cacheGroups: {
      //   default: {
      //       minChunks: 2,
      //       priority: -20,
      //       // 复用已存在的chunk
      //       reuseExistingChunk: true,
      //   },
      //   vendors: {
      //       test: /[\\/]node_modules[\\/]/,
      //       priority: -10
      //   }
      // }
      // 自定义示例
      // cacheGroups:{
      //   libs:{
      //     chunks:'all',
      //     test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
      //     name:'reactLib'
      //   }
      // }
    }
  },
};