var mongoose = require('mongoose');

// Create the UserProfile Schema.
var ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    memberStatus: {
        type: String,
        required: true
    }
});

// Export the model schema.
module.exports = ProfileSchema;
