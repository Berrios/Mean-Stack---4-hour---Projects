var session_info = [];
var users = [];
var questionInfo = [];

/* 
********  CONTROLLERS *********
*/
myApp.controller('HomeController', function ($scope, homeFactory) {
 var newUser = [];

 	// new_newUser = prompt("Please enter your name!", "");
 	// newUser.push({name: new_newUser});
 	// session_info.push({name: new_newUser});
 	// console.log("This is new_newUser array index[0]: "+newUser[0].name);
 	// 	data = newUser[0].name;
 	// homeFactory.saveUser(data, function(callback){
 	// 		$scope.callback;
 	// });


});

myApp.controller('QuestionController', function ($scope, questionFactory) {
	
	$scope.submit = function(){
		questionInfo.push({question: $scope.question, description: $scope.description});
		questionFactory.addQuestion($scope, function(callback){
			console.log(callback);
			$scope.callback;
		})
	}
});

myApp.controller('AnswerController', function ($scope, answerFactory) {
	
});


myApp.controller('ResultController', function ($scope, resultFactory) {
	
});


/* 
********  FACTORIES *********
*/


myApp.factory('homeFactory', function ($http) {
  var factory = {};
  		// factory.saveUser = function (data, callback){
  		// 	console.log("1: "+data);
  		// 	$http.post("/newUser", data).success(function(output){
  		// 		console.log("2: "+data);
  		// 		if(output.success == 1){
  		// 			 console.log("3: "+data);
	   //  			console.log("You have saved the user Name!");
	   //  			callback(output);
	   //        }else{
	   //          console.log("You Failed to save the user Name!");
	   //      }
  		// 	});
  		// }
	return factory;
});


myApp.factory('questionFactory', function ($http) {
	var factory = {};
	factory.addQuestion = function (info, callback){
			console.log("This is addQuestion in questionFactory: "+ info.question);
		$http.post("/new_question", info).success(function(output){
			console.log("New question added!");
			callback(output);
		});
	}
	return factory;
});


myApp.factory('answerFactory', function ($http) {
	var factory = {};

	return factory;
});

myApp.factory('resultFactory', function ($http) {
	var factory = {};

	return factory;
});