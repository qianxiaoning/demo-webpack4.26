```
HMR 修改样式表
借助于 style-loader 的帮助，实现CSS 的模块热替换。
当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签。

安装两个 loader 
style-loader css-loader

各框架的HMR loader
React Hot Loader：实时调整 react 组件。
Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
Elm Hot Loader：支持用于 Elm 程序语言的 HMR。
Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。
Angular HMR：No loader necessary! A simple change to your main NgModule file is all that's required to have full control over the HMR APIs.没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。
```
