/*global $, angular*/
var app = angular.module('myApp', ['ngRoute'])
        //This is the query done to get the Stock Quotes
        .factory('quote', function ($http) {
            "use strict";
            var factory = {},
                q = {
                    total:	0,
                    change: 0,
                    color:	{"color": "red"}
                };
            // add server query function to get stock information
            factory.getQ = function (s) {
                var url = "http://query.yahooapis.com/v1/public/yql",
                    symbol = s,
                    qstring = "SELECT * FROM yahoo.finance.quotes WHERE symbol in ('" + symbol + "')";
                $http.get(url + '?q=' + qstring + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
                    .success(function (data) {
                        //$log.log(data);
                        //retrieve specific information to display
                        q.total = data.query.results.quote.LastTradePriceOnly;
                        q.change = data.query.results.quote.Change;
                        //change the color to simbolize possitive or negative change
                        if (q.change >= 0) {
                            q.color = {"color": "green"};
                        } else {
                            q.color = {"color": "red"};
                        }
                        return q;
                    }).error(function (err) { return err; });
                return q;
            };
            return factory;
        });