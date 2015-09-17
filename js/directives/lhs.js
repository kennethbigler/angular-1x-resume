app.directive('lhs', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/lhs.html',
    controller: ['$scope', 'quote', function($scope, quote) {
		$scope.tsla = quote.getQ('tsla');
		$scope.ntap = quote.getQ('ntap');
	}]
  };
});