
var menu = ["Les paiements", "Les Abonnements", "Sepa", "Presse"];

var config =[

{
    "shop":"LyraCDR",

    "PageTitle": "Payzen Démonstrateur",
    "Title1": "SILENT",
    "anchor":"exemple1",

    "Title2": "Mode SILENT",
    "Description":"Demo mode SILENT",
    "helpText":"Description détaillée de l'exemple",

    "help":"yes",
    "type":"readonly",

    //vads_site_id : define via the shop parameter
    "vads_ctx_mode":"TEST",
    //vads_trans_id : define via random function
    //vads_trans_date  define automatically
    "vads_amount":"15081",
    "vads_currency":"978",
    "vads_action_mode":"SILENT",
    "vads_page_action":"PAYMENT",
    "vads_version":"V2",
    "vads_payment_config":"SINGLE",
    "vads_card_number":"4970100000000000",

    "vads_cvv":"123",
    "vads_expiry_month":"12",
    "vads_expiry_year":"2017",
    "vads_validation_mode":"1",
    "vads_capture_delay":"0",
    "vads_url_return":"http://demo.pzen.eu/d/#SILENT",

    "Button":"Payer"
},	

{
    "shop":"Tipi01",
    "anchor":"exemple1",
    "PageTitle": "Démo",
    "Title1": "Tipi",

    "Title2": "Tipi",
    "Description":"Test Tipi vérification de la bonne gestion des accents dans vads_theme_config ",
    "helpText":"Description détaillée de l'exemple",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_theme_config","vads_payment_cards"],

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
	"vads_payment_cards":"CB",
    "vads_validation_mode":"1",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),

    "vads_theme_config":"iCANCEL_FOOTER_MSG_RETURN=Annuler le paiement;SUCCESS_FOOTER_MSG_RETURN=Retour site;HIGH_CONTRAST_MODE=false;MERCHANT_MESSAGE=Texte marchand a inclure si demande par la MOA;LEGAL_NAME_LABEL=Éablissement;LEGAL_NAME_LABEL.VISIBLE=true;MERCHANT_LABEL=MERCHANT_LABEL;SHOP_LABEL=étiquette;",

    "vads_url_return":"http://demo.pzen.eu/d/#/Tipi",
    "Button":"Payer"
},


{
    "shop":"Tipi01",
    "anchor":"exemple2",
    "PageTitle": "Démo",
    "Title1": "Tipi",

    "Title2": "Tipi",
    "Description":"Test HIGH_CONTRAST_MODE Tipi vérification de la bonne gestion des accents dans vads_theme_config ",
    "helpText":"Description détaillée de l'exemple",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_theme_config","vads_payment_cards"],

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
	"vads_payment_cards":"CB",
    "vads_validation_mode":"1",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),

    "vads_theme_config":"iCANCEL_FOOTER_MSG_RETURN=Annuler le paiement;SUCCESS_FOOTER_MSG_RETURN=Retour site;HIGH_CONTRAST_MODE=true;MERCHANT_MESSAGE=Texte marchand a inclure si demande par la MOA;LEGAL_NAME_LABEL=Éablissement;LEGAL_NAME_LABEL.VISIBLE=true;MERCHANT_LABEL=MERCHANT_LABEL;SHOP_LABEL=étiquette;",

    "vads_url_return":"http://demo.pzen.eu/d/#/Tipi",
    "Button":"Payer"
},

{
	"shop":"DemoGO",
	"anchor":"exemple1",
    "PageTitle": "Démo",
    "Title1": "Démo",
	
	"Title2": "Paiement simple",
	"Description":"Le montant total de votre commande est de $vads_amount$ Payable en une seule fois, en proposant de choisir parmi les moyens de paiement classique. En cas d'erreur le client peut faire plusieurs tentatives sans revenir au site marchand.",
	"helpText":"Description détaillée de l'exemple",

	"help":"yes",
	"type":"hidden",
	
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
	"vads_validation_mode":"1",
	"vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),

	"Button":"Payer"
},


{
	"shop":"DemoGO",
	"anchor":"exemple2",
	"Title1": "Les paiements",
	"Title2": "Paiement en 3 fois sans frais",
	"Description":"Nous vous proposons un paiement de votre commande en 3 fois sans frais. Une premier paiement de 100 € puis deux paiements de 75 € à 25 jours. Soit un paiement total de 250 €.",
	"helpText":"Description détaillée de l'exemple",

	"help":"yes",
	"type":"hidden",
	"readonly":["vads_amount","vads_payment_config"],
	"input":["vads_payment_cards"],
	
	//vads_site_id : define via the shop parameter 
	"vads_ctx_mode":"TEST",
	//vads_trans_id : define via random function
	//vads_trans_date  define automatically
	"vads_amount":"25000",
	"vads_currency":"978",
	"vads_action_mode":"INTERACTIVE",
	"vads_page_action":"PAYMENT",
	"vads_version":"V2",
	"vads_payment_config":"MULTI:first=10000;count=3;period=25",
	
	"vads_payment_cards":"CB;AMEX",
	"vads_cust_first_name":"Roger",
	"vads_cust_last_name":"Parslow",
	"vads_cust_phone":"0707070707",
	"vads_cust_email":"demo@pzen.eu",
	"vads_validation_mode":"1",

	"Button":"Je paye en 3 fois"
},

{
	"shop":"DemoMax",
	"anchor":"exemple3",
	"Title1": "Les paiements",
	"Title2": "Reservation Villa (pré-paiement en N fois)",
	"Description":"Nous vous remercions de votre reservation dans notre gite à partir du " + (moment().locale('fr').add(4,'months').format('dddd Do MMMM YYYY')) + ". Le montant total de votre location sera de 990 €. Dont 400 € payable ce jour, 300 € un mois avant le début de ma location et le solde de 290 € 7 jours avant l'entrée dans les lieux.",

	"help":"yes",
	"type":"hidden",
	"readonly":["vads_amount","vads_payment_config","vads_payment_cards"],
	//"input":["vads_payment_cards"],
	
	//vads_site_id : define via the shop parameter 
	"vads_ctx_mode":"TEST",
	//vads_trans_id : define via random function
	//vads_trans_date  define automatically
	"vads_amount":"99000",
	"vads_currency":"978",
	"vads_action_mode":"INTERACTIVE",
	"vads_page_action":"PAYMENT",
	"vads_version":"V2",
	"vads_payment_config":"MULTI_EXT:"+(moment().format('YYYYMMDD'))+ "=40000;" +(moment().add(3,'months').format('YYYYMMDD'))+"=30000;"+(moment().add(4,'months').subtract(7, 'days').format('YYYYMMDD'))+ "=29000",
	
	"vads_payment_cards":"CB",
	"vads_cust_first_name":"Roger",
	"vads_cust_last_name":"Parslow",
	"vads_cust_phone":"0707070707",
	"vads_cust_email":"demo@pzen.eu",
	"vads_validation_mode":"1",

	"Button":"Je paye en 3 fois"
},

{
	"shop":"DemoMax",
	"anchor":"exemple4",
	"Title1": "Les Abonnements",
	"Title2": "Abonnement avec offre promotionnelle",
	"Description":"Nous vous proposons une offre découverte, pour 7,90 € vous pouvez tester notre service 14 jours. S'il vous convient vous pourrez alors continuer pour 14,90 € les trois premiers mois, puis pour 24,90 €Vous pourrez interrompre votre abonnement à tout moment. ",

	"help":"yes",
	"type":"hidden",
	"helpText":"Description détaillée de l'exemple",
	
	//vads_site_id : define via the shop parameter 
	"vads_ctx_mode":"TEST",
	//vads_trans_id : define via random function
	//vads_trans_date  define automatically
	"vads_amount":"790",
	"vads_currency":"978",
	"vads_action_mode":"INTERACTIVE",
	"vads_page_action":"REGISTER_PAY_SUBSCRIBE",
	"vads_version":"V2",
	"vads_payment_config":"SINGLE",
	
	"vads_sub_amount":"2490",
	"vads_sub_currency":"978",
	"vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY=14",
	"vads_sub_effect_date":"20150714",
	"vads_sub_init_amount":"1490",
	"vads_sub_init_amount_number":"3",
	
	
	"vads_payment_cards":"CB",
	"vads_order_info":"Abonnement souscrit le",
	"vads_cust_first_name":"Roger",
	"vads_cust_last_name":"Parslow",
	"vads_cust_phone":"0707070707",
	"vads_cust_email":"demo@pzen.eu",
	"vads_validation_mode":"1",
	"vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, 7.90€ pour un essai de 14 jours, puis 3 mois à 14.90, les mois suivants à 24.90 € sans engagement de durée;",
	"Button":"Je paye en 3 fois"
},
{
	"shop":"DemoMax",
	"anchor":"exemple5",
	"Title1": "Les Abonnements",
	"Title2": "Abonnement avec offre promotionnelle",
	"Description":"Nous vous proposons une offre découverte, pour 7,90 € vous pouvez tester notre service 14 jours. S'il vous convient vous pourrez alors continuer pour 24,90 €Vous pourrez interrompre votre abonnement à tout moment. ",

	"help":"yes",
	"type":"hidden",
	"helpText":"Description détaillée de l'exemple",
	
	//vads_site_id : define via the shop parameter 
	"vads_ctx_mode":"TEST",
	//vads_trans_id : define via random function
	//vads_trans_date  define automatically
	"vads_amount":"790",
	"vads_currency":"978",
	"vads_action_mode":"INTERACTIVE",
	"vads_page_action":"REGISTER_PAY_SUBSCRIBE",
	"vads_version":"V2",
	"vads_payment_config":"SINGLE",
	
	"vads_sub_amount":"2490",
	"vads_sub_currency":"978",
	"vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY=14",
	"vads_sub_effect_date":"20150714",

	
	
	"vads_payment_cards":"CB",
	"vads_order_info":"Abonnement souscrit le",
	"vads_cust_first_name":"Roger",
	"vads_cust_last_name":"Parslow",
	"vads_cust_phone":"0707070707",
	"vads_cust_email":"demo@pzen.eu",
	"vads_validation_mode":"1",
	"vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, 7.90€ pour un essai de 14 jours, puis 3 mois à 14.90, les mois suivants à 24.90 € sans engagement de durée;",
	"Button":"Je paye en 3 fois"
},
{
	"shop":"DemoMax",
	"anchor":"exemple6",
	"Title1": "Les Abonnements",
	"Title2": "Abonnement avec offre promotionnelle",
	"Description":"Nous vous proposons une offre découverte, pour 7,90 € vous pouvez tester notre service 14 jours. S'il vous convient vous pourrez alors continuer pour 24,90 €Vous pourrez interrompre votre abonnement à tout moment. ",

	"help":"yes",
	"type":"hidden",
	"helpText":"Description détaillée de l'exemple",
	
	//vads_site_id : define via the shop parameter 
	"vads_ctx_mode":"TEST",
	//vads_trans_id : define via random function
	//vads_trans_date  define automatically
	"vads_amount":"700",
	"vads_currency":"978",
	"vads_action_mode":"INTERACTIVE",
	"vads_page_action":"REGISTER_PAY_SUBSCRIBE",
	"vads_version":"V2",
	"vads_payment_config":"SINGLE",
	"vads_capture_delay":"0",
	
	"vads_sub_amount":"1400",
	"vads_sub_currency":"978",
	"vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY=" + utc.getDate().toString(),
	"vads_sub_effect_date":(moment().add(1,'months').format('YYYYMMDD')),
	"vads_sub_init_amount_number":"2",
    "vads_sub_init_amount":"2990",
	
	
	"vads_payment_cards":"SDD",
	"vads_order_info":"Abonnement souscrit le " + utc.toLocaleDateString(),
	"vads_cust_first_name":"Roger",
	"vads_cust_last_name":"Parslow",
	"vads_cust_phone":"0707070707",
	"vads_cust_email":"demo@pzen.eu",
	"vads_validation_mode":"1",
	"vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, 7.90€ pour un essai de 14 jours, puis 3 mois à 14.90, les mois suivants à 24.90 € sans engagement de durée;",
	"Button":"Je paye en 3 fois"
},

{
	"shop":"DemoMax",
	"anchor":"DemoSSD",
	"Title1": "Presse",
	"Title2": "Abonnement en prélèvement ",
	"Description":"SSD. ",

	"help":"yes",
	"type":"hidden",
    "readonly":["vads_action_mode","vads_amount","vads_payment_config","vads_payment_cards","vads_currency","vads_capture_delay","vads_sub_currency","vads_sub_amount","vads_sub_effect_date","vads_sub_desc","vads_sub_init_amount_number","vads_sub_init_amount"],
	"helpText":"Description détaillée de l'exemple",
	
	//vads_site_id : define via the shop parameter 
	"vads_ctx_mode":"TEST",
	//vads_trans_id : define via random function
	//vads_trans_date  define automatically
	"vads_amount":"490",
	"vads_currency":"978",
	"vads_action_mode":"INTERACTIVE",
	"vads_page_action":"REGISTER_PAY_SUBSCRIBE",
	"vads_version":"V2",
	"vads_payment_config":"SINGLE",
	
	"vads_sub_amount":"2490",
	"vads_sub_currency":"978",
	"vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY=14",
	"vads_sub_effect_date":"20150714",
	"vads_sub_init_amount":"1490",
	"vads_sub_init_amount_number":"3",
    "vads_capture_delay":"0",
	
	
	"vads_payment_cards":"CB",
	"vads_order_info":"Abonnement souscrit le",
	"vads_cust_first_name":"Roger",
	"vads_cust_last_name":"Parslow",
	"vads_cust_phone":"0707070707",
	"vads_cust_email":"demo@pzen.eu",
	"vads_validation_mode":"1",
	"vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, 7.90€ pour un essai de 14 jours, puis 3 mois à 14.90, les mois suivants à 24.90 € sans engagement de durée;",
	"Button":"Je paye en 3 fois"
}




];




