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



var myApp = angular.module('myApp', ['ngRoute','ngSanitize','ui.bootstrap']).config(routeProvider);


myApp.controller('ctrl', function ($scope,$http,$routeParams,$timeout) {
	$http.get('database/dico.json').
    success(function(data, status, headers, config) {
      $scope.database = data;
		$scope.regtab();
    }).
    error(function(data, status, headers, config) {
      // log error
    });
	
	Object.size = function(obj) {
		var size = 0, key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	};


	
	$scope.isIcon = function (icon){
		return ((icon.search("<")==-1));
	}
	
	$scope.config=config;
	$scope.currencyTab = currencyTab;
	$scope.debug = debug;
	$scope.mode = mode;
	$scope.menu = menu;
	if (returnTimeout == "no") $scope.returnTimeout = 0;
	else $scope.returnTimeout = returnTimeout;
	$scope.returnMode = "";
	$scope.urlReturn = urlReturn;
	if (urlReturn=="detail"){
		$scope.returnMode = "GET"; 
	}
	$scope.menuSplit = function (text,i){
		return text.split('|')[i];
	}
	
	$scope.textReplace = function (str){
		return str.replace("{large}","").replace("{primary}","").replace("{success}","").replace("{info}","").replace("{warning}","").replace("{danger}","");
	}
	
	$scope.currencyTabSelect = [];
	for (item in currencyTab){
		$scope.currencyTabSelect.push({value : item, text:currencyTab[item]['text']});
	}

	
	$scope.getDescription = function (field){
		for (i=0;i<$scope.database.length;i++){
			if ($scope.database[i].Field == field){
				return $scope.database[i].Description;
			}
		}
	}
	
	for (i=0;i<$scope.config.length;i++){
		if ((Object.size($scope.config[i]) == 1||Object.size($scope.config[i]) == 2)&&!$scope.config[i]["Text"]){
			$scope.config[i]["vads_ctx_mode"] = "TEST";
			$scope.config[i]["vads_amount"] = Math.floor((Math.random() * 10000)+1).toString();
			$scope.config[i]["vads_currency"] = "978";
			$scope.config[i]["vads_action_mode"] = "INTERACTIVE";
			$scope.config[i]["vads_page_action"] = "PAYMENT";
			$scope.config[i]["vads_payment_config"] = "SINGLE";
			$scope.config[i]["vads_version"] = "V2";
			$scope.config[i]["Anchor"] = "exemple" + $scope.config.length;
			$scope.config[i]["Description"] = "Le montant total de votre commande est de $vads_amount$ payable en une seule fois";
			$scope.config[i]["HelpText"] = "Description détaillée de l'exemple";
			$scope.config[i]["Help"] = "yes";
			$scope.config[i]["Type"] = "hidden";
			$scope.config[i]["Button"] = "Payer";
			$scope.config[i]["ButtonText"] = "Payer";
			if(!$scope.config[i]["Menu"]) $scope.config[i]["Menu"] = $scope.menuSplit(menu[0],0);
			$scope.config[i]["Title"] = "Paiement simple";
		}
	}


	
	

	
	
	$scope.urlName = $routeParams.name;
	$scope.urlType = $routeParams.type;

	
	if ($scope.urlType) {
		if ($scope.urlName) {
			$scope.config = [];
			for (i=0;i<config.length;i++){
				if (config[i].Anchor == $scope.urlName){
					$scope.config.push(config[i]);
				}
			}
		}
		else {
			$scope.config = [];
			for (i=0;i<config.length;i++){
				if (config[i].Menu == $scope.urlType){
					$scope.config.push(config[i]);
				}
			}
		}
	}
	
	if($scope.config[0]) {
		if ($scope.config[0].Text) {
			document.title = pageTitle + ' - ' + $scope.textReplace($scope.menuSplit($scope.config[0].Text,0));
			document.title += ' (' + $scope.config[0].Menu + ')';
		}
		else document.title = pageTitle + ' (' + $scope.config[0].Menu + ')';
	}
	$scope.findWithAttr = function (array, attr, value) {
		for(var i = 0; i < array.length; i += 1) {
			if(array[i][attr] === value) {
				return i;
			}
		}
	}
	
	$scope.strReplace = function (str,tab,index){
		var ret = str.replace(/\$(\w+)\$/g, function(s, key) {
			var res = tab[key];
			var fixed = 2;
			if(s.search("sub")==-1){
				if (currencyTab[$scope.config[index]['vads_currency']].mult==1){
					fixed=0;
				}
				else if (currencyTab[$scope.config[index]['vads_currency']].mult==1000){
					fixed=3;
				}
				
				res=(parseInt(res)/currencyTab[$scope.config[index]['vads_currency']].mult).toFixed(fixed).toString().replace(".",",");
				
				if (currencyTab[$scope.config[index]['vads_currency']].rl=='R'){
					res = currencyTab[$scope.config[index]['vads_currency']].symbol + res;
				}
				else if (currencyTab[$scope.config[index]['vads_currency']].rl=='L'){
					res = res + currencyTab[$scope.config[index]['vads_currency']].symbol;
				}
			}
			else {
				if (currencyTab[$scope.config[index]['vads_sub_currency']].mult==1){
					fixed=0;
				}
				else if (currencyTab[$scope.config[index]['vads_sub_currency']].mult==1000){
					fixed=3;
				}
				res=(parseInt(res)/currencyTab[$scope.config[index]['vads_sub_currency']].mult).toFixed(fixed).toString().replace(".",",");
				if (currencyTab[$scope.config[index]['vads_sub_currency']].rl=='R'){
					res = currencyTab[$scope.config[index]['vads_sub_currency']].symbol + res;
				}
				else if (currencyTab[$scope.config[index]['vads_sub_currency']].rl=='L'){
					res = res + currencyTab[$scope.config[index]['vads_sub_currency']].symbol;
				}
			}
		   	return res || s;
		});
		ret = ret.replace(/\[(\w+)\]/g, function(s, key) {
		   return tab[key] || s;
		});
		return ret;
	}
	
	
	
	$scope.colSize = [];

	$scope.formShow = [];
	
	$scope.readonly = [];

	$scope.hidden = [];

	$scope.help = [];

	$scope.formNames =[];

	$scope.isCards = [];
	
	$scope.iframe = [];
	
	$scope.iframeShow = [];
	
	$scope.iframeNames = [];
	
	$scope.amount = [];
	
	$scope.isDebug = [];
	
	$scope.contrib = vads_contrib;
	
	$scope.contribValue = [];
	
	$scope.panelClass = [];
	
	$scope.toggle = [];
	
	$scope.toggleSpecial = [];
	
	$scope.currencyModel = [];
	
	$scope.url_return = [];
	
	var themeConfig = [];
	
	
	
	

	for (i=0;i<$scope.config.length;i++){
		$scope.formShow[i] = true;
		
		$scope.readonly[i] = false;
		
		$scope.url_return[i] = "";
		
		$scope.toggleSpecial = [];

		$scope.hidden[i] = false;
		
		if (vads_contrib=='true') $scope.contribValue[i]= "PayzenDemonstrator - " + $scope.config[i].Menu + "/" + $scope.config[i].Anchor ;

		$scope.help[i] = false;
		
		$scope.currencyModel[i] =[$scope.currencyTabSelect[
				$scope.findWithAttr($scope.currencyTabSelect,'value',$scope.config[i].vads_currency)],$scope.currencyTabSelect[$scope.findWithAttr($scope.currencyTabSelect,'value',$scope.config[i].vads_sub_currency)]
		];
		
		$scope.toggle[i] = [];

		$scope.isCards[i] = false;
		
		$scope.iframe[i] = false;
		
		$scope.colSize[i] = "col-md-6";
		
		$scope.panelClass[i] = "panel panel-default";
		
		if ($scope.config[i].Text){
			if ($scope.config[i].Text.search("{large}")!=-1){
				$scope.colSize[i] = "col-md-12";
			}
			if ($scope.config[i].Text.search("{primary}")!=-1){
				$scope.panelClass[i] = "panel panel-primary";
			}
			if ($scope.config[i].Text.search("{warning}")!=-1){
				$scope.panelClass[i] = "panel panel-warning";
			}
			if ($scope.config[i].Text.search("{danger}")!=-1){
				$scope.panelClass[i] = "panel panel-danger";
			}
			if ($scope.config[i].Text.search("{success}")!=-1){
				$scope.panelClass[i] = "panel panel-success";
			}
			if ($scope.config[i].Text.search("{info}")!=-1){
				$scope.panelClass[i] = "panel panel-info";
			}
		}
		
		$scope.isDebug[i] = (mode=='javascript');
		
		$scope.amount[i]=[];
		
		$scope.iframeShow[i] = false;

		$scope.formNames[i] = "form" + i;
		
		$scope.iframeNames[i] = "iframe" + i;

		if ($scope.config[i].Type == "hidden"){
		$scope.hidden[i] = true;
		$scope.readonly[i] = true;
		}

		if ($scope.config[i].Help == "yes"){
			$scope.help[i] = true;
		}

		if ($scope.config[i].Type == "readonly"){
			$scope.readonly[i] = true;
		}

		if (Array.isArray($scope.config[i].Button)){
			$scope.isCards[i] = true;
		}
		
		$scope.iframe[i] = ($scope.config[i].Iframe == "yes");
		
		
		if ($scope.config[i].vads_theme_config){
			themeConfig[i] = $scope.config[i].vads_theme_config;
			$scope.config[i].vads_theme_config = $scope.strReplace($scope.config[i].vads_theme_config,$scope.config[i],i);	
		}
	}
	
	if ($scope.config.length == 1){$scope.colSize=["col-md-10"];}


    $scope.showIframe = function(index){	
		setTimeout(function(){$scope.$apply(function(){$scope.iframeShow[index] = true;})},1500);
	}
	
	
	$scope.themeConfigUpdate = function (i){
		if ($scope.config[i].vads_theme_config){
			$scope.config[i].vads_theme_config = $scope.strReplace(themeConfig[i],$scope.config[i],i);	
		}
	}
	
	
	$scope.selectCurrency = function (index,model,vads){
		$scope.config[index][vads] = model.value;		
	}
	
	$scope.list = new Array();
	
	$scope.date = moment().utc().format('YYYYMMDDHHmmss');
	
	
	var num = Math.floor(Math.random() * 900000) + 100000;
	$scope.trans = num;
	
	$scope.compute = function(formid){
		var text = "";
		var tab = {};
		for(i=0;i<(document.forms[formid].elements.length);i++){
			if (document.forms[formid].elements[i].name.search("vads_") != -1){
				tab[document.forms[formid].elements[i].id]=document.forms[formid].elements[i].value;
			}
		}
		return tab;
		
	}
	
	
	//help = "no" => help button not displayed
	//		         helpText not displayed
	//				 no use of the dictionnary for the tooltip help (todo)
	//        		 no select (input instead)
	
	
	
	$scope.type = "text";
	
	$scope.hide = function (index){
		$scope.hidden[index] = (!$scope.hidden[index]);
	}
	

	$scope.fields = [];
	
	var listField = function (item) {
		for (var obj in item){
			var field = [];
			for (var value in item[obj]){
				if (value.search("vads_") != -1 && value.search("vads_trans_date") == -1) {
					field.push({"name" : value, "value" : item[obj][value] });
				}
			}
			$scope.fields.push(field);
		}
		
	}
	
	listField($scope.config);
	
	$scope.model = $scope.fields;
	
	$scope.regex = [];
	$scope.isRegex =[];

	
	$scope.regtab = function() {
		for (i=0 ;i<$scope.database.length;i++){
			if ($scope.database[i].Regex != ""){
				var text = $scope.database[i].Regex;
				var field = $scope.database[i].Field;
				text = text.replace('(','');
				text = text.replace(')','');
				var reg = text.split('|');
				for (j=0;j<reg.length;j++){
					$scope.regex.push({name : field, value : reg[j]});
				}
				$scope.isRegex.push(field);
			}
		}
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
	
	

	$scope.request = function(callback, index) {
		var xhr = getXMLHttpRequest();
		var debug = false;
		if($scope.isDebug[index]) debug = true;
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				callback(xhr.responseText, $scope.formNames[index],index,debug);
			}
		};

	var arg = encodeURIComponent(JSON.stringify($scope.compute($scope.formNames[index])));
	var name = $scope.config[index].Shop;
	
	if (debug && mode=='javascript'){
			formDebug($scope.formNames[index],index);
	}
	else{
	xhr.open("GET", "signature.php?arg=" + arg + "&name=" + name, true);
	xhr.send(null);
	}
	}
	
	$scope.siteId = [];	
	$scope.urlSubmit = [];
	$scope.requestSiteId = function(callback, index) {
		var xhr = getXMLHttpRequest();

		
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0) && !$scope.config[index].Text) {
				callback(xhr.responseText,$scope.formNames[index],index);
			}
		};

		var name = $scope.config[index].Shop;
		
		xhr.open("GET", "signature.php?name=" + name, true);
		xhr.send(null);
	}
	

	
	
	var formDebug = function (formid,index){
		document.forms[formid].action = "formdebug.html";
		document.forms[formid].method = "get";
		document.forms[formid].elements["signature"].value = "****";
		document.forms[formid].submit();
	}
	
	
	$scope.readData = function (sData, formid, index, debug) {
		var json=JSON.parse(sData);
		var sign = json.sign;
		var site_id = json.site_id;
		var url_forms = json.url_forms;
		if (debug){
			document.forms[formid].action = "formdebug.html";
			document.forms[formid].method = "get";
		}
		else {document.forms[formid].action = url_forms;}
		document.forms[formid].elements["vads_site_id"].value = site_id;
		document.forms[formid].elements["signature"].value = sign;


		if (!$scope.iframe[index]){
			if(document.forms[formid].elements["signature"].value){
				document.forms[formid].submit();

			}
		}
		else{
			var iframe = document.getElementById($scope.iframeNames[index]);
			var innerdoc = iframe.contentDocument || iframe.contentWindow.document;
			for (i=0;i<document.forms[formid].elements.length;i++){
				innerdoc.forms[formid].elements[i].value = document.forms[formid].elements[i].value;
			}
			if(innerdoc.forms[formid].elements["signature"].value){
				innerdoc.forms[formid].action = url_forms;
				innerdoc.forms[formid].submit();

			}
		}
	}
	
	$scope.showWarning=false;
	$scope.readDataSiteId = function (sData,formid, index) {
		var json=JSON.parse(sData);
		$scope.siteId[formid]=json.site_id;
		$scope.urlSubmit[formid]=json.url_forms;
		setTimeout(function(){$scope.$apply(function(){$scope.showWarning=true;})},1000);
		//$scope.iframeUrl[formid] = json.url_forms; 
		if (urlReturn=="detail"){
			var loc = document.location.href;
			if (document.location.href.search("demo.d.pzen.eu")!=-1){
				var ret = "http://demo.d.pzen.eu/returndebug.html?return=" + loc.replace("#","$");
				$scope.url_return[index] = ret;
			}
			else {
				var ret = "http://demo.pzen.eu/returndebug.html?return=" + loc.replace("#","$");
				$scope.url_return[index] = ret;
			}
		}
		else if(!document.forms[formid].elements["vads_url_return"].value){
			$scope.url_return[index] = document.location.href;
		}
		
		
	}
	
	$scope.location = document.location.href;
	
	
	$scope.Stringformat = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number) {
		  return args[number] === undefined ? match : args[number];
		});
	}
	
	var alertOn = true;
	$scope.cards = function (formid, name, index){
		document.forms[formid].elements["vads_payment_cards"].value = name;
		$scope.request($scope.readData,index);
		alertOn=false;
	}
	
	$scope.cardsHoover = function (formid, name, index){
		if(alertOn){
			document.forms[formid].elements["vads_payment_cards"].value = name;
			document.forms[formid].elements["vads_payment_cards"].style.backgroundColor='#dff0d8';
		}
	}
	
	$scope.cardsHooverLeave = function (formid, name, index){
		if(alertOn) {
			document.forms[formid].elements["vads_payment_cards"].value = "";
			document.forms[formid].elements["vads_payment_cards"].style.backgroundColor='#f2dede';
		}
	}
	
	$scope.iconStrReplace = function(txt){
		txt = "assets/css/logo/"+txt+".gif";
		return txt;
	}
	
	$scope.vadsEscape = function (text){
		return text.replace("vads_","");
	}
	
	$scope.strCurrency = function(item){
		var cur = "vads_currency";
		if (item.search("sub")!=-1){
			cur = "vads_sub_currency";
		}
		return cur;
	}
	
	$scope.strAmount = function(item,index,name){
		var amount = item;
		var fixed = 2;
		if ((currencyTab[$scope.config[index][$scope.strCurrency(name)]].mult)==1){
			fixed = 0;
		}
		else if ((currencyTab[$scope.config[index][$scope.strCurrency(name)]].mult)==1000){
			fixed = 3;
		}
		amount = (parseInt(amount)/currencyTab[$scope.config[index][$scope.strCurrency(name)]].mult).toFixed(fixed).toString().replace(".",",");
		$scope.amount[index][name]=amount;
		
	}
	  	  
});

var urlreturn = '/'+menu[0].split('|')[0];

function routeProvider ($routeProvider){
	$routeProvider
		.when('/:type/:name/',{templateUrl:'formdemotemplate.html', controller:'ctrl'})
		.when('/:type/',{templateUrl:'formdemotemplate.html', controller:'ctrl'})
		.otherwise({redirectTo : urlreturn});
};