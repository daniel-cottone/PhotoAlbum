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

    // Promise chain to resolve photos
    PhotosService.query(function (data) {
      $scope.photos = data;
    });

    // Function to delete photos
    $scope.deletePhoto = function(photo) {
      photo.$delete(function() {
        $state.go($state.current, {}, { reload: true });
      });
    };

  })

  .controller('PhotosViewCtrl', function ($scope, $stateParams, PhotosService) {

    // Promise chain to resolve photo
    PhotosService.get({ id: $stateParams.id }, function (data) {
      $scope.photo = data;
    });

  })

  .controller('PhotosEditCtrl', function ($scope, $state, $stateParams, PhotosService) {

    // Promise chain to resolve photo
    PhotosService.get({ id: $stateParams.id }, function (data) {
      $scope.photo = data;
    });

    // Function to update photo and go to list view
    $scope.updatePhoto = function() {
      $scope.photo.$update(function() {
        $state.go('listPhotos');
      });
    };

  })

  .controller('PhotosNewCtrl', function ($scope, $state, $stateParams, PhotosService) {

    // New photo
    $scope.photo = new PhotosService();

    // Function to add photo and go to list view
    $scope.addPhoto = function() {
      $scope.photo.$save(function() {
        $state.go('listPhotos');
      });
    };

  });
