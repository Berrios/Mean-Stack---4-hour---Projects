var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
	name: String,
	date: { type: Date, default: Date.now }
});

mongoose.model('Result', ResultSchema);
