describe('Crud Factory', function () {
  
  	var factory;
  	var $httpBackend;

  	var list = { 
  		id: "5757e6e41b0a244b256ac1d5"
  		};

  	var responseDelete = {
  		status: "success",
  		data: {
  			__v: "0",
  			_id: "5757e6e41b0a244b256ac1d5",
  			title: "Todo title",
  			description: "Todo description",
  			status: "completed",
  			author: "587c61662ee257006b150166"
  		}};
  

	it('should delete Item', function() {

		angular.mock.module('todo');

		module('ngRoute');
			
	    angular.mock.inject(function(_Crud_, _$httpBackend_) { 
		  factory = _Crud_; 
	      $httpBackend = _$httpBackend_;
		});

	    $httpBackend.when('DELETE', 'http://localhost:3000/todo?sessionId=OsIz5HWPNaX9FfkqfbTvsHWNjdPuWSre').respond(200, responseDelete);

	    var ondelete = factory.deleteItem(list);
	    console.log(ondelete);
	    // var status = ondelete;
	    // console.log(status);

	    // Resolve all HTTP requests
	    $httpBackend.flush();

	    expect(status).toEqual("success"); 
	});
});