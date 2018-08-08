'use strict';

describe('Controller: TestplayCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var TestplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestplayCtrl = $controller('TestplayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestplayCtrl.awesomeThings.length).toBe(3);
  });
});
