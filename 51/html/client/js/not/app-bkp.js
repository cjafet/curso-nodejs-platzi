  // var todoList = angular.module('todoList', ['ngRoute']);

  // todoList.config(['$sceDelegateProvider', '$routeProvider',  function($sceDelegateProvider, $routeProvider) {
         
  //        $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://p.scdn.co/**']);

  //        $routeProvider.
  //        when('/', {
  //          // load this template in the view
  //          templateUrl: 'views/login.html',
  //          // especifies the controller for this view
  //          controller: 'LoginController'
  //        }).
  //        otherwise({
  //          redirectTo: '/login'
  //        });
  // }]);

  var todo = angular.module('todo', ['ngRoute', 'ngResource']);

  todo.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/login', {
      // load this template in the view
      templateUrl: 'views/login.html',
      // especifies the controller for this view
      controller: 'LoginController'
    }).
    when('/todos', {
      // load this template in the view
      templateUrl: 'views/list.html',
      // especifies the controller for this view
      controller: 'ListController'
    }).
    otherwise({
      redirectTo: '/login'
    });
  }]);