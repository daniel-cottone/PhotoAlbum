'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')

  .controller('AlbumsListCtrl', function ($scope, $state, AlbumsService) {
    $scope.albums = AlbumsService.query();
  })

  .controller('AlbumsViewCtrl', function ($scope, $stateParams, AlbumsService) {
    $scope.album = AlbumsService.get({ id: $stateParams.id });
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
