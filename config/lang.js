//////////////////////////////////////////////////////////////////////////////////////////////////////
// Localisation file
//  you can add languages please use 3166-1 for country code
//
// @license   The MIT License (MIT)  see /LICENSE
//////////////////////////////////////////////////////////////////////////////////////////////////////

var noShopText      = [];  // Displayed if site_id doesn't exist in config/key.ini
var cardsText       = [];  // Displayed
var debugTopText    = [];
var debugBottomText = [];
var returnTopText   = [];

// FR - French
noShopText["FR"]      = "Boutique non répertoriée. <br>Configurez la boutique dans key.ini ou positionnez <br>var mode = 'javascript'; <br>dans form.js";
cardsText["FR"]       = "Survolez une icône pour afficher la valeur";
debugTopText["FR"]    = "fr - debugTopText";
debugBottomText["FR"] = "Les paramètres 'vads_redirect_error_timeout' et 'vads_redirect_success_timeout' sont fixés par la variable 'returnTimeout' de form.js.<br>'vads_url_return' et 'vads_return_mode' sont fixés par la variable 'urlReturn' de form.js.";
returnTopText["FR"]   = "fr - returnTopText";

// EN - English
noShopText["EN"]      = "Undefined shop. <br>Set the shop in the key.ini file or place<br>var mode = 'javascript'; <br>in the form.js file";
cardsText["EN"]       = "Place the mouse over an icon to display the value";
debugTopText["EN"]    = "en - debugTopText";
debugBottomText["EN"] = "en - debugBottomText";
returnTopText["EN"]   = "en - returnTopText";

// End