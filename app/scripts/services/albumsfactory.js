'use strict';

/**
 * @ngdoc service
 * @name photoAlbumApp.albumsFactory
 * @description
 * # albumsFactory
 * Factory in the photoAlbumApp.
 */
angular.module('photoAlbumApp')
  .factory('albumsFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
