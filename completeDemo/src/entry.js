// 全局css，css用CommonJS方法引入
require('./index.less');

// 引入当前页面需要libs
import jquery from 'jquery';
import _ from 'lodash';
// 引入图片
import littlePic from '@/images/littlePic.png';
import bigPic from '@/images/bigPic.png';

const pDom = document.createElement('p');
pDom.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.querySelector('#app').appendChild(pDom);

console.log(littlePic);
console.log(bigPic);
function imgDomFun(imgSrc) {
    const imgDom = document.createElement('img');
    imgDom.src = imgSrc;
    return imgDom;
}
document.querySelector('#app').appendChild(imgDomFun(littlePic));
document.querySelector('#app').appendChild(imgDomFun(bigPic));
const div = document.createElement('div');
div.classList.add('cssImg');
div.innerHTML = 'cssImg';
document.querySelector('#app').appendChild(div);

/* eslint-disable */
// 测试@babel/polyfill效果
// [1, 2, 3].map((n) => n + 1);
// var a = new Promise();
/* eslint-enable */
