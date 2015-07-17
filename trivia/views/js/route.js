// ngRoute is deep linking service that handles routes 
var myApp = angular.module('myApp', ['ngRoute']);

//config function uses $routeProvider method of ngRoute and uses when and otherwise can be used to load controllers as well. 
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{
			//templateUrl looks for additional views to load and associated controllers. 
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		}). 
		when('/home',{
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		}). 
		when('/question',{
			templateUrl: 'partials/question.html',
			controller: 'QuestionController'
		}). 
		when('/play',{
			templateUrl: 'partials/play.html',
			controller: 'PlayController'
		}). 
		when('/questions',{
			templateUrl: 'partials/play.html',
			controller: 'PlayController'
		}). 
		when('/result',{
			templateUrl: 'partials/result.html',
			controller: 'ResultController'
		}). 
		when('/login',{
			//templateUrl looks for additional views to load and associated controllers. 
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});
}]);
