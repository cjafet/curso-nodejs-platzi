var todo = angular.module('todo', []);

todo.factory('ListApi', ['$resource', function($resource) {
    var session = localStorage.getItem("session");
    return $resource('todo/:id', { id: '@id' }, {
        update: { 
          method: 'PUT'
        },
        save: {
          method: 'PUT'
        }
    });
}]); // factory