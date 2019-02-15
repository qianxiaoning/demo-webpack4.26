// const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode:'production',
  devtool:'source-map',
  // plugins: [
    // NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量
    // 无法在构建脚本 webpack.config.js 中，将 process.env.NODE_ENV 设置为 "production"
    // 例如 process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js' 这样的条件语句，在 webpack 配置文件中，无法按照预期运行。
    // webpack3中用webpack.DefinePlugin给'process.env.NODE_ENV'赋值
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV':JSON.stringify('production')
    // })

    // 从webpack4开始设置mode会自动给'process.env.NODE_ENV'赋值，不需要使用webpack.DefinePlugin插件了
  // ]
});