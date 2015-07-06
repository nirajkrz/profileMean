/**
 * userprofile-view.js
 * @author nkuma15
 */

(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name clientApp.controller:UserprofileViewCtrl
     * @description
     * # UserprofileViewCtrl
     * Controller of the clientApp
     */
    angular.module('clientApp')
        .controller('UserprofileViewCtrl', function($scope, UserProfileFactory, $routeParams) {
            $scope.profileView = true;
            $scope.user = UserProfileFactory.one($routeParams.id).get().$object;
        });
})();
