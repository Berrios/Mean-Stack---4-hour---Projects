// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Products = mongoose.model('Products');

module.exports = (function(){
  return {
		show: function(req,res){
			Products.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
	  	},
	  	add: function(req,res){
	  		var product = new Products(req.body);
	  		console.log(req.body);
	  		product.save(function(err, data){
	  			if(err)
	  				console.log(err);
	  			else
	  				console.log(product.name);
	  				console.log(product.amount);
	  				res.json({success: 1 });	
	  		})
	  	},
	  	remove: function(req, res){
	  		console.log(req.body);
	  		Products.remove({_id: req.body.id}, function(err){
	  			console.log("error "+err);
	  		});
	  	}
	}
})();

