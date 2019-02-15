// 引入css
import css from '@/style/index.less'

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
// import angularAnimate from 'angular-animate';
// import angularCookies from 'angular-cookies';
// import angularValidation from 'angular-validation';

// 创建一个模块 app [声明模块依赖]
// 在index.html中的html标签上启动模块，ng-app='app'
// ui-router//ngjs路由
const myApp = angular.module('app',['ui.router']);

// 路由部分（根据页面定路由）
// 传参url:'/main/:id'或url:'/main/{id}'或url:'/main?before&after',
// 跳转<a ui-sref='main'></a>,<a ui-sref='main({id:12})'></a>
// $state.go('main',{id:12},{location:'replace'})
// 获取参数$state.params.id或$stateParams.id
import main from '@/view/main'
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){    
    $stateProvider.state({
        name:'main',
        url:'/main',
        template:main,
        controller:'mainCtrl'
    });
    // 做一个默认的跳转
    $urlRouterProvider.otherwise('main')
}])

// controller部分（一个页面一个controller）
// 每个controller必须申明$scope这个服务
import a from '@/image/document.png'
angular.module('app')
.controller('mainCtrl', ['$scope', function($scope){
  console.log(1);
  $scope.a=a;
}]);





// 指令 有且只有一个根元素（感觉相当于vue的注册全局组件）
// restrict:'A||E||AE' A属性E元素AE既属性又元素
// replace希望外面那个div被替换掉，为true
import head from '@/view/template/head'
import foot from '@/view/template/foot'
angular.module('app')
.directive('appHead',[function(){
    return{
        restrict:'A',
        replace:true,
        template:head
    }
}])
.directive('appFoot',[function(){
    return{
        restrict:'A',
        replace:true,
        template:foot
    }
}])

