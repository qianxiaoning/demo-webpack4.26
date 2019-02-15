console.log(1);

import angular from 'angular';
//对app的引入 .config进行配置
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main'),{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    };
    // 做一个默认的跳转
    $urlRouterProvider.otherwise('main')
}])

export default 1