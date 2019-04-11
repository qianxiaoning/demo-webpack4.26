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
// 实践css中背景图片
const div = document.createElement('div');
div.classList.add('cssImg');
div.innerHTML = 'cssImg';
document.querySelector('#app').appendChild(div);

/* eslint-disable */
// 测试@babel/polyfill效果
[1, 2, 3].map((n) => n + 1);
var a = Object.assign([1],[1,2]);
/* eslint-enable */

// 国际化
import en from './locales/en';
import cn from './locales/cn';

let local = cn;
const $t = s => local[s];

const cnBtn = document.createElement('span');
cnBtn.innerHTML = '中文';
document.querySelector('#app').appendChild(cnBtn);
const enBtn = document.createElement('span');
enBtn.innerHTML = 'english';
document.querySelector('#app').appendChild(enBtn);
const p = document.createElement('p');
p.innerHTML = $t('hello');
document.querySelector('#app').appendChild(p);

cnBtn.onclick = () => {
    local = cn;
    p.innerHTML = $t('hello');
};
enBtn.onclick = () => {
    local = en;
    p.innerHTML = $t('hello');
};
