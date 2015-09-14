app.controller('mainController', function($scope, userFactory, questionsFactory) {
	
	user = prompt("Please enter your name!", "");
 	userFactory.setUser(user, function(info){
		userFactory.readUser(function(data) {
			$scope.person = data.name;
			user = data;
		});
	});

	questionsFactory.getQuestions(function(data){
		$scope.questions = data;
	});
})

app.controller('dashboardController', function($scope, userFactory, questionsFactory, $window) {
	$scope.users = {};
	var user = null;

	$scope.name = $window.name;

	$scope.mrFranz = function(value){
 			console.log(value);
			userFactory.readUser(function(data) {
			$scope.name = data.name;
		});
	}

	userFactory.readUser(function(data) {
		$scope.person = data.name;
		user = data;
	});

	questionsFactory.getQuestions(function(data){
		$scope.questions = data;
	});
})

app.controller('questionsController', function($scope, $routeParams, $location, questionsFactory, userFactory) {
	var id = $routeParams.id;
	var poll_Id = null;

	$scope.createQuestion = function(questions, name) {
		var question = questions.question;
		var description = questions.description;

	if(question != null || question != "" ){
		if(question.length < 10 )
			$scope.error = "Question must contain minimum 10 characters";
		else{
			questions.name = name;
			question.user_id = name._id;
			questionsFactory.createQuestion(questions, function(data) {
				questionsFactory.readQuestions(data, function(info) {	
					if(info)
						alert("Success!");
						$location.path('/dashboard');
				})
			})
		 }
	  }
	}
})

app.controller('replyController', function($scope, $location, $routeParams, userFactory, questionsFactory, answersFactory) {
	var id = $routeParams.id;
	
	var user = null;
	var count = 0;

	questionsFactory.readQuestion(id, function(data) {
		$scope.questions = data[0];
	});

	userFactory.readUser(function(data) {
		$scope.person = data.name;
	});

	$scope.reply = function(answers, person, questions) {
		answers.name = person;
		answers._question = questions;
		
		if(answers.heading != null || answers.heading != "" ){
			if(answers.heading.length < 5 ){
				$scope.error = "Answer must contain minimum 5 characters";
			}else{
				answersFactory.createAnswer(answers, function(data){
					if(data)
						alert("Success!");
						data.question_id = questions._id;
						questionsFactory.update(data,function(info){
							question_id = info._id;
						});
					$location.path('/show/'+questions._id);
				});	
			}
		}
	}
})

app.controller('showController', function($scope, $location, $routeParams, userFactory, questionsFactory, answersFactory) {
	var id = $routeParams.id;
	var user = null;
	
	questionsFactory.getAnswersIds(id, function(data){
		$scope.answers = data.answers;
	})
	
	userFactory.readUser(function(data) {
		$scope.person = data.name;
		user = data;
	});

	$scope.like = function(answer){
		answer.likes++;
		var answer = this.answer;
		answersFactory.addLike(answer, function(info){
				console.log(info);
		});
	}
})
