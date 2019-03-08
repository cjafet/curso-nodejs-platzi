spotify.factory('getInterceptor', ['$log', '$q', 'someAsyncService', function($log, $q, someAsyncService) {  
    
    $log.debug('Your request was intercepted!');

    var requestInterceptor = {
        request: function(config) {
            var deferred = $q.defer();
            spotifyApi.serach().then(function() {
                // Asynchronous operation succeeded, modify config accordingly
                $log.debug(config);
                deferred.resolve(config);
            }, function() {
                // Asynchronous operation failed, modify config accordingly
                deferred.resolve(config);
            });
            return deferred.promise;
        }
    };

    return requestInterceptor;
}]);

spotify.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('getInterceptor');
}]);
