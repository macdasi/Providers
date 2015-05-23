'use strict';

(function(){

  /**
   * @ngdoc Factory
   * @name providersApp.Factory:LevelFactory
   * @description
   * # LevelFactory
   * LevelFactory of the providersApp
   */
  angular.module('providersApp')
    .factory('unicornLauncherFactory', unicornLauncherFactory);

  unicornLauncherFactory['$inject'] = ['Level'];

  function unicornLauncherFactory(Level){
    return new unicornLauncherService(Level);
  }

}());
