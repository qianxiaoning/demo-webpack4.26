module.exports = function (api) {
    // 开启缓存
    api.cache(true);

    // 采用的编译规范    
    const presets = [
        [
            '@babel/preset-env',
            {
                // // 指定环境，可以是与browserslist兼容
                // "targets": "> 0.25%, not dead",
                // "include": '',
                // "exclude": '',
                // // 根据环境支持度，加载所需部分@babel/polyfill            
                "useBuiltIns": "usage",
                // // 在入口文件，import "@babel/polyfill";引入polyfill     
                // "useBuiltIns": "entry",
                // // 1.在webpack.config.js entry数组中的头部添加"@babel/polyfill"
                // // 2.或在需要的页面引入需要的polyfill部分，如
                // // import 'core-js/modules/es7.string.pad-start';
                // // import 'core-js/modules/es7.string.pad-end';
                // // import 'core-js/modules/web.timers';
                // // import 'core-js/modules/web.immediate';
                // // import 'core-js/modules/web.dom.iterable';
                // "useBuiltIns": false,
                // 使用useBuiltIns选项时需要指定corejs版本，因为未来默认版本会变化，所以得指明
                "corejs": 3
            }
        ]
    ];
    // 类似polyfill插件，但是不支持新的API的实例的方法，开发第三方库时用
    // const plugins = ['@babel/plugin-transform-runtime'];    
    const plugins = [];

    return {
        presets,
        plugins
    };
}