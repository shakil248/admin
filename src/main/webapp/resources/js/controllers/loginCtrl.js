'use strict';
app.controller('loginCtrl', function($scope, loginService){
	
	$scope.loginId;
	$scope.password;
	$scope.loginStats;

	 $scope.performLogin=function(){
		   loginService.performLogin($scope);
		};

});








