todo.factory('ListApi', ['$resource', function($resource) {
    var session = localStorage.getItem("session");
    //return $resource('http://localhost:3000/todo?sessionId=' + session + '/:_id/:title/:description/:status');
    return $resource('http://localhost:3000/todo?sessionId=' + session + '/:_id', {id:'@id'},
    {
        update: { 
          method: 'PUT'
        },
        save: {
          method: 'PUT'
        },
        delete: {
          method: 'DELETE'
        }
    });
}]); // factory

// var User = $resource('/user/:userId', {userId:'@id'});
// User.get({userId:123}, function(user) {
//   user.abc = true;
//   user.$save();
// });

// .factory('Todo', function ($resource) {
//     return $resource('api/todos/:todoId', {
//       todoId: '@_id'
//     }, {
//       update: {
//         method: 'PUT'
//       }
//     });
//   });