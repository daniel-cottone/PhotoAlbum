'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
