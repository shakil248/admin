'use strict';
app.factory('adminService',['$http','config', function($http,config) {
	
	
    return {
    	createProductCat: function(productCat,scope) { 
			var res = $http.post(config.apiUrl+'createproductcat', productCat);
			res.success(function(data, status, headers, config) {
				  console.log("Success", data);
				  scope.saveStatus = "Saved Successfuly";
					
			});
			res.error(function(data, status, headers, config) {
				 console.log(data);
				 scope.saveStatus = "!Oops saving failed";
			});	
			
			},
    	createProduct: function(product,scope) { 
    			var res = $http.post(config.apiUrl+'createproduct', product);
    			res.success(function(data, status, headers, config) {
    				  console.log("Success", data);
    				  scope.saveStatus = "Saved Successfuly";
  					
    			});
    			res.error(function(data, status, headers, config) {
    				 console.log(data);
    				 scope.saveStatus = "!Oops saving failed";
    			});	
    			
    			},
    	updateOrder: function(order, scope) { 
        			var res = $http.post(config.apiUrl+'updateorder', order);
        			res.success(function(data, status, headers, config) {
        				  console.log("Success", data);
        				  scope.saveStatus = "Order updated successfully";
      					
        			});
        			res.error(function(data, status, headers, config) {
        				 console.log(data);
        				 scope.saveStatus = "!Oops saving failed";
        			});	
        			
        		},
         updateUser: function(user, scope) { 
        			var res = $http.post(config.apiUrl+'user', user);
        			res.success(function(data, status, headers, config) {
        				  console.log("Success", data);
        				  scope.saveStatus = "User updated successfully";
      					
        			});
        			res.error(function(data, status, headers, config) {
        				 console.log(data);
        				 scope.saveStatus = "!Oops saving failed";
        			});	
        			
        		},
    	 getUser: function(lId){
				var promise  = $http.get(config.apiUrl+'getuser',{params: {emailId: lId}}).
                then(function  (response) {
                    return response.data;
                });
				return promise ;
    		 
    	 },		
    	 getProductCategories: function() {
    		 var promise = $http.get(config.apiUrl+'getallproductcat').
    		 then(function  (response) {
                 return response.data;
             });
				 return promise;
    	 },
    	 getAllOrders: function() {
    		 var promise = $http.get(config.apiUrl+'getallorders').
    		 then(function  (response) {
                 return response.data;
             });
				 return promise;
    	 },
    	 getAllUsers: function() {
    		 var promise = $http.get(config.apiUrl+'getallusers').
    		 then(function  (response) {
                 return response.data;
             });
				 return promise;
    	 },
    	 getAllProducts: function() {
    		 var promise = $http.get(config.apiUrl+'getallproducts').
    		 then(function  (response) {
                 return response.data;
             });
				 return promise;
    	 },
    	 getStates: function(scope) {
    		 
    		 var promise = $http.get(config.apiUrl+'states').
    		 then(function  (response) {
                 return response.data;
             });
				 return promise;
		 	 },
    };
}]);



