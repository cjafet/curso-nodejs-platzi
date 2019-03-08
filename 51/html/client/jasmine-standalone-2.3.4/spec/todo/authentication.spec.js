describe('Authentication Factory', function () {
  
  	var Authentication;
  	var $httpBackend;
  
	var email = "ali";
	var password = "5f4dcc3b5aa765d61d8327deb882cf99";
	
	var response = {
		status: 'success',
		sessionId: 'OsIz5HWPNaX9FfkqfbTvsHWNjdPuWSre',
		username: 'ali'
	};
	
	it('should return sessionId', function() {

		angular.mock.module('todo');
			
	    angular.mock.inject(function(_Authentication_, _$httpBackend_) { 
		  Authentication = _Authentication_; 
	      $httpBackend = _$httpBackend_;
		});

	    $httpBackend.when('POST', 'http://localhost:3000/user/auth').respond(200, response);

	    var session;

	    Authentication.login(email,password).then(function(data) {
	      console.log(data);
	      session = data;
	    });

	    // Resolve all HTTP requests
	    $httpBackend.flush();

	    expect(session).toBeDefined("OsIz5HWPNaX9FfkqfbTvsHWNjdPuWSre"); 
	});
});