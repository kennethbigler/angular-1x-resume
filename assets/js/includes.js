// a list of all the scripts I am using in my homepage
var includes = [
    'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular-route.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular-animate.min.js',
    'assets/js/analytics.js',
    'app/app.modules.js',
    'app/app.routes.js',
    'app/directives/lhs.js',
    'app/controllers/HomeController.js'
];

// iterate through and create js tags for each
includes.forEach(function (src) {
    "use strict";
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});