var app = angular.module('myApp',['ngRoute']);

// configure routes
app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		// Home Page
		.when('/', {
			templateUrl: 'js/views/about.html',
		})
		.when('/work', {
			templateUrl: 'js/views/work.html',
		})
		.when('/classes', {
			templateUrl: 'js/views/classes.html',
		})
		.when('/activities', {
			templateUrl: 'js/views/activities.html',
		})
		.when('/projects', {
			templateUrl: 'js/views/projects.html',
		});
		/*.otherwise({
			redirectTo: '/'
		});*/


	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});
	
/*	.when('/', {
		templateUrl: 'js/views/about.html',
		controller: 'HomeController'
	})
*/