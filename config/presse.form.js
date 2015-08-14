var configs =[

// Abonnement mensuel Sepa 
{
    "shop":"DemoSEPA",
    "anchor":"aboPresseSDDsubscribe",
    "Title1": "presse",
    "Title2": "Abonnement mensuel Sepa",
    "Description":"Exemple d'abonnement à une revue mensuelle ne paraissant pas le mois d'août.<br>Payement de $vads_sub_amount$  par prélèvement Sepa onze mois par ans, le prélèvement est effectué le mercredi de la semaine d'abonnement. ",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],
    "helpText":"Dans cet exemple on peut voir qu'il n'y a pas de paramètre de paiement <em>vads_amount</em><br>L'abonnement est décrit par les paramètres <em>vads_sub_amount</em> et <em>vads_sub_currency</em><br>Dans la règle de récurence <b>[vads_sub_desc]</b> le <b>'xWE'</b> de <b>BYMONTHDAY</b> permet d'indiquer que le paiement sera fait le <b>Xième</b> mercredi du mois, <b>BYMONTH</b> décrit les mois où l'abonnement s'appliquera.<br>La date d'effet <em>vads_sub_effect_date</em> doit être au plus proche de la prochaine échéance, dans notre cas elle est positionné à la fin du mois actuel, ce qui fonctionne aussi.",

    "vads_ctx_mode":"TEST",
    "vads_action_mode":"INTERACTIVE",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_page_action":"REGISTER_SUBSCRIBE",
    "vads_sub_amount":(Math.floor((Math.random() * 90) + 121)*10),
    "vads_sub_currency":"978",
    "vads_sub_desc":"RRULE:FREQ=YEARLY;BYMONTH=1,2,3,4,5,6,7,9,10,11,12;BYDAY="+(( Math.ceil(moment().format('DD')/7) > 4 ) ? '-1' :  Math.ceil(moment().format('DD')/7))+"WE",
    "vads_sub_effect_date":(moment().utc().endOf('month').format('YYYYMMDD')),

    "vads_cust_id":(moment().format('YYMMDD-HHmmss')),
    "vads_cust_email":"demo@pzen.eu",
    "vads_order_info":"Abonnement souscrit le "+(moment().locale("fr").format('LLLL')),
    "vads_theme_config":"MERCHANT_MESSAGE=Votre abonnement",

    "vads_payment_cards":"SDD",
    "ButtonText":"Je signe mon mandat Sepa et je m'abonne"

},

// Abonnement bimestriel CB
{
    "shop":"DemoSEPA",
    "anchor":"aboPresseCBsubscribe",
    "Title1": "presse",
    "Title2": "Abonnement bimestriel CB",
    "Description":"Exemple d'abonnement à une revue bimestrielle de $vads_sub_amount$<br>Payement par cartes bancaire le dernier jour des mois pairs, pour une durée de deux ans, l'abonnement commence la mois suivant.",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],

    "vads_ctx_mode":"TEST",
    "vads_action_mode":"INTERACTIVE",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_page_action":"REGISTER_SUBSCRIBE",
    "vads_sub_amount":(Math.floor((Math.random() * 90) + 51)*10),
    "vads_sub_currency":"978",
    "vads_sub_desc":"RRULE:FREQ=YEARLY;BYMONTH=2,4,6,8,10,12;BYMONTHDAY=-1",
    "vads_sub_effect_date":(moment().utc().endOf('month').format('YYYYMMDD')),

    "vads_cust_id":(moment().format('YYMMDD-HHmmss')),
    "vads_cust_email":"demo@pzen.eu",
    "vads_order_info":"Abonnement souscrit le "+(moment().locale("fr").format('LLLL')),


    //"Button":"Je m'abonne"
	"ButtonText":"Moyens de paiment",
    "Button":["CB","VISA","MASTERCARD"]
},

// Abonnement mensuel Sepa et CB
{
    "shop":"DemoSEPA",
    "anchor":"aboPresseCBSDDpaySubscribe",
    "Title1": "presse",
    "Title2": "Abonnement mensuel",
    "Description":"Exemple d'abonnement à un site d'actualité en ligne par prélèvement Sepa ou CB.<br><br>Premier mois à $vads_amount$ puis abonnement mensuel de $vads_sub_amount$ prélevé le jour de souscription.",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],

    "vads_ctx_mode":"TEST",
    "vads_action_mode":"INTERACTIVE",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":"100",
    "vads_currency":"978",

    "vads_page_action":"REGISTER_PAY_SUBSCRIBE",
    "vads_sub_amount":(Math.floor((Math.random() * 90) + 51)*10),
    "vads_sub_currency":"978",
    "vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY="+( ((moment().format('DD')) > 28) ? '-1' : (moment().format('DD')) )+";",
    "vads_sub_effect_date":(moment().utc().add(1,'month').format('YYYYMMDD')),

    "vads_cust_id":(moment().format('YYMMDD-HHmmss')),
    "vads_cust_email":"demo@pzen.eu",
    "vads_order_info":"Abonnement souscrit le "+(moment().locale("fr").format('LLLL')),


	"ButtonText":"Vous pouvez payer par carte bancaire ou par prélèvement Sepa",
    "Button":["CB","SDD"]
},

// void
{
    "shop":"DemoMax",
    "anchor":"DemoSSD",
    "Title1": "presse2",
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
    "vads_validation_mode":"1",
    "vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, 7.90€ pour un essai de 14 jours, puis 3 mois à 14.90, les mois suivants à 24.90 € sans engagement de durée;",
    "ButtonText":"Je paye en 3 fois"
}

];
config = config.concat(configs);
