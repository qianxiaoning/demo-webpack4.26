// 全局css
import './index.less';
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
var a = new Map();
console.log(a);
var a1 = Object.assign([1],[1,2]);

let state=1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}
new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
     console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
    return val;
});
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
