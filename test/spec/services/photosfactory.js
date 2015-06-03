'use strict';

describe('Service: photosFactory', function () {

  // load the service's module
  beforeEach(module('photoAlbumApp'));

  // instantiate service
  var photosFactory;
  beforeEach(inject(function (_photosFactory_) {
    photosFactory = _photosFactory_;
  }));

  it('should do something', function () {
    expect(!!photosFactory).toBe(true);
  });

});
