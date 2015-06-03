'use strict';

describe('Controller: AlbumsCtrl', function () {

  // load the controller's module
  beforeEach(module('photoAlbumApp'));

  var AlbumsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumsCtrl = $controller('AlbumsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
