/**
 * userprofile-delete.js
 * @author nkuma15
 */

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name clientApp.controller:UserprofileDeleteCtrl
     * @description
     * # UserprofileDeleteCtrl
     * Controller of the clientApp
     */
    angular.module('clientApp')
        .controller('UserprofileDeleteCtrl', function(
            $scope,
            $routeParams,
            UserProfileFactory,
            $location
        ) {
            $scope.user = UserProfileFactory.one($routeParams.id).get().$object;
            $scope.deleteUser = function() {
                console.log("deleting user now...");
                $scope.user.remove().then(function() {
                    $location.path('/userprofile');
                });
            };
            $scope.back = function() {
                $location.path('/userprofile/' + $routeParams.id);
            };
        });
})();