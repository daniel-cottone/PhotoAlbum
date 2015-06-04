'use strict';

/**
 * @ngdoc service
 * @name photoAlbumApp.albumsService
 * @description
 * # albumsService
 * Factory in the photoAlbumApp.
 */
angular.module('photoAlbumApp')
  .factory('AlbumsService', function ($resource) {
    return $resource('/api/albums/:id', { id: '@id' }, {
      'save': { method: 'POST', params: { action: 'create', format: '.json' } },
      'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : true },
      'update': { method: 'PUT', params: { action: 'update', format: '.json' } },
      'delete': { method: 'DELETE' }
    });
  });
