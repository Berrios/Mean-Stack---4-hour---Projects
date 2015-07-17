var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
  return {
 
    add: function(req, res) {
    	
    	var question = new Question(req.body)

	  	question.save(function(error, data){
	  		console.log("This is data: "+data);
	  		console.log("This is data.correct: "+data.correct);
		    if(error)
		        res.json(error)
		    else{
		    	console.log(req.body);
	  			res.json(req.body, {message: "Question Added!"});
		    }
		}); 
    }, 

    show: function (req, res){
      Question.find(function(err){
        console.log(err);
      });
      console.log("This is the show method in question.js controller"+res);
    }
  }
})();