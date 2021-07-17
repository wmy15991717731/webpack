/*
 * @Author: wangmengyuan
 * @Date: 2021-07-13 13:40:09
 * @LastEditTime: 2021-07-13 13:55:20
 * @LastEditors: Please set LastEditors
 * @Description: webpack入口起点文件
 * @FilePath: \体验\src\index.js
 */
/**
 *运行指令
 开发环境：webpack ./src/index.js -o ./build/build.js --mode=development
 webpack以index.js为入口文件，打包后文件放在build.js，打包环境是开发环境，生产环境production，生产环境比开发环境多一个压缩js

 可以处理js json 不能处理css img等资源，为什么不能？？？
 */
import data from './data.json';
import './style.css';

console.log(data);

function add(x, y) {
    return x + y;
}

console.log(add(1, 2));