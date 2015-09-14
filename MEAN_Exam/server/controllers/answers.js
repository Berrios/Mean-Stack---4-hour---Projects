var mongoose = require('mongoose');
var Answers = mongoose.model('Answer');
var Questions = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function() {

	return {
		create: function(req, res) {
			Questions.findOne({_id: req.body._question}, function(err, info){
				var answers = new Answers(req.body);
				answers._question = info._id;
				info.answers.push(answers);
				answers.save(function(err, data){
					if(err){
						console.log("Error");
					}else{
						res.json(data);
					}
				})
			
			})
		},
		read: function(req, res) {
			Answers.find({}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		readOne: function(req, res) {
			
			Answers.find({_id: req.params.id}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		update: function(req, res){
			Answers.findOne({_id: req.params.id}, function(err, data){
				if(err)
					console.log(err)
				else
				console.log("This is update in answers.js controller: ",data);
			})
		},
		addLike: function(req, res){
			console.log("This addLike:",req.body);
			Answers.findOneAndUpdate({_id: req.body._id}, {$set: {likes: req.body.likes}}, function(err, info){
				if(err)
					return console.log(err)

				res.json(info);
			})
			
		}
	}
})();