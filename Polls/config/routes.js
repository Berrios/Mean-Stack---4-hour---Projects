var polls = require('./../server/controllers/polls.js');
var user = require('./../server/controllers/user.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/login', function(req, res) {
		user.read(req, res);
	});

	app.post('/user', function(req, res) {
		user.create(req, res);
	});

	app.get('/user', function(req, res){
		user.read(req, res);
	});
	app.get('/polls/votes/:id', function(req, res){
		polls.votes(req, res);
	});

	app.post('/polls', function(req, res) {
		polls.create(req, res);
	});

	app.get('/polls', function(req, res) {
		polls.read(req, res);
	});

	app.get('/polls/:id', function(req,res){
		polls.readOne(req, res);
	});

	app.post('/polls/voted', function( req, res) {
		console.log("this is the route.");
		polls.addVote(req, res);
	});

	app.post('/polls/:id', function(req,res){
		console.log("not here!");
		polls.remove(req, res);
	});

}