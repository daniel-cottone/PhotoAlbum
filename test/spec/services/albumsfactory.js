'use strict';

describe('Service: albumsFactory', function () {

  // load the service's module
  beforeEach(module('photoAlbumApp'));

  // instantiate service
  var albumsFactory;
  beforeEach(inject(function (_albumsFactory_) {
    albumsFactory = _albumsFactory_;
  }));

  it('should do something', function () {
    expect(!!albumsFactory).toBe(true);
  });

});
