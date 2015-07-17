module.exports = function(app){

var bids = require('../server/controller/bids.js');
	app.get('/bids', function (req,res){
		bids.show (req, res);
	});

var users = require('../server/controller/users.js');
	app.get('/users', function (req,res){
		users.show (req, res);
	});
	app.post('/login', function (req,res){
		users.show (req, res);
	});

var products = require('../server/controller/products.js');
	app.get('/products', function (req,res){
		products.show (req, res);
	});


};
