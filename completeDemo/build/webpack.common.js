const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
// console.log('---------');
// console.log(devMode);
// 静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports={
    // context目录，配置entry points and loaders。文档建议配置，使我的配置独立于CWD（当前目录）。
    context: path.resolve(__dirname, '../'),
    entry:{
        // entry默认'./src'，entry只能设置在context目录下的./，context目录默认为项目根目录。所以此处'./'指项目根目录下
        app:'./src/entry.js'
    },    
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader']
            // },
            // {
            //     test:/\.html$/,
            //     use:['html-loader']
            // },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
                // options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                //     formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                // }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // 也可直接在此配置babel配置
                    // options: {
                    //     presets: ['@babel/preset-env'],
                    //     plugins: []
                    //     // 指定目录缓存Babel加载结果，提高速度
                    //     // cacheDirectory: true
                    // }
                }
            },                        
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // limit以下使用url-loader转为base64，以上使用指定loader，默认file-loader处理图片图片。单位：字节
                    limit: 10000,
                    // [ext]文件扩展名
                    name:devMode ? "[name].[ext]" : "static/images/[name].[hash:8].[ext]"                    
                }
            }            
        ]
    },
    resolve: {
        // extensions: ['.js', '.html', '.css'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname,'../src')
        }
    },
    plugins:[             
        //复制静态文件
		new copyWebpackPlugin([
			{
                from: path.resolve(__dirname,"../static"),
                // output.path中的位置
                to: 'static',
                // 忽略.xxx等文件
                ignore: ['.*']
			},         
        ]),
        // DllReferencePlugin引用打包好的manifest清单来进行第二次打包
        new webpack.DllReferencePlugin({
            // 指导Webpack匹配manifest.json中库的路径，和DllPlugin中有关系
            context: path.resolve(__dirname, '../dll'),
            // manifest相对于此文件的位置
            manifest: path.resolve(__dirname, '../dll/manifest.json')
        })
    ],
    output:{
        // 由于dev模式，我把所有资源css,js,png统一放在根目录。prod模式，css在static中，所以要在公共资源前加公共路径'/'
        publicPath: devMode ? '' : '/',
        // vue-cli里的[chunkhash]？
        filename: devMode ? '[name].js' : 'static/js/[name].[hash:8].js',
        // filename:'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },    
}
    
