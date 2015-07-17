// var post = require ('./../server/controllers/post.js');
var list = require('./../server/controllers/list.js');
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
	})

	app.get('/user', function(req, res){
		user.read(req, res);
	})

	app.get('/lists', function(req, res) {
		list.read(req, res);
	})

	app.post('/lists', function(req, res) {
		list.create(req, res);
	})

	app.get('/lists/:id', function( req, res) {
		list.getOne(req, res);
	})

	// app.post('/posts', function(req, res) {
	// 	post.create(req, res);
	// })

	// app.get('/posts/:id', function(req, res) {
	// 	post.read(req, res);
	// })

	// app.get('/posts/:id', function(req, res) {
	// 	post.readOne(req, res);
	// })
}