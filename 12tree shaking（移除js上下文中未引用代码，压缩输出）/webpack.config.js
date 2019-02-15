const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // mode:'development',
  optimization:{
    //使用一些出口（接口？）
    // usedExports:true
  },
  //生产环境也会执行tree shaking
  mode:'production'
};