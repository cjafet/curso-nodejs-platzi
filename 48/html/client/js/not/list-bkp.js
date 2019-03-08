// todo.filter('stripTags', function() {
//     return function(text) {
//       return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
//     };
//   });

todo.controller('ListController', ['$scope', '$location', '$http', '$route', 'Authentication', 'Crud', 'ListApi',
      function($scope, $location, $http, $route, Authentication, Crud, ListApi) {

      $scope.visible = false;

      var session = localStorage.getItem("session");
      
      if (session) {
            Crud.showAll().then(function(data) {
                 $scope.items = data.data.data.slice().reverse(); 
            });
            // var path = 'http://localhost:3000/todos?sessionId=' + session + '&skip=0&limit=100';
            // $http.get(path).success(function(data) {
            //   $scope.items = data.data.slice().reverse();
            //   authorId = data.data.author;
            //   console.log(data.data);
            // });

            // ListApi.query()
      };

            
        $scope.addItem = function(todo) {

            Crud.addItem(todo);

              // if(todo) {
              //     var listObject = {
              //           title: todo.title, 
              //           description: todo.description,
              //           status: "notCompleted"
              //           //author: "591b2b0963428a8396e4a4c9"
              //     };
              //     var str_list = JSON.stringify(listObject);
              //     //ListApi.save(str_list);

              //     var session = localStorage.getItem("session");
                  
              //     var url = 'http://localhost:3000/todo?sessionId=' + session;

              //       $http({
              //             url: url, 
              //             method: 'PUT',
              //             data: listObject,
              //             headers: {'Content-Type': 'application/json'}
              //       }).then(function(response) {
              //             console.log(response.data);
              //             // $location.path('/todos');
              //             $scope.message = "";
              //             $route.reload();
              //       }, function errorCallback(response) {
              //           // called asynchronously if an error occurs
              //          // or server returns response with an error status.
              //       });
              // } else {
              //     console.log("ToDo Empty");
              //     $scope.message = "Add title and a description!";
              // }
              //$route.reload();
              //var authorId = todo.author._id;
              //console.log(authorId)
              // ListApi.get({id:authorId}, function() {
              //   ListApi.$save(listObject);
              // });

              // reload page
              //$window.location.href

              // get the current path
              //$location.path();

              // change the path
              //$location.path('/newValue')
        };


      $scope.logout = function() {
        Authentication.logout();
        $route.reload();
      };

      $scope.update = function(list) {
        //Crud.update(list);
        var listObject = {
        id: list._id,
        title: list.title, 
        description: list.description,
        status: list.status
        };
        console.log(listObject);
        //var str_list = JSON.stringify(listObject);
        ListApi.update({id:list._id}, listObject);
      };

      $scope.delete = function(list) {

      Crud.deleteItem(list);

      // console.log(list._id);
      // var listObject = {
      // id:list._id
      // };
      // var str_list = JSON.stringify(listObject);
      // //ListApi.delete({"id":list._id});
      // console.log(str_list);
      // console.log(list.author);
      // var id = "'" + list._id + "'";

      // var session = localStorage.getItem("session");
      
      // var url = 'http://localhost:3000/todo?sessionId=' + session;

      // $http({
      //       url: url, 
      //       method: 'DELETE',
      //       data: listObject,
      //       headers: {'Content-Type': 'application/json'}
      // }).then(function(response) {
      //       var res = response.data;
      //       console.log(res);
      //       // $location.path('/todos');
      //       $route.reload();
      // }, function errorCallback(response) {
      //     // called asynchronously if an error occurs
      //    // or server returns response with an error status.
      // });


      // get the current path
      //$location.path();

      

        //ListApi.delete(id);
        // remove the item from the array
       //$scope.list._id.splice(id, 1);
      };
	 

}]); // LoginController