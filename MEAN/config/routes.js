var questions = require('./../server/controllers/questions.js');
var user = require('./../server/controllers/user.js');
var answers = require('./../server/controllers/answers.js');

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
	app.post('/questions/update', function(req, res) {
		console.log("This is in the routes: ",req.body);
		questions.update(req, res);
	});

	app.post('/questions', function(req, res) {
		console.log(req.body);
		console.log(req.params);
		questions.create(req, res);
	});

	app.get('/questions', function(req, res) {
		questions.read(req, res);
	});

	app.get('/questions/:id', function(req,res){
		questions.readOne(req, res);
	});

	app.post('/questions/count', function(req, res){
		console.log("This is req.body",req.body);
		questions.addCount(req, res);
	});

	app.get('/questions/answers/:id',function(req, res){
		questions.answersIds(req, res);
	})

	app.post('/answers', function(req, res){
		console.log("This is likes i think!",req.body);
		answers.create(req, res);
	});

	app.get('/answers/:id', function(req, res){
		answers.read(req, res);
	});

	app.put('/answers/update', function(req, res){
		answers.addLike(req, res)
	});
}