//HomeController.js

/*global $, app*/

app.controller('MainController', function ($scope) {
    "use strict";
	//get the date for the bottom corner
	$scope.date = new Date();
    
    function closeNav() { $("#navbar").collapse('hide'); }
    
    $scope.menuSelection = function (n) {
        $('.active').removeClass('active');
        $('#button' + n).addClass('active');
        closeNav();
    };
});