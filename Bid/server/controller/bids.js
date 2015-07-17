// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Bids = mongoose.model('Bids');

module.exports = (function(){
  return {
		show: function(req,res){
			Bids.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
	  	},
	  	add: function(req,res){
	  		var bid = new Bids(req.body);
	  		console.log(req.body);
	  		bid.save(function(err, data){
	  			if(err)
	  				console.log(err);
	  			else
	  				console.log(bid.name);
	  				console.log(bid.amount);
	  				res.json({success: 1 });	
	  		})
	  	},
	  	remove: function(req, res){
	  		console.log(req.body);
	  		Bids.remove({_id: req.body.id}, function(err){
	  			console.log("error "+err);
	  		});
	  	}
	}
})();

