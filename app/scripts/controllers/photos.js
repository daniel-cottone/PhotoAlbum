'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')

  .controller('PhotosListCtrl', function ($scope, $state, $stateParams, PhotosService) {
    $scope.photos = PhotosService.query();

    $scope.deletePhoto = function(photo) {
      photo.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };
  })

  .controller('PhotosViewCtrl', function ($scope, $stateParams, PhotosService) {
    $scope.photo = PhotosService.get({ id: $stateParams.id });
  })

  .controller('PhotosEditCtrl', function ($scope, $state, $stateParams, PhotosService) {
    $scope.updatePhoto = function() {
      $scope.photo.$update(function() {
        $state.go('listPhotos');
      });
    };

    $scope.loadPhoto = function() {
      $scope.photo = PhotosService.get({ id: $stateParams.id });
    };

    $scope.loadPhoto();
  })

  .controller('PhotosNewCtrl', function ($scope, $state, $stateParams, PhotosService) {
    $scope.photo = new PhotosService();

    $scope.addPhoto = function() {
      $scope.photo.$save(function() {
        $state.go('listPhotos');
      });
    };
  });
