  var todo = angular.module('todo', ['ngRoute', 'ngResource']);

  todo.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	    when('/products', {
	      templateUrl: 'views/list.html', // load this template in the view
	      controller: 'ListController' // especifies the controller for this view
	    }).
	    otherwise({
	      redirectTo: '/products'
	    });
  }]);