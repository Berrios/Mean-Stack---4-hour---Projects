app.factory('userFactory', function($http, $location) {
	var factory = {};
	var currentUser = null;

	factory.readUser = function(callback) {
		callback(currentUser);
	}

	factory.setUser = function(user) {
		currentUser = user;
		$http.post('/user', user).success(function(data) {
			currentUser = data;
		})
	}
	factory.getUsers = function(callback){
		$http.get('/user').success(function(data){
			callback(data);
		})
	}

	factory.createUser = function(user, callback) {
		$http.post('/login', user).success(function(data) {
			callback(data);
		})
	}

	return factory;
})

app.factory('pollsFactory', function($http, $location){
	var factory = {};

	factory.createPoll = function(user, callback){
		console.log(user);
		$http.post('/polls', user).success(function(data){
			callback(data);
		})
	}

	factory.readPolls = function(info, callback){
		$http.get('/polls').success(function(data){
			callback(data);
		})
	}

	factory.readPoll = function(data, callback){
		var id = data
		$http.get('/polls/'+id).success(function(info){
			callback(info);
		});
	}

	factory.getPolls = function(callback){
		$http.get('/polls').success(function(data){
			callback(data);
		})
	}

    factory.votes = function(info, callback){
   		var id = info;
    	$http.get('/polls/votes/'+id).success(function(data){
    		callback(data);
    	});
    }

	factory.addVote = function(info, callback){
		console.log(info);
		$http.post('/polls/voted', info).success(function(data){
			callback(data);
		}).error(function(data){
			console.log(data);
		});
	}

	factory.remove = function(info){
		var id = info;
		$http.post('/polls/'+id).success()
	}

	return factory;
})
