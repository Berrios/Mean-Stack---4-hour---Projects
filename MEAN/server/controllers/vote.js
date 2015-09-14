var mongoose = require('mongoose');
var Votes = mongoose.model('Votes');

module.exports = (function() {
	return {
		create: function(req, res) {
			console.log("This is req.body.poll: ",req.body.poll);
			var newVote = new Votes(req.body);
			newVote.save(function(err) {
				if(err)
					console.log(err)
				else {
					Votes.find({}, function(err, data) {
						if(err)
							console.log(err);
						else
							console.log("This is all the polls", data)
							res.json(data);
					})
				}
			})
		},
		read: function(req, res) {
			Votes.find({}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},

		getOne: function(req, res) {
			Votes.findOne({_id: req.params.id}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data);
			})
		}
	}
})();