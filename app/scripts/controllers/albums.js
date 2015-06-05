'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')

  .controller('AlbumsListCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {

    // Promise chain to resolve albums and associaed cover photos
    AlbumsService.query(function (data) {
      $scope.albums = data;
    }).$promise
    .then(function () {
      $scope.albums.forEach(function (album) {
        PhotosService.get({ id: album.coverPhotoId }, function (data) {
          album.coverPhoto = data;
        });
      });
    });

    // Function to delete album
    $scope.deleteAlbum = function(album) {
      album.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

  })

  .controller('AlbumsViewCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {

    // Promise chain to resolve album and cover photo
    AlbumsService.get({ id: $stateParams.id }, function (data) {
      $scope.album = data;
    }).$promise
    .then(function () {
      return PhotosService.get({ id: $scope.album.coverPhotoId }, function (data) {
        $scope.coverPhoto = data;
      }).$promise;
    });

  })

  .controller('AlbumsEditCtrl', function ($scope, $state, $stateParams, AlbumsService) {

    // Promise chain to resolve the album
    AlbumsService.get({ id: $stateParams.id }, function (data) {
      $scope.album = data;
    });

    // Update album and go to list view
    $scope.updateAlbum = function() {
      $scope.album.$update(function() {
        $state.go('listAlbums');
      });
    };

  })

  .controller('AlbumsNewCtrl', function ($scope, $state, $stateParams, AlbumsService) {

    $scope.album = new AlbumsService();

    // Function to add album and go to list view
    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('listAlbums');
      });
    };

  });
