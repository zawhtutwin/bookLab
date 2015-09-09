mongoose = require('mongoose');
	module.exports = function() {
	var db = mongoose.connect('mongodb://localhost/mean-book');
	return db;
};