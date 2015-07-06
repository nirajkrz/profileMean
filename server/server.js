/**
 * server.js
 * @author nkuma15
 */

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');


// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

/*app.use('/hello', function(req, res, next) {
  res.send('Hello World!');
  next();
});*/

var db = mongoose.connection;
db.once('open', function() {

	// Load all the models to server.
	app.models = require('./models/index');

	// Load the routes.
	var routes = require('./routes');
	//Call each ctrl pass the app and all the routes created so far to it.
	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
		console.log("routes---"+route);
	});

	console.log('Listening on port 3000...');
	app.listen(3000);
});
// Connect to MongoDB
mongoose.connect('mongodb://localhost/contactlist');