app.directive('lhs', function () {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: 'js/directives/lhs.html',
        controller: function ($scope, quote) {
            $scope.tsla = quote.getQ('tsla');
        }
    };
});