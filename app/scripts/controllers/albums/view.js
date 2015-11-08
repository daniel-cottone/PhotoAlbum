'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AlbumsViewCtrl
 * @description
 * # AlbumsViewCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')

  .controller('AlbumsViewCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {

    // New photo
    $scope.newPhoto = new PhotosService();

    // Promise chain to resolve album and photos in album
    AlbumsService.get({ id: $stateParams.id }, function (data) {
      $scope.album = data;
    }).$promise
    .then(function () {
      return PhotosService.query({ search: 'albumId:' + $scope.album.id }, function (data) {
        $scope.photos = data;
      }).$promise;
    });

    // Function to add photo and refresh current view
    $scope.createPhoto = function() {
      $scope.newPhoto.$save(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

    // Function to delete photos
    $scope.deletePhoto = function(photo) {
      photo.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

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
