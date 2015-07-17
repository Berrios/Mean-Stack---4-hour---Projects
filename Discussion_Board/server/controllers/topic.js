var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newTopic = new Topic(req.body);
			newTopic.save(function(err) {
				if(err)
					console.log(err)
				else {
					Topic.find({}, function(err, data) {
						if(err)
							console.log(err);
						else
							console.log("This is all the topics", data)
							res.json(data);
					})
				}
			})
		},

		read: function(req, res) {
			Topic.find({}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},

		getOne: function(req, res) {
			Topic.findOne({_id: req.params.id}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data);
			})
		}
	}
})();