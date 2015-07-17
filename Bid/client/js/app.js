// ngRoute is deep linking service that handles routes 
var myApp = angular.module('myApp', ['ngRoute']);

//config function uses $routeProvider method of ngRoute and uses when and otherwise can be used to load controllers as well. 
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{
			//templateUrl looks for additional views to load and associated controllers. 
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		}). 
		when('/bids',{
			templateUrl: 'partials/bids.html',
			controller: 'BidsController'
		}). 
		when('/products',{
			templateUrl: 'partials/products.html',
			controller: 'ProductsController'
		}). 
		when('/results',{
			templateUrl: 'partials/results.html',
			controller: 'ResultsController'
		}). 
		when('/login',{
			//templateUrl looks for additional views to load and associated controllers. 
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		})
		;
}]);


