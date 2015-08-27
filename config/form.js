var menu = ["demo|Démo","simple|Paiements", "multi|Paiements fractionnés", "recur|Paiements récurrents","abo|Abonnements", "sepa|Sepa", "press|Presse"];



var mode = "php"; //'php' ou 'javascript'. Le mode javascript fait fonctionner l'application en mode debug, sans utiliser de php.

var debug = "html"; //'html', 'text' ou 'no'. Définie la présence de la case debug ainsi que la forme de l'affichage de champs par défault sur la page debug

var pageTitle = "Demo Payzen";

var ReturnTimeout = "10"; // 0..999 ou 'no'. Défini le temps avant retour automatique si urlReturn vaut 'detail'.

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
                    '504' : {symbol : 'dh', mult :'100', text : '504 - MAD Dirham Marocain (د.م.)', rl : 'L'},
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

//urlreturn : self ou detail

var urlReturn = "detail"; //self ou detail. detail permet à la page de paiement d'effectuer un retour sur une page qui affiche les champs transmis lors du paiement.
