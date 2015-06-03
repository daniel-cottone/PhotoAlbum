'use strict';

/**
 * @ngdoc service
 * @name photoAlbumApp.albumsFactory
 * @description
 * # albumsFactory
 * Factory in the photoAlbumApp.
 */
angular.module('photoAlbumApp')
  .factory('AlbumsService', function ($resource) {
    return $resource('/api/albums/:id');
  });
