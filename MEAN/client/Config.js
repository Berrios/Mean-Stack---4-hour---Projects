var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/dashboard.html',
		controller: 'mainController'
	})
	.when('/dashboard', {
		templateUrl: '/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/create', {
		templateUrl: '/create.html',
		controller: 'questionsController'
	})
	.when('/show', {
		templateUrl: '/show.html',
		controller: 'showController'
	})
	.when('/show/:id', {
		templateUrl: '/show.html',
		controller: 'showController'
	})
	.when('/answer/:id', {
		templateUrl: '/reply.html',
		controller: 'replyController'
	})
	.otherwise({
		redirectTo: '/'
	})
})
