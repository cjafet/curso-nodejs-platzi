todo.factory('Crud', ['$rootScope', '$http', '$location', '$route', '$q', function($rootScope, $http, $location, $route, $q) {
    return {
    	addItem: function(todo) {
    		if(todo) {
                  var listObject = {
                        title: todo.title, 
                        description: todo.description,
                        status: "notCompleted"
                        //author: "591b2b0963428a8396e4a4c9"
                  };
                  var str_list = JSON.stringify(listObject);
                  //ListApi.save(str_list);

                  var session = localStorage.getItem("session");
                  
                  var url = 'http://localhost:3000/todo?sessionId=' + session;

                    $http({
                          url: url, 
                          method: 'PUT',
                          data: listObject,
                          headers: {'Content-Type': 'application/json'}
                    }).then(function(response) {
                          console.log(response.data);
                          // $location.path('/todos');
                          $rootScope.message = "";
                          $route.reload();
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                       // or server returns response with an error status.
                    });
              } else {
                  console.log("ToDo Empty");
                  $scope.message = "Add title and description!";
              }
    	},
    	deleteItem: function(list) {
    		console.log(list._id);
    		var listObject = {
    		id:list._id
    		};
    		var str_list = JSON.stringify(listObject);
    		//ListApi.delete({"id":list._id});
    		console.log(str_list);
    		console.log(list.author);
    		var id = "'" + list._id + "'";

    		var session = localStorage.getItem("session");
    		
    		var url = 'http://localhost:3000/todo?sessionId=' + session;

    		$http({
    		      url: url, 
    		      method: 'DELETE',
    		      data: listObject,
    		      headers: {'Content-Type': 'application/json'}
    		}).then(function(response) {
    		      var res = response.data;
    		      console.log(res);
    		      // $location.path('/todos');
    		      $route.reload();
    		}, function errorCallback(response) {
    		    // called asynchronously if an error occurs
    		   // or server returns response with an error status.
    		});
 
    	},
        showAll: function() {
            var session = localStorage.getItem("session");
            var path = 'http://localhost:3000/todos?sessionId=' + session + '&skip=0&limit=100';
            var deferred = $q.defer();
            return $http.get(path).success(function(data) {
              // $scope.items = data.data.slice().reverse();
              authorId = data.data.author;
              console.log(data.data);
              //return data;
              deferred.resolve(data);
            });
            return deferred.promise;           
        }, // method
        update: function(list) {
        	
        	var listObject = {
        	_id: list.id,
        	title: list.title, 
        	description: list.description,
        	status: list.status
        	};

        	var str_list = JSON.stringify(listObject);

            var session = localStorage.getItem("session");
            
            var url = 'http://localhost:3000/todo?sessionId=' + session;

            return $http({
                  url: url, 
                  method: 'PUT',
                  data: str_list,
                  headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                  console.log("You just update your list item!");
                  console.log(response);
                  // self.showAll();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
               // or server returns response with an error status.
            });
        }
    }; // object return
}]); // factory