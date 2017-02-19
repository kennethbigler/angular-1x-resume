// DO NOT USE 'use strict';
// a list of all the scripts I am using in my homepage
var includes = [
    // jQuery
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
    // Bootstrap
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',
    // angular
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.10/angular.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.10/angular-route.min.js',
    // My scripts
    'app/app.modules.js',
    'app/app.routes.js',
    'app/controllers/HomeController.js',
    'app/directives/lhs.js',
    'app/directives/VisualizationDirective.js',
    // Google Analytics
    'assets/js/analytics.js'
];

// iterate through and create js tags for each
includes.forEach(function (src) {
    // "use strict";
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});