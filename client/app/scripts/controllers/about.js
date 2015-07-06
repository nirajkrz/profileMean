(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name clientApp.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the clientApp
     */
    angular.module('clientApp')
        .controller('AboutCtrl', function($scope) {
            $scope.aboutText = "This is the app to provide basic Admin functions like READ/EDIT/DELETE in Mongo DB!!";
        });
})();
