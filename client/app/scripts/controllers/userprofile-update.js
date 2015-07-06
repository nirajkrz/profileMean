/**
 * userprofile-update.js
 * @author nkuma15
 */

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name clientApp.controller:UserprofileUpdateCtrl
     * @description
     * # UserprofileUpdateCtrl
     * Controller of the clientApp
     */
    angular.module('clientApp')
        .controller('UserprofileUpdateCtrl', function(
            $scope,
            $routeParams,
            UserProfileFactory,
            $location
        ) {
            $scope.editProfile = true;
            $scope.user = {};
            UserProfileFactory.one($routeParams.id).get().then(function(user) {
                $scope.user = user;
                $scope.saveUserProfile = function() {
                    $scope.user.save().then(function() {
                        $location.path('/userprofile/' + $routeParams.id);
                    });
                };
            });
        });
})();
