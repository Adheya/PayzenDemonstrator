var configs =[


{
    "Shop":"DemoIframe",
    "Anchor":"exemple23",
    "PageTitle": "Démo",
    "Menu": "iFrame",

    "Title": "Paiement redirection",
    "Description":"Le montant total de votre commande est de $vads_amount$.<br>Choisissez votre moyen de paiement ci dessous.",
    "HelpText":"demonstration en redirection mais avec la CSS iFrame",

    "Help":"yes",
    "Type":"hidden",
    //"Readonly":["vads_amount"],
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
	"vads_url_return":"https://www.google.fr",
    "vads_capture_delay":"0",
    "vads_validation_mode":"1",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),
    "vads_theme_config":"CSS_FOR_PAYMENT=iFrame.css;CSS_FOR_PAYMENT_MOBILE=iFrame.css;",
    "vads_redirect_success_timeout":"0",
    "vads_redirect_error_timeout":"0",
    "vads_url_return":"http://demo.pzen.eu/d/#/iframe",

    "ButtonText":"Je paye par carte",
    "Button":["AMEX","CB","VISA","MASTERCARD"]
},
{
    "Shop":"DemoIframe",
    "Anchor":"DemoiFrame",
    "PageTitle": "Démo",
    "Menu": "iFrame",

    "Title": "Paiement en iFrame",
    "Description":"Le montant total de votre commande est de $vads_amount$.<br><br>Démonstration d'un paiement intégré en iFrame<br>Utilisez la carte '4970 1000 0000 0009' date de fin de validité et CVV de votre choix",
    "HelpText":"demonstration iFrame",

    "Help":"yes",
    "Type":"hidden",
	"Iframe":"yes",
    "Readonly":["vads_theme_config","vads_return_mode"],
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
    "vads_cust_email":"demo@pzen.eu",
	"vads_url_return":"https://www.google.fr",
    "vads_capture_delay":"0",
    "vads_validation_mode":"1",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),
    "vads_theme_config":"CSS_FOR_PAYMENT=iFrame.css;CSS_FOR_PAYMENT_MOBILE=iFrame.css;",
    "vads_redirect_success_timeout":"0",
    "vads_redirect_error_timeout":"0",
    "vads_url_return":"http://demo.pzen.eu/d/return.php",
    "vads_return_mode":"GET",

    "vads_order_info":"mode iFrame activé",
    //"vads_order_info2":"&é%è§àç",
    "vads_ext_info_iFrame_mode":"YES",

    "ButtonText":"Je paye par carte",
    "Button":["CB","VISA","MASTERCARD","AMEX"]
},

];

config = config.concat(configs);
