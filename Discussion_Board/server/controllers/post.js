var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newPost = new Post(req.body);
			newPost.save(function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},

		read: function(req, res) {
			Post.find({topic_Id: req.params.id}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		}
	}
})();