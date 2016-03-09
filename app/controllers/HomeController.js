//HomeController.js

/*global $, app*/

app.controller('MainController', ['$scope', '$location', function ($scope, $location) {
    "use strict";
	//get the date for the bottom corner
	$scope.date = new Date();
    
    function closeNav() { $("#navbar").collapse('hide'); }
    
    $scope.menuSelection = function (n) {
        $('.active').removeClass('active');
        $('#button' + n).addClass('active');
        closeNav();
    };
    
    // set a tab as the active tab
    $scope.getClass = function (path) {
        if ($location.path() === path) {
            return 'active';
        } else { return ''; }
    };
    
    // close the navigation
    $scope.closeNav = function () { $("#navbar").collapse('hide'); };
}]);