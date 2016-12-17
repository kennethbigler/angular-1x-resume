/*global $, app*/

// testing variable to get access to angular scope
// var test = angular.element($('#navbar')).scope();

app.controller('HomeController', ['$scope', '$location', '$log', function ($scope, $location, $log) {
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
    
    var grades = {
        data : [
            // Freshman
            {"gpa" : 3.563, "units" : 19},
            {"gpa" : 3.765, "units" : 17},
            {"gpa" : 3.494, "units" : 18},
            // Sophomore
            {"gpa" : 3.672, "units" : 18},
            {"gpa" : 3.917, "units" : 18},
            {"gpa" : 3.761, "units" : 18},
            // Junior
            {"gpa" : 3.753, "units" : 19},
            {"gpa" : 3.711, "units" : 18},
            {"gpa" : 3.737, "units" : 19},
            // Senior
            {"gpa" : 3.800, "units" : 20},
            {"gpa" : 3.476, "units" : 17},
            {"gpa" : 3.457, "units" : 14},
            // Graduate
            {"gpa" : 4.000, "units" : 4},
            {"gpa" : 3.850, "units" : 8},
            {"gpa" : 3.833, "units" : 9},
            {"gpa" : 4.000, "units" : 4}
        ],
        max : 0,
        avg : 0,
        xAxis : "Quarter",
        yAxis : "GPA",
        height : 150,
        width : 320
    }, i, sum = 0, usum = 0, max = 0;

    // find max and sums
    for (i = 0; i < grades.data.length; i += 1) {
        // find max to fit results into the graph
        if (grades.data[i].gpa > max) {
            max = (grades.data[i].gpa - 2);
        }
        // normalize the data
        grades.data[i].gpa = grades.data[i].gpa - 2;
        // find the sums
        sum += grades.data[i].gpa * grades.data[i].units;
        usum += grades.data[i].units;
    }
    grades.max = max;
    grades.avg = sum / usum;
    // set -1 pos to the average so we don't get undef access
    grades.data[-1] = {"gpa" : grades.avg};
    
    // set data to the view
    $scope.grades = grades;
    $log.log("GPA: all data is \"-2\" so that the graph looks more interesting");
}]);