/**
 * UserProfileRestangular.js
 * @author nkuma15
 */

/**API provides '_id', Restangular expects it to be 'id' without an underscore
* Therefore return restangular object by changing _id as id
**/

(function() {
    'use strict';

    function UserProfileRestangular(Restangular) {
        return Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
    }
    angular.module('clientApp').factory('UserProfileRestangular', UserProfileRestangular);
    UserProfileRestangular.$inject= ['Restangular'];
})();
