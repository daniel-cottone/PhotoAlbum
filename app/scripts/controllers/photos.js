'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')
  .controller('PhotosCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
