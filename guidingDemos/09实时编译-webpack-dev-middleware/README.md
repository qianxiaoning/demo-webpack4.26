```
webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它。
该例是webpack-dev-middleware 配合 express server 的示例

运行服务
"server": "node server.js"

使用实时编译时，要关闭编辑器的安全写入功能，如：
Sublime Text 3 - 在用户首选项(user preferences)中添加 atomic_save: "false"。
IntelliJ - 在首选项(preferences)中使用搜索，查找到 "safe write" 并且禁用它。
Vim - 在设置(settings)中增加 :set backupcopy=yes。
WebStorm - 在 Preferences > Appearance & Behavior > System Settings 中取消选中 Use "safe write"。

webpack-dev-middleware貌似不能自动刷新浏览器。
```
