/**
 * userprofile.js
 * @author nkuma15
 */

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name clientApp.controller:UserprofileCtrl
     * @description
     * # UserprofileCtrl
     * Controller of the clientApp
     */

    function UserprofileCtrl(UserProfileFactory, $scope) {
        console.log("*****"+JSON.stringify(UserProfileFactory.getList()));
        $scope.userprofile = UserProfileFactory.getList().$object;
    }
    angular.module('clientApp')
        .controller('UserprofileCtrl', UserprofileCtrl);
        UserprofileCtrl.$inject = ["UserProfileFactory","$scope"];
})();
