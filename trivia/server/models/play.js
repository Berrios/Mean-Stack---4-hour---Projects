var mongoose = require('mongoose');

var PlaySchema = new mongoose.Schema({
	name: String,
	correct: Number,
	wrong: Number,
	date: { type: Date, default: Date.now }
});

mongoose.model('Play', PlaySchema);
