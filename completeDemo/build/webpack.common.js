const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

// 静态资源输出
// const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports={
    // context目录，配置entry points and loaders。文档建议配置，使我的配置独立于CWD（当前工作目录）。
    // context: path.resolve(__dirname, '../'),
    entry:{
        // entry默认'./src'，entry只能设置在context目录下的./，context目录默认为项目根目录。所以此处'./'指项目根目录下
        app:'./src/script/app.js'
    },    
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                // test: /\.m?js$/,
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            },            
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    // [ext]文件扩展名
                    name:devMode?"img/[name].[ext]":"img/[name].[hash].[ext]"                    
                }
            },
            {
                test: /\.(css|less|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {                            
                            //避免css的图片路径和index的图片路径起始不同错误
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
                // 官网此处为未明白
                // https://webpack.js.org/plugins/mini-css-extract-plugin/#advanced-configuration-example
                // use: [
                //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                //     'css-loader',
                //     'postcss-loader',
                //     'sass-loader',
                // ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.html', '.css'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname,'../src')
        }
    },
    plugins:[        
        // html模板
        new HtmlWebpackPlugin({
            // 设置生成的index.html的title
            title:'ngJs dev',
            template: 'src/index.html',
            // favicon: path.join(__dirname, '../favicon.ico'),
        }),        
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode?"css/[name].css":"css/[name].[hash].css",
            //此处也可以根据splitChunkPlugin的chunk名字做对应
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        // DllReferencePlugin引用打包好的manifest清单来进行第二次打包
        new webpack.DllReferencePlugin({
            // 指导Webpack匹配manifest.json中库的路径，和DllPlugin中一致
            // 即为默认的项目根目录
            context: path.resolve(__dirname, '..'),
            // manifest相对于此文件的位置
            manifest: path.resolve(__dirname, '../dll/manifest.json')
        }),

        //复制静态文件
		// new copyWebpackPlugin([
		// 	{
		// 		from: path.resolve(__dirname,"./view"),
		// 		to: './view'
		// 	},         
		// ]),
    ],
    output:{
        //图片，js，cssLink等静态资源必须加publicPath，因为打包和开发目录构造不同，开发指定'/'为根目录，生产指定'./'为当前目录（一般为index.html指定），此处以绝对路径指向。css背景图片单独指定publicPath
        publicPath:devMode?'/':'./',
        // vue-cli里的[chunkhash]？
        filename:devMode?'js/[name].js':'js/[name].[hash].js',
        // filename:'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist'),
        // chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    // optimization.splitChunks代码引用去重分离，把公共引用代码抽离到再另一个output.js中
    // 感觉optimization.splitChunks是用在多页面代码去重分离的
    // 单页面所有第三方库已经用了dll配合manifest保证只引入一次了，不用optimization.splitChunks了
    // 如果多页面用了dll还需要用optimization.splitChunks的，如果生成的commonSplit.js文件过大，可以试试import(/* webpackChunkName:"xxx"*/ 'xxx')动态引入xxx库，打包时output会通过chunkFilename动态拆分细化commonSplit.js，减小不必要的加载
    // optimization:{
    //     //使用一些出口（接口？）
    //     // usedExports:true,
    //     splitChunks:{
    //         // chunks需要处理的代码块
    //         chunks:'all',
    //         // 至少有2个entry文件引用重复时分离，单entry页面是不能公共提取分离的，另外单entry是不会import加载重复的？
    //         minChunks:2,
    //         name:'commonSplit'
    //     }
    // }
}
    
