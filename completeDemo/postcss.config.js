module.exports = {
    // 解析器
    // sugarss解析基于缩进的css写法
    // parser: 'sugarss',
    plugins: {
        // 解决path路径问题，得在第一个使用
        'postcss-import': {},
        // 对最新css语法兼容，包含autoprefixer
        'postcss-preset-env': {},
        // 对css压缩
        'cssnano': {}
    }
}