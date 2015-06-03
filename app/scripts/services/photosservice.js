'use strict';

/**
 * @ngdoc service
 * @name photoAlbumApp.photosFactory
 * @description
 * # photosFactory
 * Factory in the photoAlbumApp.
 */
angular.module('photoAlbumApp')
  .factory('PhotosService', function ($resource) {
    return $resource('/api/photos/:id');
  });
