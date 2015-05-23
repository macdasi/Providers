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
    .provider('unicornLauncher', unicornLauncher);

  //unicornLauncher['$inject'] = ['Level'];

  function unicornLauncher(){
    var useTinfoilShielding = 1;
    this.useTinfoilShielding = function(value) {
      useTinfoilShielding = value;
    };

    this.$get = ["Level", function unicornLauncherFactory(Level) {
      return new unicornLauncherService(Level * useTinfoilShielding);
    }];

  }

}());
