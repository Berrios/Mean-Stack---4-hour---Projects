var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newUser = new User(req.body);
			newUser.save(function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		},
		read: function(req, res) {
			User.find({}, function(err, data) {
				if(err)
					console.log(err)
				else
					res.json(data)
			})
		}
	}
})();