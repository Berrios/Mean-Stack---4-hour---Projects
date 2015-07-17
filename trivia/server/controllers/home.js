var mongoose = require('mongoose');
var Home = mongoose.model('Home');
var Play = mongoose.model('Play');

// function to check if user is already login / session credentials are active
  var is_user = function(session_id){
    number_of_users = session_info.length;

    var current_user = false;

    if(number_of_users > 0){
      for(var ctr = 0; ctr < number_of_users; ctr++){
        if(session_info[ctr].id == session_id){
          current_user = session_info[ctr];
          current_user = true;
          break;
        }else{
          current_user = false; 
        }
      }
    }
    console.log("current user", current_user)
    return current_user;
  };


module.exports = (function() {
  return {

    show: function (req, res){
      Play.find(function(err){
        console.log(err);
      });
      // Play.findOne({_id: req.body._id}, function(err){
      //         console.log("error "+err);
      //   })
    },
    Login: function(req, res) {

    	var login = new Login(req.body)

	  	login.save( function(error, data){
	  		console.log(data.question);
	  		console.log(req.body.data);
		    if(error)
		        res.json(error)
		    else{
		    	console.log(req.body);
	  			res.json(req.body, {message: "User Added!"});
		    }
		});
    }
  }
})();