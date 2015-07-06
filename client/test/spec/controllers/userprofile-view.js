'use strict';

describe('Controller: UserprofileViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserprofileViewCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    UserprofileViewCtrl = $controller('UserprofileViewCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserprofileViewCtrl.awesomeThings.length).toBe(3);
  });
});
