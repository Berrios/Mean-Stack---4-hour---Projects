// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = (function(){
  return {
		show: function(req,res){
			Users.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
	  	},
	  	add: function(req,res){
	  		var user = new Users(req.body);
	  		console.log(req.body);
	  		user.save(function(err, data){
	  			if(err)
	  				console.log(err);
	  			else
	  				console.log(user.name);
	  				console.log(user.amount);
	  				res.json({success: 1 });	
	  		})
	  	},
	  	remove: function(req, res){
	  		console.log(req.body);
	  		Users.remove({_id: req.body.id}, function(err){
	  			console.log("error "+err);
	  		});
	  	}
	}
})();

