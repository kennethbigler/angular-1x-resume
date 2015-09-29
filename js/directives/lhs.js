/*global app*/

app.directive('lhs', function () {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: 'js/directives/lhs.html',
        controller: function ($scope, quote) {
            $scope.tsla = quote.getQ('tsla');
            setInterval(function () {
                $scope.$apply(function () { $scope.tsla = quote.getQ('tsla'); });
            }, 60000);
        }
    };
});