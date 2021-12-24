var mongoose = require('./db');

var schema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
});

var mongomodel = mongoose.model('User',schema);

module.exports = mongomodel;