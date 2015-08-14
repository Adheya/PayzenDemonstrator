var menu = ["demo|Démo","paiementsimple|Paiement simple", "paiements|Les paiements", "abonnements|Les Abonnements", "sepa|Sepa", "presse|Presse"];

var mode = "php";

var debug = "html";

var currencyTab = {"978" : {symbol : "€", mult : "100"},
				   "840" : {symbol : "$", mult : "100"},
				   "826" : {symbol : "£", mult : "100"},
				   "756" : {symbol : "CHF", mult : "100"},
				   "953" : {symbol : "CFP", mult : "1"},
				   "392" : {symbol : "¥", mult : "1"},
				   "124" : {symbol : "CAD", mult : "100"},
				  };

//urlreturn : self ou detail

var urlReturn = "detail";