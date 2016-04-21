'use strict';
var app = angular.module('loginApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {templateUrl:'resources/partials/login.html', controller: 'loginCtrl'});
	  $routeProvider.when('/admin', {templateUrl:'resources/partials/admin.html', controller: 'adminCtrl'});
	  $routeProvider.otherwise({redirectTo:'/login'});
}]);
	
app.constant('config', {
    apiUrl: "http://localhost:8080/petstore/"
});







