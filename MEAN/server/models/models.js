var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now }
});

var questionSchema = mongoose.Schema({
	name        :String,
	question    :String,
	description	:String,
	created_at  :{type: Date, default: Date.now },
	answers		:[{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
	users     	:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

var answerSchema = mongoose.Schema({
	name		:String,
	heading     :String,
	description	:String,
	likes		:{ type: Number, default: 0 },
	created_at  :{ type: Date, default: Date.now },
	_question	:{type: Schema.ObjectId, ref: 'Question'},
	users     	:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

mongoose.model("User", userSchema);
mongoose.model("Question", questionSchema);
mongoose.model("Answer", answerSchema);
