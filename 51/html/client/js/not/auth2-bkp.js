todo.controller('LoginController', ['$scope', '$location', 'Authentication', function($scope, $location, Authentication) {

	  $scope.login = function(user) {

	  	// var sessionId = Authentication.login();
	  	// console.log(sessionId);
	  	// $scope.master = angular.copy(user);
    //    	var email = $scope.master.email;
	  	// var pwd = $scope.master.password;
	  	console.log(user);

	  	Authentication.login(user.email,user.password).then(function(data) {
      		console.log("sessionId:" + data);
      		if (data) {
      		    $location.path('/todos');
      		    $scope.message = "Welcome back, " + $scope.user.email + "!";
      		} else {
      		    $location.path('/login');
      		    $scope.message = "Wrong user or password";
      		}
      	});

	  }; 

	  $scope.logout = function() {
        Authentication.logout();
      }

	 

}]); // LoginController