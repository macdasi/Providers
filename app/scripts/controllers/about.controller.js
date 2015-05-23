'use strict';

(function(){

  /**
   * @ngdoc function
   * @name providersApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the providersApp
   */
  angular.module('providersApp')
    .controller('AboutController', AboutController);

  AboutController['$inject'] = ['unicornLauncher'];

  function AboutController(unicornLauncher){
    var vm = this;
    vm.title = 'Hello';
    vm.Level = unicornLauncher.launchedCount;

    unicornLauncher.launch ();
  }

}());
