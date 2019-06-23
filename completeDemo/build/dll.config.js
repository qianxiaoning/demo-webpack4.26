const path = require('path');
const webpack = require('webpack');

module.exports={
    mode:'production',
    // 上下文
    context: path.resolve(__dirname, '../'),
    entry:{
        // 先把libs打包一遍
        libs:['jquery', 'lodash', 'core-js', 'regenerator-runtime']
    },
    output:{
        path: path.resolve(__dirname, '../dll'),
        // 提前打包好的libs代码在[name].js中
        filename:'dll.[name].js',
        // 把[name].js中的代码赋给output.library别名，暴露出去，方便其它地方引用
        library:'[name]VarName_[hash:8]'
    },    
    plugins:[        
        new webpack.DllPlugin({
            // 在DllPlugin中name指向output.library别名拿到[name].js第三方库
            name: "[name]VarName_[hash:8]",
            // manifest清单文件生成的路径
            path: path.resolve(__dirname, '../dll/manifest.json'),
            // context 是解析[name].js第三方库的上下文，这个和DllReferencePlugin有关系
            // DllPlugin.context默认为webpack的context，即项目根目录
            context: path.resolve(__dirname, '..')
        })
    ]
}
