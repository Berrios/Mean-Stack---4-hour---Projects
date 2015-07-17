  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {

	var home = require('./../server/controllers/home.js');
		app.get('/home', function(req, res) {
	    	home.show(req, res);	
		});
		app.post('/play:id', function(req, res) {
			console.log("This is req.body: "+req.body.userName);
	    	play.play(req, res);	
		});

	var question = require(
		'./../server/controllers/question.js');
		app.post('/question', function(req, res) {	
	    	question.add(req, res);
		});

		app.get('/question', function(req, res) {
	    	question.show(req, res);	
		});

	var play = require('./../server/controllers/play.js');
		app.post('/play', function(req, res) {
			console.log("This is req.body: "+req.body.userName);
	    	play.play(req, res);	
		});

		app.get("/questions", function(req,res){
			console.log("This is req.body:"+req.body.userName)
			play.questions(req, res);
			play.user(req, res);
			console.log("This is res in play get routes"+res);
		});

	var result = require('./../server/controllers/result.js');
		app.post('/result', function(req, res) {
	    	result.result(req, res);	
		});
  }

