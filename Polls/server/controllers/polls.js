var mongoose = require('mongoose');
var Polls = mongoose.model('Polls');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newPoll = new Polls(req.body);
			newPoll.save(function(err, data) {
				if(err)
					console.log(err)
				else
					User.findOneAndUpdate({_id: data.user_id}, {poll_id: data._id}, {upsert: true}, function(err, update){
						res.json(update);	
					})
			})
		},

		read: function(req, res) {
			Polls.find({}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		readOne: function(req, res) {
			console.log(req.params);
			Polls.find({_id: req.params.id}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		remove: function(req, res){
			console.log("This is req.params.id: ", req.params.id);
			Polls.findByIdAndRemove(req.params.id, function(err, user){
				if(err)
					console.log(err)
				else
				console.log(user);
			})
		},
		addVote: function(req, res){
			// console.log(req.body);
			var poll = req.body;
			console.log("This is poll in server: ", poll);
			Polls.findByIdAndUpdate(poll._id, poll, function(err, return_poll){
				if(err)
					console.log(err)
				else{
				console.log("this is inside update",return_poll);
				res.json(return_poll);
				}
			})

		},
		votes: function(req, res){
			console.log(req.body);
			console.log(req.params);
		}
	}
})();