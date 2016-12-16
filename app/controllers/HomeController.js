/*global $, app*/

app.controller('HomeController', ['$scope', '$location', function ($scope, $location) {
    "use strict";
	//get the date for the bottom corner
    $scope.imgURL = "assets/img/";
    
    // set a tab as the active tab
    $scope.getClass = function (path) {
        if ($location.path() === path) {
            return 'active';
        } else { return ''; }
    };
    
    // close the navigation
    $scope.closeNav = function () { $("#navbar").collapse('hide'); };
}]);