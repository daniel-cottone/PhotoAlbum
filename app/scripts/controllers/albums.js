'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')
  .controller('AlbumsCtrl', function ($scope, AlbumsService) {

    AlbumsService.query(function (data) {
      $scope.albums = data;
    });
    
  });
