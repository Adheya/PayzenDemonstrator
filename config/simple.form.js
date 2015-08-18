var configs =[

// Présentation
{
    "Menu": "simple",
    "Text":"{large}{primary}Exemples de paiements simple|<p>Cette page montre un ensemble d'exemple du plus simple à une gestion complète des informations de l'acheteur, du panier de commande et aux informations anlalytiques liées à la commande.</p>"
},

// Exemple très simple 
{
    "Shop":"DemoGO",
    "Anchor":"PaiementMinimal",
    "Menu": "simple",
    "Title": "Paramètres minimum",
    "Description":"Paiement le plus simple possible avec uniquement les paramètres obligatoires.<br>les moyens de paiement sont proposés par Payzen sur une page intermédiaire.<br>Montant de $vads_amount$",
    "HelpText":"Liste minimale des paramètres pour réaliser un paiement.<br><code>vads_payment_cards</code> n'étant pas défini tous les moyens de paiement de la boutique seront proposés.",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_currency"],
    "Input":["vads_amount"],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":(Math.floor((Math.random() * 90) + 51)*10),

    "ButtonText":"Je paye par carte"
},

// Paiement simple avec clic sur carte et un peu plus d'info 
{
    "Shop":"DemoGO",
    "Anchor":"PaiementMinimalAvecCarte",
    "Menu": "simple",
    "Title": "Choix de la carte sur le site",
    "Description":"Dans cet exemple le paramètre <code>vads_payment_cards</code> ([Button]) est ajouté automatiquement lors du choix du moyen de paiement ceci permet d'aller directement sur la page de paiement.<br>Et nous envoyons un peu plus de paramètres au formulaire&nbsp: l'email et le prénom et nom que vous pouvez modifier<br>Montant de $vads_amount$",
    "HelpText":"Dans cet exemple nous envoyons aussi à Payzen les champs <code>vads_cust_fist_name</code>, <code>vads_cust_last_name</code> et <code>vads_cust_email</code>.<br>Il est aussi possible d'envoyer l'adresse de facturation, de livraison et le panier, ces informations étant obligatoires pour certains moyens de paiement.",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_cust_email","vads_payment_cards"],
    "Input":["vads_cust_fist_name","vads_cust_last_name"],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":(Math.floor((Math.random() * 90) + 51)*10),

    "vads_cust_fist_name":"Pierre",
    "vads_cust_last_name":"Martin",
    "vads_cust_email":"demo@pzen.eu",

    "ButtonText":"Moyens de paiment",
    "Button":["CB","VISA","MASTERCARD"]
},

//  Paiement en GBP et langue anglaise
{
    "Shop":"DemoCUR",
    "Anchor":"PaiementSimpleGBP",
    "Menu": "simple",
    "Title": "paiement en devise",
    "Description":"Dans cet exemple le paramètre <code>vads_payment_cards</code> envoi à Payzen la carte que l'on souaite utiliser pour aller direcetement sur la page de paiement.<br>Montant de $vads_amount$&nbsp;€<br>Vous pouvez tester 826:£ 840:$ 953=Franc Pacifique 978:€ …<br>La liste des langues est vonlontairement réduite à l'Anglais au Français et à l'Allemand.",
    "helpText":"Dans cet exemple nous présentons la gestion des devises et des langues et des devises.", 

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_language","vads_available_languages","vads_payment_cards"],
    "Input":["vads_currency",'vads_amount'],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    "vads_currency":"826",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":(Math.floor((Math.random() * 90) + 51)*10),

    "vads_cust_fist_name":"Peter",
    "vads_cust_last_name":"Smith",
    "vads_cust_email":"demo@pzen.eu",

    "vads_language":"en",
    "vads_available_languages":"en;fr;de",

    "ButtonText":"Moyens de paiment",
    "Button":["VISA","MASTERCARD","VISA_ELECTRON","MAESTRO"]
},

{
    "Menu": "simple",
    "Text":"Délai de capture|<p>Lorem ipsum…</p>"
},

// capture validation 
{
    "Shop":"DemoGO",
    "Anchor":"PaiementSimpleCapture",
    "Menu": "simple",
    "Title": "Gestion du délai de capture",

    "Description":"Présentation des particulatités liées à la date de capture, gérée via <code>vads_capture_delay</code> et la validation des transactions, géré via <code>vads_validation_mode</code>.<br><br>Concernant la date de capture, pour les cartes de type AMEX, CB, VISA ou VISA_ELECTRON jusqu'à <strong>7 jours</strong> une autorisation sur le montant total est réalisée au dela uniquement une prise d'empreinte est faite. Pour une carte MAESTRO ce délai est de <strong>30 jours</strong>.<br><br>Une transaction sera validée et remise en banque automatiquement à la date de capture si <code>vads_validation_mode</code> est défini à <code>0</code>. S'il est défini à <code>1</code> il faudra une validation manuelle ou via webService pour que la transaction soit remise en banque, sans cela la transaction expirera.",
    //"HelpText":"y",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_payment_cards"],
    "Input":["vads_capture_delay","vads_validation_mode","vads_amount"],


    //vads_site_id : define via the shop parameter
    "vads_ctx_mode":"TEST",
    //vads_trans_id : define via random function
    //vads_trans_date  define automatically
    "vads_amount":"15081",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_version":"V2",
    "vads_payment_config":"SINGLE",
    "vads_cust_email":"demo@pzen.eu",
    "vads_capture_delay":"28",
    "vads_validation_mode":"1",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),

    "ButtonText":"Moyens de paiment",
    "Button":["AMEX","CB","VISA_ELECTRON","MAESTRO"]
},

// Info client et adresses
{
    "Shop":"DemoGO",
    "Anchor":"PaiementAddressDetails",
    "Menu": "simple",
    "Title": "Gestion des informations client",

    "Description":"Dans cet exemple les information client ainsi que les adresses adresse de facturation et de livraison sont transmises à Payzen.<br><br>Il est possible aussi d'envoyer les informations de transport ou de panier pour les moyens de paiements demandant ces informations.",
    //"HelpText":"y",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_payment_cards"],
    //"Input":["vads_capture_delay","vads_validation_mode","vads_amount"],


    //vads_site_id : define via the shop parameter
    "vads_ctx_mode":"TEST",
    //vads_trans_id : define via random function
    //vads_trans_date  define automatically
    "vads_amount":"15081",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_version":"V2",
    "vads_payment_config":"SINGLE",
    //"vads_capture_delay":"28",
    //"vads_validation_mode":"1",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),

    "vads_cust_legal_name":"",
    "vads_cust_id":(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)),
    "vads_cust_status":"PRIVATE",
    "vads_cust_title":"Docteur",
    "vads_cust_first_name":"John H.",
    "vads_cust_last_name":"Watson",
    "vads_cust_email":"demo@pzen.eu",
    "vads_cust_phone":"0102030405",
    "vads_cust_cell_phone":"0707070707", 

    "vads_cust_address_number":"221B",
    "vads_cust_address":"Baker Street",
    "vads_cust_district":"",
    "vads_cust_zip":"NW1 6XE",
    "vads_cust_city":"London",
    "vads_cust_state":"",
    "vads_cust_country":"GB",

    "vads_ship_to_status":"COMPANY",
    "vads_ship_to_legal_name":"Lyra Network",
    "vads_ship_to_first_name":"Gilbert",
    "vads_ship_to_last_name":"de la Montagne",
    "vads_ship_to_phone_num":"0505050505",
    "vads_ship_to_street_number":"109",
    "vads_ship_to_street":"rue de l'Innovation",
    "vads_ship_to_street2":"1er étage",
    "vads_ship_to_district":"",
    "vads_ship_to_zip":"31670",
    "vads_ship_to_city":"Labège",
    "vads_ship_to_state":"",
    "vads_ship_to_country":"FR",

    "ButtonText":"Moyens de paiment",
    "Button":["CB","VISA","MASTERCARD","MAESTRO","AMEX"]
},


// Info livraison et panier
{
    "Shop":"DemoGO",
    "Anchor":"PaiementWithProducts",
    "Menu": "simple",
    "Title": "Gestion du panier et analytique",

    "Description":"Dans cet exemple les information client ainsi que les adresses adresse de facturation et de livraison sont transmises à Payzen.<br>Il est possible aussi d'envoyer les informations de transport ou de panier pour les moyens de paiements demandant ces informations.<br><br><strong>Panier de commande lié à cet exemple&nbsp:</strong> <div class='row'><div class='col-md-6'><table class='table table-striped'><thead><tr><th>#</th><th>Référence</th><th>Label</th><th>Qté</th><th>Prix</th><th>Tva</th></tr></thead><tbody><tr><td>1</td><td>[vads_product_ref0]</td><td>[vads_product_label0]</td><td>[vads_product_qty0]</td><td>$vads_product_amount0$</td><td>[vads_product_vat0]</td></tr><tr><td>2</td><td>[vads_product_ref1]</td><td>[vads_product_label1]</td><td>[vads_product_qty1]</td><td>$vads_product_amount1$</td><td>[vads_product_vat1]</td></tr><tr><td>3</td><td>[vads_product_ref2]</td><td>[vads_product_label2]</td><td>[vads_product_qty2]</td><td>$vads_product_amount2$</td><td>[vads_product_vat2]</td></tr></tbody></table></div></div>Nous envoyons aussi à Payzen des données analytiques spécifiques avec le champ <code>vads_ext_info_analytic</code> le nombre de produits dans la commande <code>vads_ext_info_productsi</code> et le nombre de bouteilles commandées <code>vads_ext_info_bottles</code> <br>Ces données sont conservées par Payzen et pourront être récupérées et utilisées par la suite.",

    //"HelpText":""

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_payment_cards"],
    //"Input":["vads_capture_delay","vads_validation_mode","vads_amount"],


    //vads_site_id : define via the shop parameter
    "vads_ctx_mode":"TEST",
    //vads_trans_id : define via random function
    //vads_trans_date  define automatically
    "vads_amount":"51021",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_version":"V2",
    "vads_payment_config":"SINGLE",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),

    "vads_cust_legal_name":"",
    "vads_cust_id":(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)),
    "vads_cust_status":"PRIVATE",
    "vads_cust_title":"Docteur",
    "vads_cust_first_name":"Sherlock",
    "vads_cust_last_name":"Holmes",
    "vads_cust_email":"demo@pzen.eu",
    "vads_cust_phone":"0102030405",
    "vads_cust_cell_phone":"0707070707", 

    "vads_cust_address_number":"221B",
    "vads_cust_address":"Baker Street",
    "vads_cust_district":"",
    "vads_cust_zip":"NW1 6XE",
    "vads_cust_city":"London",
    "vads_cust_state":"",
    "vads_cust_country":"GB",

    "vads_ship_to_status":"COMPANY",
    "vads_ship_to_legal_name":"Lyra Network",
    "vads_ship_to_first_name":"Altamont",
    "vads_ship_to_last_name":"Holmes",
    "vads_ship_to_phone_num":"0505050505",
    "vads_ship_to_street_number":"109",
    "vads_ship_to_street":"rue de l'Innovation",
    "vads_ship_to_street2":"1er étage",
    "vads_ship_to_district":"",
    "vads_ship_to_zip":"31670",
    "vads_ship_to_city":"Labège",
    "vads_ship_to_state":"",
    "vads_ship_to_country":"FR",

    "vads_ship_to_delivery_company_name":"SUPER TRANSPORT",
    "vads_ship_to_speed ":"STANDARD",
    "vads_ship_to_type":"PACKAGE_DELIVERY_COMPANY",
    "vads_ship_to_user_info":"",

    "vads_order_id":"ORDER-485",
    "vads_order_info":"Paiement avec informations de livraison",
    "vads_ext_info_analytic":"XZ42",
    "vads_ext_info_products":"3",
    "vads_ext_info_bottles":"3",

    "vads_nb_products":"3",

    "vads_product_type0":"HEALTH_AND_BEAUTY",
    "vads_product_label0":"Opion",
    "vads_product_ref0":"REF0012",
    "vads_product_qty0":"1",
    "vads_product_amount0":"10100",    
    "vads_product_vat0":"5.5",

    "vads_product_type1":"FOOD_AND_GROCERY",
    "vads_product_label1":"LaBleue",
    "vads_product_ref1":"REF0044",
    "vads_product_qty1":"2",
    "vads_product_amount1":"7500",    
    "vads_product_vat1":"10.0",

    "vads_product_type2":"HOME_APPLIANCE",
    "vads_product_label2":"Verres",
    "vads_product_ref2":"REF0101",
    "vads_product_qty2":"12",
    "vads_product_amount2":"1200",    
    "vads_product_vat2":"20.0",

    "vads_shipping_amount":"1490",
    //"vads_tax_amount":"",
    "vads_insurance_amount":"550",


    "ButtonText":"Moyens de paiment",
    "Button":["CB","AMEX"]
},





];

config = config.concat(configs);
