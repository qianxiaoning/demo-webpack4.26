import _ from 'lodash';
import printMe from './print.js'
import './style.css'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML='Click me and check the console!';
  btn.onclick=printMe;
  element.appendChild(btn);
  return element;
}
// 如果你继续点击示例页面上的按钮，你会发现控制台仍在打印这旧的 printMe 功能。
// 这是因为按钮的 onclick 事件仍然绑定在旧的 printMe 函数上。
// document.body.appendChild(component());

//为了让它与 HMR 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

// 当 print.js 内部发生变更时，告诉 webpack 接受更新的模块
// console.log(module);
// console.log(module.hot);
if(module.hot){
  module.hot.accept('./print.js',()=>{
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}