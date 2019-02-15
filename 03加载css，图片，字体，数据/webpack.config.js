const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 添加loader
  module:{
    rules:[
      // 在js中import css，需要style-loader,css-loader
      {
        // test匹配
        test:/\.css$/,
        // use指定loader
        use:['style-loader','css-loader']
      },
      //在js中import图片时，file-loader，可以将图片混合到 CSS 中
      // 使用 css-loader 时，CSS 中的 url('./my-image.png') 会使用类似的过程去处理。loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为输出目录中图像的最终路径。html-loader 以相同的方式处理 <img src="./my-image.png" />

      //使用image-webpack-loader 和 url-loader，压缩和优化你的图像。
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      },
      // 加载字体
      // file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 加载数据
      //  JSON（默认），CSV、TSV 和 XML
      // 导入 CSV、TSV 和 XML，使用 csv-loader 和 xml-loader
      // 会转化为json
      {
        test:/\.(csv|tsv)$/,
        use:['csv-loader']
      },
      {
        test:/\.xml$/,
        use:['xml-loader']
      },
    ]
  }
};