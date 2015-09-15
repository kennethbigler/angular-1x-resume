//HomeController.js
//This is the first query done to get the Tesla Stock Quote
app.factory('quote', ['$http', function($http) {
	var url = "http://query.yahooapis.com/v1/public/yql";
	var symbol = "tsla";
	var qstring = "select * from yahoo.finance.quotes where symbol in ('" + symbol + "')";

	return $http.get(url + '?q=' + qstring + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env") 
		.success(function(data) {
			return data;
		}) 
		.error(function(err) {
			return err;
		});
}]);

//Second Query doen to get the NetApp Stock Quote
app.factory('nquote', ['$http', function($http) {
	var url = "http://query.yahooapis.com/v1/public/yql";
	var symbol = "ntap";
	var qstring = "select * from yahoo.finance.quotes where symbol in ('" + symbol + "')";

	return $http.get(url + '?q=' + qstring + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env") 
		.success(function(data) {
			return data;
		}) 
		.error(function(err) {
			return err;
		});
}]);

app.controller('MainController', ['$scope', function($scope) {
	//get the date for the bottom corner
	$scope.date = new Date();
}]);