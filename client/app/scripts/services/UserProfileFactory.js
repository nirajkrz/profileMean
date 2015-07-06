/**
 * UserProfileFactory.js
 * @author nkuma15
 */

(function() {
    'use strict';

    function UserProfileFactory(UserProfileRestangular) {
    	return UserProfileRestangular.service('userprofile');
    }

    angular.module('clientApp').factory('UserProfileFactory', UserProfileFactory);

    UserProfileFactory.$inject= ['UserProfileRestangular'];

})();