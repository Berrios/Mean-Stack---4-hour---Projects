var mongoose = require('mongoose');
var Questions = mongoose.model('Question');
var User = mongoose.model('User');
var Answers = mongoose.model('Answer');

module.exports = (function() {
	return {
		create: function(req, res) {
			// console.log("This is req.body in create method: ",req.body);
			var question = new Questions(req.body);
			question.save(function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data);
			})
		},
		read: function(req, res) {
			Questions.find({}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		readOne: function(req, res) {
			console.log("This is req.params in readOne in questions.js: ",req.params);
			Questions.find({_id: req.params.id}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		answersIds: function(req, res){
			console.log(req.params.id);
			Questions.findOne({_id: req.params.id})
					.populate('answers')
					.exec(function(err, data){

				console.log("This should be the answer:",data);
				// var answer = new Answers(req.body);
				// answer._data = data._id;
				// data.answers.push(answer);
				// answer.save(function(err){
					// data.save(function(err){
						if(err)
							console.log("Error");
						else{
						 	res.json(data);
						}
							// console.log("This is answers: ",data.answers);
						 // Answers.find({}, function(err, info){
						 // 	console.log("This is info: ",info);
						 // });						
				// 	});
				// });
			});
		},
		update: function(req, res){
			// req.body has answer object including question_id
			var count = 0;
			req.body.count = count+1;
			console.log("This is update req.body in questions.js:  ",req.body);
			Questions.findOne({_id: req.body.question_id}, function(err, data){
				var answer = new Answers(req.body);
				answer._data = data._id;
				data.answers.push(answer);

				answer.save(function(err){
					data.save(function(err){
						if(err)
							console.log("Error");
						else
							res.json(data);
					});
				});
			});
		}
	}
})();