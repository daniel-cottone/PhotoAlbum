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
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider

      // Main Page
      .state('main', {
        url: '/',
        templateUrl: 'views/main/index.html',
        controller: 'MainCtrl'
      })

      // Albums
      .state('listAlbums', {
        url: '/albums',
        templateUrl: 'views/albums/list.html',
        controller: 'AlbumsListCtrl'
      })
      .state('viewAlbum', {
        url: '/albums/:id/view',
        templateUrl: 'views/albums/view.html',
        controller: 'AlbumsViewCtrl'
      })
      .state('editAlbum', {
        url: '/albums/:id/edit',
        templateUrl: 'views/albums/edit.html',
        controller: 'AlbumsEditCtrl'
      })
      .state('newAlbum', {
        url: '/albums/new',
        templateUrl: 'views/albums/new.html',
        controller: 'AlbumsNewCtrl'
      })

      // Photos
      .state('listPhotos', {
        url: '/photos',
        templateUrl: 'views/photos/list.html',
        controller: 'PhotosListCtrl'
      })
      .state('viewPhoto', {
        url: '/photos/:id/view',
        templateUrl: 'views/photos/view.html',
        controller: 'PhotosViewCtrl'
      })
      .state('editPhoto', {
        url: '/photos/:id/edit',
        templateUrl: 'views/photos/edit.html',
        controller: 'PhotosEditCtrl'
      })
      .state('newPhoto', {
        url: '/photos/new',
        templateUrl: 'views/photos/new.html',
        controller: 'PhotosNewCtrl'
      });
  })
  .run(function ($state) {
    $state.go('main');
  });
