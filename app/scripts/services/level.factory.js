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
    .factory('levelFactory', levelFactory);

  levelFactory['$inject'] = ['Level'];

  function levelFactory(Level){
    Level += 1;
    return Level;
  }

}());
