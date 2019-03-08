describe('Crud Factory', function () {
  
  	var factory;
  	var $httpBackend;
  
	var response = {
		status: "success", 
		data: [
		{
			author: {
				username: "ali",
				_id: "591b2b0963428a8396e4a4c9"
			},
			description: "<p>latest commit on webapp needs deployment</p>",
			status: "completed",
			title: "Deploy Webapp 47",
			_id: "591b2b0a63428a8396e4a4cc"
		},
		{
			author: {
				username: "ali",
				_id: "591b2b0963428a8396e4a4c9"
			},
			description: "<p>Add the drag drop feature in webapp</p>",
			status: "notCompleted",
			title: "Add new feature 22",
			_id: "591b2b0a63428a8396e4a4cd"
		},
		]
	};
	
	it('should return Todo Items', function() {

		angular.mock.module('todo');

		module('ngRoute');
			
	    angular.mock.inject(function(_Crud_, _$httpBackend_) { 
		  factory = _Crud_; 
	      $httpBackend = _$httpBackend_;
		});

	    $httpBackend.when('GET', 'http://localhost:3000/todos?sessionId=OsIz5HWPNaX9FfkqfbTvsHWNjdPuWSre&skip=0&limit=100').respond(200, response);

	    var data;

	    factory.showAll().then(function(res) {
	      console.log(res);
	      console.log(res.data.data[0].title);
	      data = res;
	    });

	    // Resolve all HTTP requests
	    $httpBackend.flush();

	    expect(data.data.data[0].title).toEqual("Deploy Webapp 47"); 
	});
});