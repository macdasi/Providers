'use strict';

(function(){

  /**
   * @ngdoc function
   * @name providersApp.controller:MainController
   * @description
   * # MainController
   * Controller of the providersApp
   */
  angular.module('providersApp')
    .controller('MainController', MainController);

  MainController['$inject'] = ['unicornLauncher'];

  function MainController(unicornLauncher){
    var vm = this;
    vm.title = 'Hello';
    vm.Level = unicornLauncher.launchedCount;

    unicornLauncher.launch ();
  }

}());


