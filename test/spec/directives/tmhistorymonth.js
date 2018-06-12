'use strict';

describe('Directive: tmhistorymonth', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tmhistorymonth></tmhistorymonth>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmhistorymonth directive');
  }));
});
