app.factory('userFactory', function($http, $location) {
	var factory = {};
	var currentUser = null;

	factory.readUser = function(callback) {
		console.log("This is current in factory: ",currentUser);
		callback(currentUser);
	}

	factory.setUser = function(user) {
		console.log("This is user in factory: ", user);
		currentUser = user;
		$http.post('/user', user).success(function(data) {
			currentUser = data;
		})
	}
	factory.getUsers = function(callback){
		$http.get('user').success(function(data){
			callback(data);
		})
	}

	factory.createUser = function(user, callback) {
		console.log("This is createUser in factory: ",user);
		$http.post('/login', user).success(function(data) {
			callback(data);
		})
	}

	return factory;
})

app.factory('listFactory', function($http, $location){
	var factory = {};

	factory.addList = function(user, callback){
		console.log("This is addList in factory", user);
	}

	factory.getList = function(userList, callback){
		console.log("This is getList in factory", userList);
	}

	factory.tagList = function(userList, callback){
		console.log("This is tagList in factory", userList);
	}

	return factory;
})

// app.factory('topicFactory', function($http) {
// 	var factory = {};
// 	var currentUser = null;

// 	factory.createTopic = function(newTopic, callback) {
// 		$http.post('/topics', newTopic).success(function(data) {
// 			callback(data);
// 		})
// 	}

// 	factory.readTopics = function(callback) {
// 		$http.get('/topics').success(function(data) {
// 			callback(data);
// 		})
// 	}

// 	factory.getTopic = function(id, callback) {
// 		$http.get('/topics/'+id).success(function(data) {
// 			callback(data);
// 		})
// 	}

// 	factory.setUser = function(user, callback) {
// 		this.currentUser = user;
// 		callback(currentUser);
// 	}

// 	factory.getUser = function(data, callback) {
// 		this.currentUser = data;
// 		callback(currentUser);
// 	}

// 	return factory;
// })

// app.factory('postFactory', function($http) {
// 	var factory = {};
// 	var topicId = null;

// 	factory.readPosts = function(data, callback) {
// 		// var id = data.id
// // error 1		
// 		// $http.get('/posts/'+id).success(function(info) {
// 		// 	callback(info);
// 		// })
// 	}

// 	factory.setId = function(id, callback) {
// 		topicId = id;
// 		callback(topicId);
// 	}

// 	factory.createPost = function(newPost, callback) {
// 		$http.post('/posts', newPost).success(function(data) {
// // error 3
// 			callback(data);
// 		})
// 	}

// 	return factory;
// })