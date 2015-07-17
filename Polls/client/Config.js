var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/main.html',
		controller: 'mainController'
	})
	.when('/dashboard', {
		templateUrl: '/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/create', {
		templateUrl: '/create.html',
		controller: 'pollsController'
	})
	.when('/votes/:id', {
		templateUrl: '/votes.html',
		controller: 'votesController'
	})
	.when('/poll/:id', {
		templateUrl: '/dashboard.html',
		controller: 'dashboardController'
	})
	.otherwise({
		redirectTo: '/'
	})
})
