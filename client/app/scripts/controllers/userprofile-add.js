/**
 * userprofile-add.js
 * @author nkuma15
 */

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name clientApp.controller:UserprofileAddCtrl
	 * @description
	 * # UserprofileAddCtrl
	 * Controller of the clientApp
	 */
	angular.module('clientApp')
		.controller('UserprofileAddCtrl', function($scope, UserProfileFactory,
			$location) {
			$scope.user = {};
			$scope.saveUserProfile = function() {
				UserProfileFactory.post($scope.user).then(function() {
					$location.path('/userprofile');
				});
			};
		});
})();