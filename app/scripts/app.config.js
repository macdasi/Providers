'use strict';

/**
 * @ngdoc overview
 * @name providersApp
 * @description
 * # providersApp
 *
 * Main configuration of the application.
 */
angular
  .module('providersApp')
  .value('Level',5)
  .config(["unicornLauncherProvider", function(unicornLauncherProvider) {
    unicornLauncherProvider.useTinfoilShielding(50);
  }]);
