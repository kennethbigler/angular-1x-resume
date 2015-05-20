// JavaScript Document

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54229318-1', 'auto');
ga('send', 'pageview');

/* This is code to load in the Current NetApp stock price
 * I am using the Yahoo! Stock API: YQL
 * To change the stock that loads, change the symbol variable
 * console.log(data) is for debugging and can be commented out or removed
 */
function getData() {
	var url = "http://query.yahooapis.com/v1/public/yql";
	var symbol = "tsla";
	var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + symbol + "')");

	$.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
		.done(function (data) {
		$("#tresult").html("Tesla Stock Quote: $" + data.query.results.quote.LastTradePriceOnly + "&nbsp;&nbsp;(" + data.query.results.quote.Change + ")");
		//console.log(data);
	})
		.fail(function (jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
			$("#tresult").text('Request failed: ' + err);
	});
	
	var symbol = "ntap";
	var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + symbol + "')");

	$.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
		.done(function (data) {
		$("#nresult").html("NetApp Stock Quote: $" + data.query.results.quote.LastTradePriceOnly + "&nbsp;&nbsp;(" + data.query.results.quote.Change + ")");
		//console.log(data);
	})
		.fail(function (jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
			$("#nresult").text('Request failed: ' + err);
	});
}

function checkDate() {
	function makeArray() {
		for (i = 0; i < makeArray.arguments.length; i ++)
			this[i + 1] = makeArray.arguments[i];
	}
	
	var months = new makeArray('January','February','March','April','May',
		'June','July','August','September','October','November','December');
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var yy = date.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	
	document.getElementById("myDate").innerHTML = (months[month] + " " + day + ", " + year);
}