
var mongoose = require('mongoose');

var QuestionsSchema = new mongoose.Schema({
	name: String,
	question: String,
	description: String,
	likes: Number,
	answers: Number,
	date: { type: Date, default: Date.now }
});

mongoose.model('Questions', QuestionsSchema);

// QuestionsSchema.path('question').required(true, 'Questions question cannot be blank');
