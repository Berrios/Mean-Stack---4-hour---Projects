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
	.when('/topic/:id', {
		templateUrl: '/topic.html',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: '/user.html',
		controller: 'userController'
	})
	.otherwise({
		redirectTo: '/'
	})
})
