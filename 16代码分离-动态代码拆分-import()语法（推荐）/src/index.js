// 1.静态导入 lodash
// import _ from 'lodash';

// function component() {
//   var element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// }

// 2.现在，我们不再使用静态导入 lodash，而是通过使用动态导入来分离一个 chunk：
// function getComponent(){
//   return import(/* webpackChunkName:"lodash"*/ 'lodash').then(_=>{
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['Hello','webpack'],' ');

//     return element;
//   }).catch(error=>'An error occurred while loading the component');
// }

// // 1.document.body.appendChild(component());

// 2.getComponent().then(component=>{
//   document.body.appendChild(component);
// })

// 在webpack4，我们import一个公共js模块，那个js模块不必再module.exports，它会创造一个人为命名对象给那个公共js模块
// 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js

// 执行npm run build后，lodash会分离到一个单独的 bundle

// 由于 import() 会返回一个 promise，因此它可以和 async 函数一起使用。但是，需要使用像 Babel 这样的预处理器和Syntax Dynamic Import Babel Plugin。
// 3.下面是通过 async 函数来简化代码：

async function getComponent(){
  var element = document.createElement('div');
  // /* */是注释，注释中指明了webpackChunkName为lodash
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 动态引入第二个库
  const { default: a } = await import(/* webpackChunkName: "console" */ './a.js');
  console.log(a);
  a(1);
  return element;
}
getComponent().then(component => {
  document.body.appendChild(component);
});
// import(/* webpackChunkName:"lodash"*/ 'lodash').then(_=>{
//   console.log(_.join(['Hello', 'webpack'], ' '));
// })
