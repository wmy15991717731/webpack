/*
 * @Author: wangmengyuan
 * @Date: 2021-07-13 13:57:11
 * @LastEditTime: 2021-07-13 14:14:45
 * @LastEditors: Please set LastEditors
 * @Description: webpack配置文件
 * @FilePath: \体验\webpack.config.js
 */
// 构建工具基于nodejs平台，模块化采用commonjs
const { resolve } = require('path');
module.exports = {
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径，__dirname代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: [
            // 详细loader配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理，loader是从下往上执行的
                use: [
                    // 创建style标签 将js中的css资源插入到header中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中
                    'css-loader'
                ]
            }
        ]
    },
    // plugins的配置
    // plugins: [
        
    // ],
    mode: 'development',// 开发模式
    // mode: 'production', // 生产模式
}