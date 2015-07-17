var mongoose = require('mongoose');
var Play = mongoose.model('Play');
var Question = mongoose.model('Question');

module.exports = (function() {
  return {

  	user: function (req, res){
		Play.findOne({_id: req.body._id}, function(err){
              console.log("error "+err);
        });
	},

	questions: function(req, res){
		Question.find({}, function(err, results){
			if(err){
				console.log(err);
			}else{
				res.redirect("/partials/play.html");
				res.json({questions: results});
				console.log("this is results: "+results);
				console.log("this is req: "+req);
				console.log("this is res: "+res);
				console.log("this is results._id: "+results[2]._id);
				console.log("this is results.question: "+results[2].question);
				console.log("this is results.correct: "+results[2].correct);
				console.log("this is results.fake1: "+results[2].fake1);
				console.log("this is results.fake2: "+results[2].fake2);
			}
		});
	},
	
    play: function(req, res) {
    	  console.log("This is req.body.userName"+req.body.userName);
    	// var play = new Play(req.body);

    	Play.findOne({_id: req.params.id}, function (err, user){
        // loads a view called 'user.ejs' and passed the user object to the view!
        res.render('./partials/play', {name : req.body.userName});
   		});
    },
    submit: function (req, res){
    	Play.findOne({_id: req.body._id}, function(err){
	    	play.save(function(error){
		  		// console.log("This is req.body: "+play[0].name);
			    if(error)
			        res.json(error);
			    else{
			    	play.update({_id: req.params.id}, {name: req.body.userName}, function (err, user){
			    		if(error)
					        res.json(error);
					    else
					    	console.log("This is user"+user);
			    	});
			    }
			});

		    res.redirect('./partials/home.html');
		 })
    	}
  };
})();
