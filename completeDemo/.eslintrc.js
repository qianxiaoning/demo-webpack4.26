module.exports = {
    // 不再向上找
    // "root": true,
    // 脚本的运行环境
    "env": {
        "es6": true,
        "browser": true
        // "node": true        
    },
    // 指定eslint规范
    "extends": "airbnb-base",
    // 脚本在执行期间访问的额外的全局变量
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // 指定编辑器
    // "parser": 'babel-eslint',
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
    // 设置 不生效
    // "settings": {
    //     // import规则的忽略
    //     "import/ignore": ["\.html$"]
    // },
    // 使用第三方插件。使用之前，npm 安装它
    // 'plugins': ["eslint-plugin-plugin2"],
    // 额外的规则或覆盖默认的规则
    "rules": {
        //允许windows开发环境
        "linebreak-style": [0 ,"error", "windows"],
        // 去除Unable to resolve path to module '@/pages/index/index.html'  import/no-unresolved此种错误 大概是由于@别名
        "import/no-unresolved": 0,
        // 临时解除import置顶
        "import/first": 0,
        // 临时解除defined未用
        "no-unused-vars": 0,
        // 缩进改为4空格，默认2空格
        "indent": [0, 2]
    }    
};