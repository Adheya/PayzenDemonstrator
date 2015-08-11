


var config =[

{
    "shop":"DemoMax",
    "anchor":"exemple1",
    "PageTitle": "Démo",
    "Title1": "Démo",

    "Title2": "Paiement simple",
    "Description":"Le montant initial est de $vads_amount$.<br>puis $vads_sub_init_amount$ pendant X mois<br>et $vads_sub_amount$ ensuite<br><br>Choisissez votre moyen de paiement ci dessous.",
    "helpText":"Sur cette boutique si le paiement n'est pas accepté le client se verra proposé d'autres essais.<br>le choix d'un moyen de paiement ajoute le paramètre <em>vads_payment_cards</em> avec le code correspondant à la carte choisie",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_payment_cards"],
    "input":["vads_capture_delay","vads_validation_mode","vads_currency","vads_amount","vads_sub_currency","vads_sub_amount","vads_sub_init_amount"],


    //vads_site_id : define via the shop parameter
    "vads_ctx_mode":"TEST",
    //vads_trans_id : define via random function
    //vads_trans_date  define automatically
    "vads_amount":"15081",
	"vads_sub_amount":"15081",
    "vads_currency":"978",
	"vads_sub_currency":"978",
	"vads_sub_currency":"392",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_version":"V2",
	"vads_sub_init_amount":"70000",
    "vads_payment_config":"SINGLE",
    "vads_cust_email":"demo@pzen.eu",
    "vads_capture_delay":"0",
	"vads_sub_effect_date":"20150925",
    "vads_validation_mode":"1",
	"vads_theme_config":"MERCHANT_MESSAGE=Le montant initial est de $vads_amount$ puis $vads_sub_init_amount$ pendant X mois et $vads_sub_amount$ ensuite",
    "vads_trans_date":(moment().utc().format('YYYYMMDDHHmmss')),
	"ButtonText":"Moyens de paiment",
    "Button":["AMEX","VISA","CB","MASTERCARD"],
	"debug":"yes"
},

{
    "shop":"DemoGO"
},


];
