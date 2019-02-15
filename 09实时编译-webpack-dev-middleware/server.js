const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告诉express用webpack-dev-middleware和webpack.config.js
// 基础配置
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

// 开启服务器在3000端口
app.listen(3000,()=>{
    console.log('Example app listening on port 3000!\n');
});