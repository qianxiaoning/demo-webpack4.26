```
代码分离
此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。
代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

入口起点：使用 entry 配置手动地分离代码。//多入口，感觉应用于多页面

防止重复：使用 SplitChunksPlugin 去重和分离 chunk。//多入口，感觉应用于多页面。或者把minChunks设为1

动态导入：通过模块的内联函数调用来分离代码。//单入口，应用于单页面代码分离

动态代码拆分时，webpack 提供了两个类似的技术
第一种，也是优先选择的方式是 import() 语法
import 静态加载资源
import() 动态加载资源

第二种，则是使用 webpack 特定的 require.ensure

第一种：
import() 调用会在内部用到 promises
在旧有版本浏览器中使用 import()，得使用 一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。

webpack4.6起支持Prefetching/Preloading 模块
prefetch 在一些导航中需要的资源
preload 在当前导航中需要的资源

prefetch:
LoginButton.js
import(/* webpackPrefetch: true */ 'LoginModal');
会导致
<link rel="prefetch" href="login-modal-chunk.js">插入页面

preload：
使用场景
需要一个大库（ChartingLibrary）中的一个组件（ChartComponent）
import(/* webpackPreload: true */ 'ChartingLibrary');
编译成
<link rel="preload">

区别：
1.preload和主线并行，prefetch在主线后执行

bundle 分析工具
webpack-chart: webpack 数据交互饼图。
webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
webpack-bundle-analyzer: 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。
webpack bundle optimize helper:分析 bundle，会给你关于减小你的bundle大小的建议。

懒加载-如何更高效的分离代码
```