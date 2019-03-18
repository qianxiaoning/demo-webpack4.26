// 引入index页面
// html-loader : Exports HTML as string
import index from '@/pages/index/index.html';

document.querySelector('#app').innerHTML = index;
// 引入当前页面需要libs
import jquery from 'jquery';
import _ from 'lodash';
// 引入图片
import littlePic from '@/images/littlePic.png';
import bigPic from '@/images/bigPic.png';

const pDom = document.createElement('p');
pDom.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.querySelector('.index').appendChild(pDom);

console.log(littlePic);
console.log(bigPic);
function imgDomFun(imgSrc) {
    const imgDom = document.createElement('img');
    imgDom.src = imgSrc;
    return imgDom;
}
document.querySelector('.index').appendChild(imgDomFun(littlePic));
document.querySelector('.index').appendChild(imgDomFun(bigPic));
