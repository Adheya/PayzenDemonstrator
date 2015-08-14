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

var myApp = angular.module('myApp', []);
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
	
	function utf8_encode(argString) {
	  //  discuss at: http://phpjs.org/functions/utf8_encode/
	  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: sowberry
	  // improved by: Jack
	  // improved by: Yves Sucaet
	  // improved by: kirilloid
	  // bugfixed by: Onno Marsman
	  // bugfixed by: Onno Marsman
	  // bugfixed by: Ulrich
	  // bugfixed by: Rafal Kukawski
	  // bugfixed by: kirilloid
	  //   example 1: utf8_encode('Kevin van Zonneveld');
	  //   returns 1: 'Kevin van Zonneveld'

	  if (argString === null || typeof argString === 'undefined') {
		return '';
	  }

	  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	  var utftext = '',
		start, end, stringl = 0;

	  start = end = 0;
	  stringl = string.length;
	  for (var n = 0; n < stringl; n++) {
		var c1 = string.charCodeAt(n);
		var enc = null;

		if (c1 < 128) {
		  end++;
		} else if (c1 > 127 && c1 < 2048) {
		  enc = String.fromCharCode(
			(c1 >> 6) | 192, (c1 & 63) | 128
		  );
		} else if ((c1 & 0xF800) != 0xD800) {
		  enc = String.fromCharCode(
			(c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
		  );
		} else { // surrogate pairs
		  if ((c1 & 0xFC00) != 0xD800) {
			throw new RangeError('Unmatched trail surrogate at ' + n);
		  }
		  var c2 = string.charCodeAt(++n);
		  if ((c2 & 0xFC00) != 0xDC00) {
			throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
		  }
		  c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
		  enc = String.fromCharCode(
			(c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
		  );
		}
		if (enc !== null) {
		  if (end > start) {
			utftext += string.slice(start, end);
		  }
		  utftext += enc;
		  start = end = n + 1;
		}
	  }

	  if (end > start) {
		utftext += string.slice(start, stringl);
	  }

	  return utftext;
	}
	
	var urlParams = [];
	var shop ;
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
		   i++;
		}
	})();

	function compare(a,b) {
	  if (a.name < b.name)
		return -1;
	  if (a.name > b.name)
		return 1;
	  return 0;
	}
	
	urlParams.sort(compare);

	$scope.fields = urlParams;
	
	$scope.compute = function(formid){
		var text = "";
		var tab = {};
		for(i=0;i<(document.forms[formid].elements.length);i++){
			if (document.forms[formid].elements[i].name.search("vads_") != -1){
				tab[document.forms[formid].elements[i].id]=utf8_encode(document.forms[formid].elements[i].value);
			}
		}
		return tab;
		
	}
	
	function getXMLHttpRequest() {
		var xhr = null;

		if (window.XMLHttpRequest || window.ActiveXObject) {
			if (window.ActiveXObject) {
				try {
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				} catch(e) {
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
			} else {
				xhr = new XMLHttpRequest(); 
			}
		} else {
			alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
			return null;
		}

		return xhr;
	}
	
	$scope.request = function(callback) {
		var xhr = getXMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				callback(xhr.responseText, "form1");
			}
		};

	var arg = encodeURIComponent(JSON.stringify($scope.compute("form1")));
	var name = shop;
	
	xhr.open("GET", "signature.php?arg=" + arg + "&name=" + name, true);
	xhr.send(null);
	}
	
	$scope.readData = function (sData, formid) {
		var json=JSON.parse(sData);
		var sign = json.sign;
		var site_id = json.site_id;
		var url_forms = json.url_forms;
		document.forms[formid].action = url_forms;
		document.forms[formid].elements["vads_site_id"].value = site_id;
		document.forms[formid].elements["signature"].value = sign;
		if(document.forms[formid].elements["signature"].value){
			document.forms[formid].submit();

		}
	}
	
	
	
	
});