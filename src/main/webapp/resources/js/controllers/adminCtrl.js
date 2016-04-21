'use strict';
app.controller('adminCtrl', ['$scope','adminService','loginService', function ($scope,adminService,loginService) {
    $scope.tabs = [{
            title: 'Product Category',
            url: 'resources/partials/tpl/productCategory.tpl.html',
            id:'1'
        }, {
            title: 'Products',
            url: 'resources/partials/tpl/product.tpl.html',
            id:'2'
        }, {
            title: 'Orders',
            url: 'resources/partials/tpl/order.tpl.html',
            id:'3'
        }, {
            title: 'Users',
            url: 'resources/partials/tpl/user.tpl.html',
            id:'4'
        }
        ];

    $scope.currentTab = 'resources/partials/tpl/productCategory.tpl.html';
   
    $scope.orderExists=false;
    $scope.usersExists=false;
    getProductCategories();
    $scope.onClickTab = function (tab) {
    $scope.saveStatus="";
    	 
    	if(tab.id == '1'){
    		getProductCategories();
    	}else if(tab.id == '2'){
    		getProductCategories();
    		getAllProducts();
    	}else if(tab.id == '3'){
    		getAllOrders();
    	}else if(tab.id == '4'){
    		getStates();
    		getAllUsers();
    	}
    	 
        $scope.currentTab = tab.url;
    };
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };
    
    function  getStates(){
    	adminService.getStates().then(function(states) {
    		$scope.states = states;
    	});
	};
     function  getProductCategories(){
    	adminService.getProductCategories().then(function(pCats) {
    		$scope.productCategories = pCats;
    	});
	};
	
	 function  getAllProducts(){
		adminService.getAllProducts().then(function(products){
			$scope.products = products;
		});
	};
	
	function getAllOrders(){
	    	adminService.getAllOrders().then(function(orders) {
	    		$scope.orders = orders;
	    		if(orders!=""){
	    			  $scope.orderExists=true;
	    		}
	    	});
		};
		function getAllUsers(){
	    	adminService.getAllUsers().then(function(users) {
	    		$scope.users = users;
	    		if(users!=""){
	    			  $scope.usersExists=true;
	    		}
	    	});
		};
	$scope.editOrder = function(order){
			$scope.order = order;
	};
	$scope.editUser = function(user){
		$scope.user = user;
};
	$scope.editProduct = function(product){
		$scope.product = product;
};

	$scope.updateUser=function(user){
		adminService.updateUser(user,$scope);
	};
	$scope.updateOrder=function(order){
	    	adminService.updateOrder(order,$scope);
	};	
    $scope.createProductCat=function(productCat){
		adminService.createProductCat(productCat,$scope);
    };
    $scope.clearProductCat = function(productCat){
		$scope.productCat=null;
		 $scope.errorMessage="";
	};
	$scope.editProductCat = function(productCat){
		$scope.productCat = productCat;
	};
    $scope.createProduct=function(product){
    		adminService.createProduct(product,$scope);
	};
	
	$scope.clearProduct = function(product){
		$scope.product=null;
		 $scope.errorMessage="";
	};
	
	$scope.isLogged = function(){
		return loginService.isLogged();
	};
	$scope.logout=function(){
		loginService.logout();
	};
	
}]);








