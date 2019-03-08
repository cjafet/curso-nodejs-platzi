todo.controller('LoginController', ['$scope', 'Authentication', function($scope, Authentication) {

	  // var ref = new Firebase(FIREBASE_URL);
	  // var auth = $firebaseAuth(ref);


	  $scope.login = function() {

	  	Authentication.login();

	  	// $scope.message = "Welcome, " + $scope.user.email; 

	 //  	firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password)
	 //  	.then(function(firebaseUser){
	 //  	$scope.$apply(function () {
	 //  	$scope.message = "Welcome back, " + $scope.user.email;
	 //  	});
	 //  	console.log(firebaseUser.email);	
		// return firebaseUser;	
	 //  	}).catch(function(error) {
		//   // Handle Errors here.
		//   // var errorCode = error.code;
		//   // var errorMessage = error.message;
		//   $scope.$apply(function () {
		//   $scope.message = error.message;
		//   });
		//   // ...
		// });

	  }; 

	  $scope.regist = function() {
	  	firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
	  	.then(function(firebaseUser){
		  	$scope.$apply(function () {
		  		$scope.message = "Hi " + $scope.user.firstname + ", thanks for registering with this e-mail, " + $scope.user.email;
		  	});	
		  	console.log(firebaseUser.email);
		  	console.log($scope.user);	
		  	return firebaseUser;
	  	}).catch(function(error) {
		  // Handle Errors here.
		  // var errorCode = error.code;
		  // var errorMessage = error.message;
		  $scope.$apply(function () {
		  $scope.message = error.message;
		  });
		  // ...
		});


	  
	  	// auth.$createUser({
	  	// email: $scope.user.email,
	  	// password: $scope.user.password	
	  	// }).then(function(regUser){
	  	// $scope.message = "Hi, " + $scope.user.firstname + ", thanks for registering with us!";	
	  	// }).catch(function(error){
	  	// 	$scope.message = error.message;
	  	// }); // createUser method 	

	  
	  }; // Regist function   



	  $scope.signout = function() {

	  	firebase.auth().signOut().then(function() {
		  $scope.$apply(function () {
		  	$scope.message =  "User " + firebaseUser.email + " sign-out successful!";
		  });
		  console.log(firebaseUser.email);
		  return firebaseUser;
		}, function(error) {
		  $scope.$apply(function () {
		  	$scope.message =  "Something went wrong";
		  });
		});

	  }; 

}]); // LoginController