var menu = ["demo|Démo","simple|Paiements", "multi|Paiements fractionnés", "recur|Paiements récurrents","abo|Abonnements", "sepa|Sepa", "press|Presse"];

var mode = "php";

var debug = "html";

var currencyTab = {"978" : {symbol : "€", mult : "100", text : "Euros"},
				   "840" : {symbol : "$", mult : "100"},
				   "826" : {symbol : "£", mult : "100"},
				   "756" : {symbol : "CHF", mult : "100"},
				   "953" : {symbol : "CFP", mult : "1"},
				   "392" : {symbol : "¥", mult : "1"},
				   "124" : {symbol : "CAD", mult : "100"},
				   "788" : {symbol : "TND", mult : "1000"},
				  };

//urlreturn : self ou detail

var urlReturn = "detail";
