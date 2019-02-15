```
懒加载-按需加载
先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。
加快了应用的初始加载速度，减轻了它的总体体积

比如：
当用户点击按钮的时候用 console 打印一些文字。但是会等到第一次交互的时候再加载那个代码块（print.js）

许多框架和类库对于如何用它们自己的方式来实现（懒加载）都有自己的建议。这里有一些例子：

React: Code Splitting and Lazy Loading
Vue: Lazy Load in Vue using Webpack's code splitting
AngularJS: AngularJS + Webpack = lazyLoad by @var_bincom
```