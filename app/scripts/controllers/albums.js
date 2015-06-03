'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')
  .controller('AlbumsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
