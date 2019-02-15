```
通过在package.json 中设 
"sideEffects"为false
告诉所有代码都不包含副作用，可以安全地删除未用到的 export 导出

如果你的代码确实有一些副作用，那么可以改为提供一个数组：
"sideEffects": [
    "./src/some-side-effectful-file.js"
  ]
不删除指定未用到模块

没指定mode时，webpack默认生产模式，执行过tree shaking和UglifyJsPlugin

压缩输出 调用UglifyJsPlugin
指令：
webpack -p
webpack --optimize-minimize

webpack.config.js:
mode: "production"
```