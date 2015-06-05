'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AlbumsListCtrl
 * @description
 * # AlbumsListCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')

  .controller('AlbumsListCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {

    // New album
    $scope.newAlbum = new AlbumsService();

    // Promise chain to resolve albums and associaed cover photos
    AlbumsService.query(function (data) {
      $scope.albums = data;
    }).$promise
    .then(function () {
      $scope.albums.forEach(function (album) {
        return PhotosService.get({ id: album.coverPhotoId }, function (data) {
          album.coverPhoto = data;
        }).$promise;
      });
    });

    // Function to add album and refresh current view
    $scope.createAlbum = function() {
      $scope.newAlbum.$save(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

    // Function to delete album and refresh current view
    $scope.deleteAlbum = function(album) {
      album.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

  });
