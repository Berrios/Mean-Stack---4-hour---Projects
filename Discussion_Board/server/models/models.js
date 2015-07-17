var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	list_Id    :[{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
	// post_Id     :[{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
	// comment_Id  :[{ type: mongoose.Schema.Types.ObjectId, ref: "Comments"}]
})


var listSchema = mongoose.Schema({
	name        :String,
	title       :String,
	description :String,
	created_at  :{ type: Date, default: Date.now },
	// post_Id     :[{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
})

// var postSchema = mongoose.Schema({
// 	name        :String,
// 	user_Id     :{ type: mongoose.Schema.Types.ObjectId, ref: "User"},
// 	topic_Id    :{ type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
// 	comment_Id  :[{ type: mongoose.Schema.Types.ObjectId, ref: "Comments"}],
// 	post        :String,
// 	like        :Number,
// 	dislike     :Number,
// 	created_at  :{ type: Date, default: Date.now }
// })

mongoose.model("User", userSchema);
mongoose.model("List", topicSchema);
mongoose.model("Post", postSchema);