describe('Strip Tags filter', function() {

  var $filter;

  it('returns the text without html tags', function() {

    module('todo');

    beforeEach(inject(function(_$filter_){
      $filter = _$filter_;
    }));

    var stripTags = $filter('stripTags');

    var result = stripTags('<p>Upgrade servers 11</p>');
    console.log(result);

    expect(stripTags('<p>Upgrade servers 11</p>')).toEqual('Upgrade servers 11');
  });
});