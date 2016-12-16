/*global app*/

app.directive('lhs', function () {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: 'app/directives/lhs.html',
        controller: function ($scope, quote) {
            $scope.ntap = quote.getQ('ntap');
            $scope.tsla = quote.getQ('tsla');
            setInterval(function () {
                $scope.$apply(function () { $scope.ntap = quote.getQ('ntap'); $scope.tsla = quote.getQ('tsla'); });
            }, 60000);
        }
    };
});