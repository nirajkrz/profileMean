'use strict';

describe('Controller: UserprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserprofileCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    UserprofileCtrl = $controller('UserprofileCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserprofileCtrl.awesomeThings.length).toBe(3);
  });
});
