
//mode : javascript,php...
//si javascript alors mode debug
//debug : html,text ou no

var menu = ["Paiement simple", "Les paiements", "Les Abonnements", "Sepa", "Presse"];

var mode = "php";

var debug = "text";

var currencyTab = {"978" : {symbol : "€", mult : "100"},
				   "840" : {symbol : "$", mult : "100"},
				   "826" : {symbol : "£", mult : "100"},
				   "756" : {symbol : "CHF", mult : "100"},
				   "953" : {symbol : "CFP", mult : "1"},
				   "392" : {symbol : "¥", mult : "1"},
				   "124" : {symbol : "CAD", mult : "100"},
				  };