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
    .service('unicornLauncherService', unicornLauncherService);

  //unicornLauncherService['$inject'] = ['Level'];



}());

function unicornLauncherService(level){
  this.launch  = launch ;
  this.launchedCount = 0;

  function launch (){
    level += 1;
    this.launchedCount = level;
  }

}
