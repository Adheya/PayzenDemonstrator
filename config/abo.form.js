
var configs =[

{
    "Shop":"DemoMax",
    "Anchor":"demoAmount",
    "Menu": "abo",
    "Title": "Exemple d'abonnement avec 3 montants",
    "Description":"Le mois en cours vous payez $vads_amount$ Les [vads_sub_init_amount_number] mensualités suivantes seront de $vads_sub_init_amount$ puis seront de $vads_sub_amount$.",

    "Help":"yes",
    "Type":"hidden",
    "HelpText":"Dans cet exemple différentes devises sont appliquées ainsi que trois montants différents.",
    "Readonly":["vads_page_action"],
    "Input":["vads_currency","vads_amount","vads_sub_effect_date","vads_sub_desc","vads_sub_currency","vads_sub_init_amount","vads_sub_init_amount_number","vads_sub_amount","vads_cust_phone"],

    //vads_site_id : define via the shop parameter
    "vads_ctx_mode":"TEST",
    //vads_trans_id : define via random function
    //vads_trans_date  define automatically
    "vads_amount":"790",
    "vads_currency":"840",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"REGISTER_PAY_SUBSCRIBE",
    "vads_version":"V2",
    "vads_payment_config":"SINGLE",

    "vads_sub_amount":"2490",
    "vads_sub_currency":"978",
    "vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY=1",
    "vads_sub_effect_date":(moment().utc().endOf('month').format('YYYYMMDD')),
    "vads_sub_init_amount":"1490",
    "vads_sub_init_amount_number":"3",


    "vads_payment_cards":"CB",
    "vads_order_info":"Abonnement souscrit le "+(moment().locale("fr").format('LLLL')),
    "vads_cust_first_name":"Roger",
    "vads_cust_last_name":"Parslow",
    "vads_cust_phone":"0707070707",
    "vads_cust_email":"demo@pzen.eu",
    "vads_validation_mode":"1",
    "vads_theme_config":"MERCHANT_MESSAGE=Vous payez aujourd'hui $vads_amount$, les [vads_sub_init_amount_number] mensualités suivantes seront de $vads_sub_init_amount$, puis $vads_sub_amount$;",

    "ButtonText":"Je m'abonne"
},
{
    "Shop":"DemoMax",
    "Anchor":"exemple5",
    "Menu": "abo",
    "Title": "Abonnement avec offre promotionnelle",
    "Description":"Nous vous proposons une offre découverte, pour $vads_amount$ vous pouvez tester notre service 14 jours. S'il vous convient vous pourrez alors continuer pour $vads_sub_amount$<br>Vous pourrez interrompre votre abonnement à tout moment.",
    "HelpText":"Description détaillée de l'exemple",

    "Help":"yes",
    "Type":"hidden",
    "Input":["vads_cust_phone"],
    "Readonly":["vads_page_action","vads_amount","vads_sub_effect_date","vads_sub_amount","vads_sub_desc","vads_order_info"],

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
    "vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY="+(moment().add(14,'day').format('D')),
    "vads_sub_effect_date":(moment().utc().add(14,'day').format('YYYYMMDD')),

    "vads_payment_cards":"CB",
    "vads_order_info":"Abonnement souscrit le "+(moment().locale("fr").format('LLLL')),
    "vads_cust_first_name":"Roger",
    "vads_cust_last_name":"Parslow",
    "vads_cust_phone":"0707070707",
    "vads_cust_email":"demo@pzen.eu",
    "vads_validation_mode":"1",
    "vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, $vads_amount$ pour un essai de 14 jours, puis $vads_sub_amount$ par mois sans engagement de durée;",

    "ButtonText":"Je m'abonne"
},


];

config = config.concat(configs);

