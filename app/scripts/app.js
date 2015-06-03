'use strict';

/**
 * @ngdoc overview
 * @name photoAlbumApp
 * @description
 * # photoAlbumApp
 *
 * Main module of the application.
 */
angular
  .module('photoAlbumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/albums', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
