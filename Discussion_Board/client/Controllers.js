app.controller('mainController', function($scope, userFactory) {

	$scope.setUser = function(user) {
		console.log("user in controller: ",user);
		userFactory.setUser(user);
	}
})

app.controller('dashboardController', function($scope, userFactory, listFactory) {
	// $scope.newTopic = {};

	userFactory.readUser(function(data) {
		console.log("This is data: ",data);
		$scope = data.name;
	})

	userFactory.getUsers(function(data){
		console.log("This is getUsers in controller", data);
		$scope = data;
	})

	$scope.addBucket = function(user) {
		console.log(user);
		listFactory.addList(user, function(data) {
			$scope.lists = data;
			// $scope.newTopic = {};
		})
	}

	listFactory.getList($scope.userList, funciton(data){
		console.log(data);
	});

	// listFactory.tagList(userList, function(data){
	// 	console.log(data);
	// });

	// topicFactory.readTopics(function(data) {
	// 	$scope.topics = data;
	// })	
})
// app.controller('ListController', function(userFactory,listFactory){

// 	listFactory.getList($scope.userList, funciton(data){
// 		console.log(data);
// 	});

// 	listFactory.tagList(userList, function(data){
// 		console.log(data);
// 	});

// })

// app.controller('topicController', function($scope, $routeParams, topicFactory, postFactory, userFactory) {
// 	var id = $routeParams.id;
// 	var topic_Id = null;

// 	postFactory.setId(id, function(data) {
// 		topic_Id = data;
// 		console.log(topic_Id);
// 	})

// 	topicFactory.getTopic(id, function(data) {
// 		topic_Id = data._id;
// 	})

// 	postFactory.readPosts(topic_Id, function(info) {
// 		console.log(info);	
// 		$scope.posts = info;
// 	})

// 	userFactory.readUser(function(data) {
// 		$scope.name = data;
// 	})
	
// 	$scope.createPost = function(newPost, name) {		
// 		newPost.name = name.name;
//         newPost.topic_Id = topic_Id;
// 		newPost.user_Id = name._id;
// 		postFactory.createPost(newPost, function(data) {
// // error 2
// 			postFactory.readPosts(data, function(info) {	
// 				$scope.posts = info;
// 			})
// 		})
// 	}
// })

// app.controller('postController', function($scope, $routeParams, topicFactory, userFactory) {
// 	var id = $routeParams.id;

// 	postFactory.readPosts(topicId, function(data) {
// 		$scope.posts = data;
// 	})

// })




// 	$scope.checkUser = function(user) {
// 		userFactory.readUsers(user, function(data) {
// 		    var newUser = true;
// 			for(regUser in data) {
// 				console.log("Checking if user is in database...");
// // If user already exists, redirect to dashboard
// 				if(user.name == data[regUser].name) {
// 					console.log("User exists already...redirecting...");
// 					newUser = false;
// 					var thisUser = data[regUser];
// 					userFactory.setUser(thisUser, function(data) {
// 							console.log("User Name Goes Here", data);
// 						})
// 						$location.path('/dashboard');
// 						break;
// 					}
// 				// }
// 			}	
// // If user does not exist, create new user and redirect to dashboard
// 			if(newUser == true) {	
// 				console.log("User is new, Creating...");
// 				userFactory.createUser(user, function(data) {
// 					console.log("New user has been created...")
// 					// $scope.user = user.name;
// 					$location.path('/dashboard');
// 				})
// 			}
// 		})
// 	}