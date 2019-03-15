module.exports = {
    // 脚本的运行环境
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    // 脚本在执行期间访问的额外的全局变量
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // 解析器选项
    "parserOptions": {
        // 启用 ES6 语法支持
        "ecmaVersion": 2018,
        // "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        "sourceType": "module",
        // 想使用的额外的语言特性
        "ecmaFeatures": {
            // 启用 JSX
            "jsx": true
        }
    },
    // 使用第三方插件。使用之前，npm 安装它
    // 'plugins': ["eslint-plugin-plugin2"],
    // 启用的规则及其各自的错误级别
    "rules": {
    }
};