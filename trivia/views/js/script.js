var session_info = [];
var users = [];
var questionInfo = [];

myApp.controller('LoginController', function ($scope, loginFactory) {
 
  });// end of controller

myApp.controller('HomeController', function ($scope, homeFactory) {
 var new_newUser = [];


   var result = '';

	  $scope.play = function() {
	 			new_newUser = prompt("Please enter your name!", "");
	 			if(new_newUser == null || new_newUser == ""){
	 				$scope.message = "You must enter a user name!";
	 			}else{
		 			session_info.push({userName: new_newUser});
		 			$scope.userName = session_info[0].userName;
		 			console.log(session_info[0]);
		 			console.log($scope.userName);
		 			console.log(session_info[0].userName);
		 			homeFactory.play(session_info, function (callback){
		 				console.log("You're ready to play!");
		 				$scope.callback;
		 				console.log(callback);
		 			}); 
	 			}
			},

		homeFactory.get(session_info, function (callback){
 				console.log("This is the get function in HomeController to get all scores!");
 				$scope.callback;
 				console.log(callback);
		 }); 


});

myApp.controller('QuestionController', function ($scope, questionFactory) {
	var questions = [];

	$scope.add = function(){
		if($scope.questions == null || $scope.questions.question == null || $scope.questions.correct == null || $scope.questions.fake1 == null || $scope.questions.fake2 == null){
			$scope.message = "Please fill out all fields!";
			$scope.questions = {};
		}else{
			questionFactory.addQuestion($scope.questions, function (data){
				$scope.questionInfo = data;
				$scope.message = "Question Added!";
			});
			$scope.questions = {};
		}
	};
});

myApp.controller('PlayController', function ($scope, playFactory, questionFactory) {
	// console.log("This is Play controller: "+session_info[0].userName);
	$scope.name = session_info[0].userName;
	$scope.message = "This is play controller";
	playFactory.getQuestions(function(data){
      	console.log("This is Play controller");
      		$scope.questions = data;
    });
    
    questionFactory.showQuestion($scope,function(data){
		$scope.questions.push(data);
	});

});


myApp.controller('ResultController', function ($scope, resultFactory) {
	
});

myApp.factory('loginFactory', function ($http) {
 	var factory = {};

 	factory.login = function($scope, callback){
 		$http.post("/login").success(function(output){
 			callback(output);
 		});
 	};
});

myApp.factory('homeFactory', function ($http) {
  var factory = {};

  factory.get = function(info, callback ){
  		console.log("This is the get method in homeFactory!");
  		$http.get("/home",  info[0]).success(function(output){
	          if(output.success == 1){
	    			console.log("This will get your scores from DB!");
	    			callback(output);
	          }else{
	            console.log("This else in homeFactory get method: "+output);
	        }
  		});
  	};

 
  factory.play = function(info, callback){
  		console.log("This is callback"+ callback);
  		console.log("This is info: "+info[0].userName);
		$http.post("/play", info[0]).success(function(output){
	          if(output.success == 1){
	    			console.log("You're being directed to trivia questions!");
	    			callback(output);
	          }else{
	            console.log("This else in homeFactory play method: "+output);
	        }
	  	});

	return factory;
  }

  factory.getScores = function(callback) {
  	console.log(callback);
  	$http.get("/home").success(function(output){
  		//display scores
  		callback(output)
  	});
  }
  return factory;
});


myApp.factory('questionFactory', function ($http) {
	var factory = {};

	factory.addQuestion = function (info, callback){
		$http.post("/question", info).success(function(output){
	  		 console.log(output.output);
	          if(output.success == 1){
	    			console.log("New Question added!");
	    			callback(output.output);
	          }else{
	            console.log(output.exists);
	        }
	  	});
	};

	factory.showQuestion = function (callback){
 		$http.get("/question").success(function(output){
	          if(output.success == 1){
	    			console.log("Getting user info!");
	    			callback(output);
	          }else{
	          	console.log("There is something wrong!");
	        }
	  	});
 	};
	return factory;
});


myApp.factory('playFactory', function ($http) {
	var factory = {};
	console.log("This is playFactory");

 	factory.getQuestions = function (callback){
 		$http.get("/questions").success(function(output){
 			console.log("This is output: "+output);
	          if(output.success == 1){
    			console.log("Getting user info!");
    			callback("This is success output"+output);
	          }else{
	          	console.log("There is something wrong!");
	        }
	  	});
 	};
	return factory;
});

myApp.factory('resultFactory', function ($http) {

});