```
由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置。

为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。

cnpm install --save-dev webpack-merge

我们将 npm start 定义为开发环境脚本，并在其中使用 webpack-dev-server，
将 npm run build 定义为生产环境脚本

生产环境的source map

避免在生产中使用 inline-*** 和 eval-***，因为它们会增加 bundle 大小，并降低整体性能。

指定环境 设置mode
用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。

webpack4默认mode为production，默认压缩js插件为UglifyJSPlugin，
还有一些其他插件BabelMinifyWebpackPlugin，ClosureCompilerPlugin
在optimization.minimizer中使用它们

Minimize CSS
最小化css，参照Minimizing for Production章节

CLI 替代选项
--optimize-minimize 标记将在后台引用 UglifyJSPlugin

--define process.env.NODE_ENV="'production'" 和以上描述的 DefinePlugin 实例相同

webpack -p 将自动地调用上述这些标记，从而调用需要引入的插件

但是我们通常建议只使用配置方式
```