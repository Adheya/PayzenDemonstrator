//////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Base parameters
//  - see key.ini
//  - see demo.form.js
//
//////////////////////////////////////////////////////////////////////////////////////////////////////


//  menu : define menu to display
//   syntax ["url|Text", …]
//
var menu = ["demo|Démo","simple|Paiements", "multi|Paiements fractionnés", "recur|Paiements récurrents","abo|Abonnements", "sepa|Sepa", "press|Presse"];


//  pageTitle : define the HTML page Title
//
var pageTitle = "Demo Payzen";


//  mode : define if it's simultation or test
//   javascript : simulation mode - no call to payzen is done, can be used for evaluation or education without payzen shop
//   php        : use the PHP wrapper to calculate and veify signature and allow to call Payzen using key.ini parameters
//       others languages can be added
//
var mode = "javascript";


//  urlReturn : allows to overide the shop parameters to force return to the script
//               this is done by adding 'vads_url_return' to the form and 'vads_return_mode' in GET mode
//   self   : when the payor hit "retun to shop" he'll be redirected to the script page
//   detail : with this option an extra page is added to desplai the parameters returned by Payzen
//   no     : return will be done accordling to Shop parameters (no parameters added to the submited form)
//
var urlReturn = "detail"; //self ou detail. detail permet à la page de paiement d'effectuer un retour sur une page qui affiche les champs transmis lors du paiement.


//  returnTimeout : if setup will setup an autmatic timeout using 'vads_redirect_error_timeout' 'vads_redirect_success_timeout'
//     numeric value : 0 will force an automatic return without displaying the paiement ticket page
//                   : 1 to 600 will wait this time (in seconds) before performing the automatic return
//     no            : no automatic return (no parameters added to the submited form)
//
<<<<<<< HEAD
var returnTimeout = "10";
=======
var ReturnTimeout = "10";
>>>>>>> origin/master

//  debug : allows to display an intermediate page with the parameters
//   html : displays as an html form the parmameters submited to Payzen
//   text : displays as key values the parameters
//   no   : "debut" checkbox not displayed
//
//  note about urlReturn & returnTimeout
//  note about javascript
//
var debug = "html";


// currencyTab : define Currency table to display Human readable informations on the examples :)
//
//
var currencyTab = { '978' : {symbol : '€', mult :'100', text : '978 - EUR Euro (€)', rl : 'L'},
                    '756' : {symbol : 'CHF', mult :'100', text : '756 - CHF Franc Suisse (CHF)', rl : 'L'},
                    '826' : {symbol : '£', mult :'100', text : '826 - GBP Livre Sterling (£)', rl : 'L'},
                    '840' : {symbol : '$', mult :'100', text : '840 - USD Dollar USA ($)', rl : 'L'},
                    '124' : {symbol : '$', mult :'100', text : '124 - CAD Dollar Canadien ($)', rl : 'L'},
                    '953' : {symbol : 'FCFP', mult :'1', text : '953 - CFP Franc Pacifique (FCFP)', rl : 'L'},
                    '392' : {symbol : '¥', mult :'1', text : '392 - JPY Yen Japonais (¥)', rl : 'L'},
                    '784' : {symbol : 'dh', mult :'100', text : '784 - AED UAE Dirham (dh)', rl : 'L'},
                    '032' : {symbol : '$', mult :'100', text : '032 - ARS Peso Argentin ($)', rl : 'L'},
                    '036' : {symbol : '$', mult :'100', text : '036 - AUD Dollar Australien ($)', rl : 'L'},
                    '048' : {symbol : 'din', mult :'1000', text : '048 - BHD Bahraini Dinar (din)', rl : 'L'},
                    '986' : {symbol : 'R$', mult :'100', text : '986 - BRL Real de Brésil (R$)', rl : 'L'},
                    '152' : {symbol : '$', mult :'1', text : '152 - CLP Peso Chilien ($)', rl : 'L'},
                    '156' : {symbol : 'Ұ', mult :'100', text : '156 - CNY Yuan Renminbi Chinois (Ұ)', rl : 'L'},
                    '170' : {symbol : '$', mult :'100', text : '170 - COP Peso Colombien ($)', rl : 'L'},
                    '203' : {symbol : 'Kč', mult :'100', text : '203 - CZK Couronne Tchèque (Kč)', rl : 'R'},
                    '208' : {symbol : 'kr', mult :'100', text : '208 - DKK Couronne Danoise (kr.)', rl : 'R'},
                    '344' : {symbol : '$', mult :'100', text : '344 - HKD Dollar de Hong Kong ($)', rl : 'L'},
                    '348' : {symbol : 'Ft', mult :'100', text : '348 - HUF Forint Hongrois (Ft)', rl : 'L'},
                    '360' : {symbol : 'Rp', mult :'100', text : '360 - IDR Rupiah indonésienne (Rp)', rl : 'L'},
                    '376' : {symbol : '₪', mult :'100', text : '376 - ILS Israeli Sheqel (₪)', rl : 'L'},
                    '356' : {symbol : '₹', mult :'100', text : '356 - INR Roupie Indienne (₹)', rl : 'L'},
                    '352' : {symbol : 'kr', mult :'1', text : '352 - ISK Couronne islandaise (kr)', rl : 'L'},
                    '410' : {symbol : '₩', mult :'100', text : '410 - KPW Won de Corée du Sud (₩)', rl : 'L'},
                    '414' : {symbol : 'din', mult :'1000', text : '414 - KWD Dinar Koweïtien (din)', rl : 'L'},
                    '504' : {symbol : 'dh', mult :'100', text : '504 - MAD Dirham Marocain (ﺩ.ﻡ.)', rl : 'L'},
                    '484' : {symbol : '$', mult :'100', text : '484 - MXN Peso mexicain ($)', rl : 'L'},
                    '458' : {symbol : 'RM', mult :'100', text : '458 - MYR Ringgit malais (RM)', rl : 'L'},
                    '578' : {symbol : 'kr', mult :'100', text : '578 - NOK Couronne Norvégienne (kr)', rl : 'R'},
                    '554' : {symbol : '$', mult :'100', text : '554 - NZD Dollar Néo-zélandais ($)', rl : 'L'},
                    '068' : {symbol : 'Bs.', mult :'100', text : '068 - OB Boliviano de Bolivie (Bs.)', rl : 'L'},
                    '608' : {symbol : '₱', mult :'100', text : '608 - PHP Peso philippin (₱)', rl : 'L'},
                    '985' : {symbol : 'zł', mult :'100', text : '985 - PLN Złoty Polonais (zł)', rl : 'R'},
                    '600' : {symbol : '₲', mult :'1', text : '600 - PYG Guarani Paraguayen (₲)', rl : 'L'},
                    '643' : {symbol : '₽', mult :'100', text : '643 - RUB Rouble russe (₽)', rl : 'R'},
                    '682' : {symbol : 'Rial', mult :'100', text : '682 - SAR Saudi Riyal (Rial)', rl : 'L'},
                    '752' : {symbol : 'kr', mult :'100', text : '752 - SEK Couronne Suédoise (kr)', rl : 'L'},
                    '702' : {symbol : '$', mult :'100', text : '702 - SGD Dollar de Singapour ($)', rl : 'L'},
                    '764' : {symbol : '฿', mult :'100', text : '764 - THB Baht thailandais (฿)', rl : 'L'},
                    '788' : {symbol : 'din', mult :'1000', text : '788 - TND Dinar Tunisien (din)', rl : 'L'},
                    '949' : {symbol : 'TL', mult :'100', text : '949 - TRY Nouvelle Livre Turque (TL)', rl : 'L'},
                    '901' : {symbol : '$', mult :'100', text : '901 - TWD Nouveau dollar de Taïwan ($)', rl : 'L'},
                    '840' : {symbol : '$', mult :'100', text : '840 - USD Dollar USA ($)', rl : 'L'},
                    '710' : {symbol : 'R', mult :'100', text : '710 - ZAR Rand Sud-africain (R)', rl : 'L'},
                  };
// end
