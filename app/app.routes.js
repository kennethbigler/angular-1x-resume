/*global app*/

// configure routes
// pass in $locationProvider requires .htaccess file
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
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
});