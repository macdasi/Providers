'use strict';

/**
 * @ngdoc overview
 * @name providersApp
 * @description
 * # providersApp
 *
 * Main routing of the application.
 */
angular
  .module('providersApp')
  .config(route);

route['$.inject'] = ['$routeProvider'];

function route($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController',
      controllerAs :'MainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController',
      controllerAs :'AboutController'
    })
    .otherwise({
      redirectTo: '/'
    });
}

