var mongoose = require('mongoose');

var HomeSchema = new mongoose.Schema({
	name: String,
	date: { type: Date, default: Date.now }
});

mongoose.model('Home', HomeSchema);
