var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	poll_id    :[{ type: mongoose.Schema.Types.ObjectId, ref: "Polls" }],
})

var pollsSchema = mongoose.Schema({
	name        :String,
	question    :String,
	option1		:String,
	count1		:{type: Number, default: 0},
	option2		:String,
	count2		:{type: Number, default: 0},
	option3		:String,
	count3		:{type: Number, default: 0},
	option4		:String,
	count4		:{type: Number, default: 0},
	created_at  :{ type: Date, default: Date.now },
	user_id     :[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
})

mongoose.model("User", userSchema);
mongoose.model("Polls", pollsSchema);
