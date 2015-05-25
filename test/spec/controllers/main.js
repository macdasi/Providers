'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('providersApp'));

  var MainController,Level,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));


  it('should have isHappy not false', function () {
    expect(MainController.isHappy).not.toBe(false);
  });


  it('should contain title Hello', function () {
    expect(MainController.title).toMatch('Hello');
  });

  it('should have a Level toBeDefined', function () {
    expect(MainController.Level).toBeDefined();
  });

  xit('should have a Level toBeGreaterThan 1', function () {
    expect(MainController.Level).toBeGreaterThan(1);
  });

  xit('should call launch', function () {
    spyOn(MainController, 'launch').andCallThrough();
    MainController.launch();
    expect( MainController.launch).toHaveBeenCalled();
  });

  it('should have increase Level after launch ', function () {
    var l1 = MainController.Level;
    MainController.launch();
    var l2 = MainController.Level;

    expect(l2).toBeGreaterThan(l1);

  });

});
