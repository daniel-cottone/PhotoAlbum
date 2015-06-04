'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')

  .controller('PhotosListCtrl', function ($scope, $state, PhotosService) {
    $scope.photos = PhotosService.query();
  })

  .controller('PhotosViewCtrl', function ($scope, $stateParams, PhotosService) {
    $scope.photo = PhotosService.get({ id: $stateParams.id });
  })

  .controller('PhotosEditCtrl', function ($scope, $stateParams, PhotosService) {
    $scope.photo = PhotosService.get({ id: $stateParams.id });
  })

  .controller('PhotosNewCtrl', function ($scope, $stateParams, PhotosService) {
    $scope.photo = PhotosService.get({ id: $stateParams.id });
  });
