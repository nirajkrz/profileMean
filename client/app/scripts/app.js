/**
 * app.js
 * @author nkuma15
 */

'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'ngSanitize',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/userprofile', {
        templateUrl: 'views/userprofile.html',
        controller: 'UserprofileCtrl',
        controllerAs: 'userprofile'
      })
      .when('/create/userprofile', {
        templateUrl: 'views/userprofile-add.html',
        controller: 'UserprofileAddCtrl',
        controllerAs: 'userprofileAdd'
      })
      .when('/userprofile/:id', {
        templateUrl: 'views/userprofile-view.html',
        controller: 'UserprofileViewCtrl',
        controllerAs: 'userprofileView'
      })
      .when('/userprofile/:id/delete', {
        templateUrl: 'views/userprofile-delete.html',
        controller: 'UserprofileDeleteCtrl'
      })
      .when('/userprofile/:id/edit', {
        templateUrl: 'views/userprofile-update.html',
        controller: 'UserprofileUpdateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
