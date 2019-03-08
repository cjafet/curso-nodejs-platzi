todo.controller('ListController', ['$scope', '$route', '$location', 'Crud', 'ListApi', 
  function($scope, $route, $location, Crud, ListApi) {

      // $scope.visible = false;
      
      // Load Todo Items

      Crud.showAll().then(function(response) {
        $scope.items = response.data.reverse(); 
      });
      

      $scope.addItem = function(todo) {
        Crud.addItem(todo);
      };

      $scope.logout = function() {
        Authentication.logout();
        $route.reload();
      };

      $scope.update = function(list) {
        var listObject = {
        id: list._id,
        title: list.title, 
        description: list.description,
        status: list.status
        };
        console.log(listObject);
        ListApi.update({id:list._id}, listObject);
      };

      $scope.delete = function(list) {
        Crud.deleteItem(list);
      };
}]); // LoginController