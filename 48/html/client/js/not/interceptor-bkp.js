
todo.config(['$httpProvider', function($httpProvider) {  
    


$httpProvider.interceptors.push(function($log, $injector, $location) {

  
  return({
                         request: request,
                         requestError: requestError,
                         // response: response,
                         // responseError: responseError
                     });


     function request(config) {
           // Services = $injector.get('Services');
           // if ($injector.get('Services').search("Hillsong United")) {
              
              var session = localStorage.getItem("session");

              if(!session) {
                $location.path('/login');
              } 
              // else {
              //   config.headers['sessionId'] = session;
              // }

              
              // config.headers['x-csrf-token'] = 'nc98P987bcpncYhoadjoiydc9ajDlcn';
              // config.headers['x-session-token'] = SessionService.token;
              
               // var url = config.url.substring(0, 5);
              // $log.debug(url);

              // config.headers['x-csrf-token'] = 'nc98P987bcpncYhoadjoiydc9ajDlcn';
              // // config.headers['x-session-token'] = SessionService.token;
              
              // if (url == 'https') {
              //   config.url = "https://api.spotify.com/v1/search?q=hillsong united&type=album,artist&limit=50&offset=0";
              // }; 
              // $log.debug(config); 
              return config;
           // };

    }
    function requestError(rejection) {
        // $log.debug(rejection);
        // return $q.reject(rejection);  
    }

});


}]);


