'use strict';

describe('Controller: UserprofileAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserprofileAddCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    UserprofileAddCtrl = $controller('UserprofileAddCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserprofileAddCtrl.awesomeThings.length).toBe(3);
  });
});
