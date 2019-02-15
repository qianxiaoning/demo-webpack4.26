```
模块热替换(Hot Module Replacement 或 HMR)
更新模块，无需完全刷新

如果使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。

可以通过命令来修改 webpack-dev-server 的配置：webpack-dev-server --hotOnly

通过 Node.js API:
当使用 webpack dev server 和 Node.js API 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。而是，在创建选项时，将其作为第二个参数传递
new WebpackDevServer(compiler, options)
具体看文档https://www.webpackjs.com/guides/hot-module-replacement/#%E9%80%9A%E8%BF%87-node-js-api
```
