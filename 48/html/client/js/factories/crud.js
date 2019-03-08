todo.factory('Crud', ['$rootScope', '$http', '$location', '$route', function($rootScope, $http, $location, $route) {
    return {
      showAll: function() {
          var path = 'http://localhost:3000/products';
          return $http.get(path).success(function(data) {
            console.log(data);
            return data;
          });
      },
    	addItem: function(product) {
		if(product) {
                  var listObject = {
                        brand: 'BRAND HERE', 
                        title: product.title,
                        price: product.price
                  };

                  console.log(listObject);

                  var url = 'http://localhost:3000/products';

                  $http({
                        url: url, 
                        method: 'POST',
                        data: listObject,
                        headers: {'Content-Type': 'application/json'}
                  }).then(function(response) {
                        console.log(response.data);
                        $rootScope.message = "";
                        $route.reload();
                  }, function errorCallback(response) {
                        console.log(response);
                  });
            } else {
            console.log("ToDo Empty");
            $rootScope.message = "Add title and description!";
          }
    	},
    	deleteItem: function(list) {
    		console.log(list._id);
    		var listObject = {
    		id:list._id
    		};

    		var url = 'http://localhost:3000/products';
    		$http({
    		      url: url, 
    		      method: 'DELETE',
    		      data: listObject,
    		      headers: {'Content-Type': 'application/json'}
    		}).then(function(response) {
    		      var res = response.data;
    		      console.log(res);
    		      $route.reload();
    		}, function errorCallback(response) {
    		      console.log(response);
    		});
    	} // method
    }; // object return
}]); // factory