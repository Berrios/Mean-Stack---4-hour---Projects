  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  	console.log("This is app: "+app);
	var home = require('./../server/controllers/home.js');
	
	var question = require('./../server/controllers/question.js');
		app.post('/new_question', function (req, res){
			console.log("this is question route"+ req.body.question);
			question.add (req, res);
		});
		
	var answer = require('./../server/controllers/answer.js');
		
  }

