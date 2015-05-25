'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('providersApp'));

  var AboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutController.title).toBe('Hello');
  });
});
