
var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	name: String,
	question: String,
	correct: String,
	fake1: String,
	fake2: String,
	date: { type: Date, default: Date.now }
});

mongoose.model('Question', QuestionSchema);
