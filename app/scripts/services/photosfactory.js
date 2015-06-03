'use strict';

/**
 * @ngdoc service
 * @name photoAlbumApp.photosFactory
 * @description
 * # photosFactory
 * Factory in the photoAlbumApp.
 */
angular.module('photoAlbumApp')
  .factory('photosFactory', function () {
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
