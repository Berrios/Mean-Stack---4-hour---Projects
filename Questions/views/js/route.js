// ngRoute is deep linking service that handles routes 
var myApp = angular.module('myApp', ['ngRoute']);

//config function uses $routeProvider method of ngRoute and uses when and otherwise can be used to load controllers as well. 
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{
			//templateUrl looks for additional views to load and associated controllers. 
			templateUrl: 'partials/home.ejs',
			controller: 'HomeController'
		}). 
		when('/home',{
			templateUrl: 'partials/home.ejs',
			controller: 'HomeController'
		}). 
		when('/newUser',{
			templateUrl: 'partials/home.ejs',
			controller: 'HomeController'
		}).
		when('/new_question',{
			templateUrl: 'partials/new_question.ejs',
			controller: 'QuestionController'
		}). 
		when('/new_answer',{
			templateUrl: 'partials/new_answer.ejs',
			controller: 'AnswerController'
		}). 
		when('/question',{
			templateUrl: 'partials/question.ejs',
			controller: 'QuestionController'
		}). 
		when('/result',{
			templateUrl: 'partials/result.ejs',
			controller: 'ResultController'
		});
}]);
