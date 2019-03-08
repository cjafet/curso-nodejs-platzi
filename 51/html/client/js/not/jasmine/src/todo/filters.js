var todo = angular.module('todo', []);

todo.filter('stripTags', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });
