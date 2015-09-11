app.directive('lhs', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/lhs.html',
    controller: ['$scope', 'quote', 'nquote', function($scope, quote, nquote) {
		//Set up variables I will need to display
		$scope.tsla = {
			total: 0,
			change: 0,
			color: {"color":"green"}
		}
		//Get query results and find what I need
		quote.success(function(data) {
			//console.log(data);
			$scope.tsla.total = data.query.results.quote.LastTradePriceOnly;
			$scope.tsla.change = data.query.results.quote.Change;
			//set the color if possitive of negative
			if ($scope.tsla.change >= 0) {
					$scope.tsla.color = {"color":"green"};
				} else {
					$scope.tsla.color = {"color":"red"};
				};
				//console.log($scope.tsla);
		});

		//just a copy of what I did above, but for NetApp
		$scope.ntap = {
			total: 0,
			change: 0,
			color: {"color":"green"}
		}
		nquote.success(function(data) {
			//console.log(data);
			$scope.ntap.total = data.query.results.quote.LastTradePriceOnly;
			$scope.ntap.change = data.query.results.quote.Change;
			if ($scope.ntap.change >= 0) {
					$scope.ntap.color = {"color":"green"};
				} else {
					$scope.ntap.color = {"color":"red"};
				};
				//console.log($scope.tsla);
		});

	}]
  };
});