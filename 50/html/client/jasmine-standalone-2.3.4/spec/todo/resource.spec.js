describe('Resources', function () {
  
  	var ListApi;
  	var $httpBackend;

  	// beforeEach(module('todo'));

  	// beforeEach(inject(function(_ListApi_, _$httpBackend_, $resource) {
		 //  ListApi = _ListApi_; 
	  //   $httpBackend = _$httpBackend_;
  	// }));

  	afterEach(function() {
  		$httpBackend.verifyNoOutstandingExpectation();
  	});
  

	it('should update a Todo Item', function() {

    module('todo');

    module('ngResource');

    beforeEach(inject(function($injector) {
      myService = $injector.get('ListApi');
    }));

    // 

    angular.mock.inject(function(_$httpBackend_) { 
      $httpBackend = _$httpBackend_;
    });

		$httpBackend.expectPUT('todo').respond(200);

		var listObject = {
	        id: "591b2b0a63428a8396e4a4cd",
	        title: "Add new feature 22", 
	        description: "<p>Add the drag drop feature in webapp</p>",
	        status: "notCompleted"
        };

        myService.update();
        // $httpBackend.flush;
        expect($httpBackend.flush).not.toThrow();
	   
	});

});