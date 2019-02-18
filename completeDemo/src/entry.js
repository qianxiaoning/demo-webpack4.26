import jquery from 'jquery';
import _ from 'lodash';
// 引入图片
import littlePic from '@/images/littlePic.png'
import bigPic from '@/images/bigPic.png'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());