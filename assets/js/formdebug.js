/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Lyra-Network & contributor
 *
 * PayZen Demonstrator
 * This project provide an easy way to test 
 * and demonstrate all the Payzen Capabilities 
 *
 * AngularJS and PHP  
 *
 * Author link : www.payzen.eu 
 *               www.lyra-network.com
 *
 * NOTICE OF LICENSE
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author    Arnold Mahe <arnoldmahe@gmail.com>
 * @copyright 2015 Lyra-Network and contributors
 * @license   The MIT License (MIT)
 * @version   X.X.X (revision xxxxxxx)
*/ 

var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('ctrl', function ($scope,$http) {
	$http.get('database/dico.json').
    success(function(data, status, headers, config) {
      $scope.database = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
	
	$scope.getDescription = function (field){
		for (i=0;i<$scope.database.length;i++){
			if ($scope.database[i].Field == field){
				return $scope.database[i].Description;
			}
		}
	}
	
	
	$scope.language = language;
	$scope.returnTopText = returnTopText;
	$scope.debugTopText = debugTopText;
	$scope.debugBottomText = debugBottomText;
	var urlParams = [];
	var shop ;
	$scope.urlSubmit = "" ;
	var urlReturn = "" ;
	$scope.html = (debug=='html');
	$scope.mode = mode;
	$scope.toggle = [];
	(window.onpopstate = function () {
		var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);


		var i = 0;
		while (match = search.exec(query)){
		   urlParams[i]=[];
		   $scope.toggle[i] = false;
		   urlParams[i]["name"]=(decode(match[1]));
		   urlParams[i]["value"]=(decode(match[2]));
		   if (decode(match[1])=='shop') shop = decode(match[2]);
		   if (decode(match[1])=='return') urlReturn = decode(match[2]).replace("$","#");
		   if (decode(match[1])=='urlSubmit') $scope.urlSubmit = decode(match[2]);
		   i++;
		}
	})();

	$scope.return = function (){
		document.location.href = urlReturn;
	}
	
	$scope.prec = function(){
		history.back();
	}
	
	function compare(a,b) {
	  if (a.name < b.name)
		return -1;
	  if (a.name > b.name)
		return 1;
	  return 0;
	}
	
	urlParams.sort(compare);

	$scope.fields = urlParams;
	
	
	$scope.send = function (formid) {
		document.forms[formid].action = $scope.urlSubmit;
		if(document.forms[formid].elements["signature"].value){
			document.forms[formid].submit();

		}
	}
	
	
	
	
});