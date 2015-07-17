app.controller('mainController', function($scope, userFactory) {

	$scope.setUser = function(user) {
		userFactory.setUser(user);
	}
})

app.controller('dashboardController', function($scope, userFactory, pollsFactory) {
	$scope.users = {};
	var user = null;

	userFactory.readUser(function(data) {
		$scope.person = data;
		user = data;
	});

	$scope.remove = function(data){
		pollsFactory.remove(data);
	};

	pollsFactory.getPolls(function(data){
		$scope.polls = data;
	});

	userFactory.getUsers(function(data){
		$scope.users = data;
	});
})

app.controller('pollsController', function($scope, $routeParams, $location, pollsFactory, userFactory) {
	var id = $routeParams.id;
	var poll_Id = null;

	userFactory.readUser(function(data) {
		$scope.name = data;
	});
	
	$scope.createPoll = function(newPoll, name) {
		var question = newPoll.question;
		var option1 = newPoll.option1;
		var option2 = newPoll.option2;
		var option3 = newPoll.option3;
		var option4 = newPoll.option4;

	if(question != null || question != "" || newPoll.option1 != null || newPoll.option1 != "" ||newPoll.option2 != null || newPoll.option2 != "" || newPoll.option3 != null || newPoll.option3 != "" ||newPoll.option4 != null || newPoll.option4 != ""){
		if(question.length < 8 )
			$scope.error = "Question must contain minimum 8 characters";
		else if(option1.length < 3 || option2.length < 3 || option3.length < 3 || option4.length < 3)
			$scope.error = "Options must contain minimum 3 characters";
		else{
			newPoll.name = name.name;
			newPoll.user_id = name._id;
			pollsFactory.createPoll(newPoll, function(data) {
				pollsFactory.readPolls(data, function(info) {	
					if(info)
						$location.path('/dashboard')
				})
			})
		}
	  }
	}
})

app.controller('votesController', function($scope, $routeParams, userFactory, pollsFactory) {
	var id = $routeParams.id;
	// $scope.count1 = 0;
	// $scope.count2 = 0;
	// $scope.count3 = 0;
	// $scope.count4 = 0;

	pollsFactory.readPoll(id, function(data) {
		console.log(data);
		$scope.poll = data[0];
	})

	// pollsFactory.votes(id, function(data){
	// 	console.log(data);
	// })
	
	
	$scope.voted = function(vote){
		var poll = this.poll;
		poll[vote]++;

		// console.log(poll);
		pollsFactory.addVote(poll, function(info){
			console.log(info);
		})
	}
})
