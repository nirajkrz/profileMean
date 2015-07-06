/**
 * UserProfileCtrl.js
 * @author nkuma15
 */

//Register mongoose resources and default RESTful routes are automatically made
var restful = require('node-restful');


module.exports = function(app, route) {

  // Setup the controller for REST.
  var rest = restful.model(
    'userprofile',
    app.models.userprofile
  ).methods(['get', 'put', 'post', 'delete']);

  // Register this endpoint with the application.
  rest.register(app, route);

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};