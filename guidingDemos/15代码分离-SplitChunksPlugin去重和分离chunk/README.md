```
代码分离
此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。
代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

入口起点：使用 entry 配置手动地分离代码。

防止重复：使用 SplitChunksPlugin 去重和分离 chunk。

动态导入：通过模块的内联函数调用来分离代码。

使用 SplitChunksPlugin来移除重复的模块

4.0中已经去除plugins.CommonsChunkPlugin，替换成了optimization.splitChunks
一些社区提供的插件和loader
mini-css-extract-plugin:分割css从主程序
bundle-loader: 用于分离代码和延迟加载生成的 bundle。
promise-loader: 类似于 bundle-loader ，但是使用的是 promises。
```