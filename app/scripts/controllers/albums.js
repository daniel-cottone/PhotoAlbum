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

    // New album
    $scope.album = new AlbumsService();

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

    // Function to delete album and refresh current view
    $scope.deleteAlbum = function(album) {
      album.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

    // Function to add album and refresh current view
    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

  })

  .controller('AlbumsViewCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {

    // Promise chain to resolve album and photos in album
    AlbumsService.get({ id: $stateParams.id }, function (data) {
      $scope.album = data;
    }).$promise
    .then(function () {
      return PhotosService.query({ albumId: $scope.album.id }, function (data) {
        $scope.photos = data;
      }).$promise;
    });

  })

  .controller('AlbumsEditCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {

    // Promise chain to resolve the album and cover photo
    AlbumsService.get({ id: $stateParams.id }, function (data) {
      $scope.album = data;
    }).$promise
    .then(function () {
      return PhotosService.get({ id: $scope.album.coverPhotoId }, function (data) {
        $scope.coverPhoto = data;
      }).$promise;
    });

    // Update album and go to list view
    $scope.updateAlbum = function() {
      $scope.album.$update(function() {
        $state.go('listAlbums');
      });
    };

  })

  .controller('AlbumsNewCtrl', function ($scope, $state, $stateParams, AlbumsService) {

    // New album
    $scope.album = new AlbumsService();

    // Function to add album and go to list view
    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('listAlbums');
      });
    };

  });
