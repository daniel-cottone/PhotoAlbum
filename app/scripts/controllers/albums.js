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

    $scope.deleteAlbum = function(album) {
      album.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };
  })

  .controller('AlbumsViewCtrl', function ($scope, $state, $stateParams, AlbumsService, PhotosService) {
    AlbumsService.get({ id: $stateParams.id}, function (data) {
      $scope.album = data;
    }).$promise
    .then(function () {
      return PhotosService.get({ id: $scope.album.coverPhotoId }, function (data) {
        $scope.coverPhoto = data;
      }).$promise;
    });
  })

  .controller('AlbumsEditCtrl', function ($scope, $state, $stateParams, AlbumsService) {
    $scope.updateAlbum = function() {
      $scope.album.$update(function() {
        $state.go('listAlbums');
      });
    };

    $scope.loadAlbum = function() {
      $scope.album = AlbumsService.get({ id: $stateParams.id });
    };

    $scope.loadAlbum();
  })

  .controller('AlbumsNewCtrl', function ($scope, $state, $stateParams, AlbumsService) {
    $scope.album = new AlbumsService();

    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('listAlbums');
      });
    };
  });
