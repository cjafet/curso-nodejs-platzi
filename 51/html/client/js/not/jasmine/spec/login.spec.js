describe('Login Controller', function() {

  beforeEach(module('todo'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('LoginController');
  }));


  it('should return sessionId', function() {

    expect(response).toEqual(jsonData); 

  });
