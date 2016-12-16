/*global app*/
// configure routes
app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/about.html'
            /*controller: 'HomeController'*/
        }).when('/work', {
            templateUrl: 'app/views/work.html'
        }).when('/classes', {
            templateUrl: 'app/views/classes.html'
        }).when('/activities', {
            templateUrl: 'app/views/activities.html'
        }).when('/projects', {
            templateUrl: 'app/views/projects.html'
        }).otherwise({ redirectTo: '/' });
});