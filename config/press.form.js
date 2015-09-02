var configs =[

// SEPA - Abonnement mensuel sauf Aout
{
    "Shop":"DemoSEPA",
    "Anchor":"aboPresseSDDsubscribe",
    "Menu": "press",
    "Title": "Abonnement Sepa mensuel sauf Août",
    "Description":"Exemple d'abonnement à une revue mensuelle ne paraissant pas le mois d'août.<br>Payement de $vads_sub_amount$  par prélèvement Sepa onze mois par ans, le prélèvement est effectué le mercredi de la semaine d'abonnement ",
    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],
    "HelpText":"Dans cet exemple on peut voir qu'il n'y a pas de paramètre de paiement <em>vads_amount</em><br>L'abonnement est décrit par les paramètres <em>vads_sub_amount</em> et <em>vads_sub_currency</em><br>Dans la règle de récurence <b>[vads_sub_desc]</b> le <b>'xWE'</b> de <b>BYMONTHDAY</b> permet d'indiquer que le paiement sera fait le <b>Xième</b> mercredi du mois, <b>BYMONTH</b> décrit les mois où l'abonnement s'appliquera.<br>La date d'effet <em>vads_sub_effect_date</em> doit être au plus proche de la prochaine échéance, dans notre cas elle est positionné à la fin du mois actuel, ce qui fonctionne aussi.",

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
    "Shop":"DemoSEPA",
    "Anchor":"aboPresseCBsubscribe",
    "Menu": "press",
    "Title": "Abonnement bimestriel CB",
    "Description":"Exemple d'abonnement à une revue bimestrielle de $vads_sub_amount$<br>Payement par cartes bancaire le dernier jour des mois pairs, pour une durée de deux ans, l'abonnement commence la mois suivant.",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],

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
    "Shop":"DemoSEPASMS",
    "Anchor":"aboPresseCBSDDpaySubscribe",
    "Menu": "press",
    "Title": "Abonnement mensuel",
    "Description":"Exemple d'abonnement à un site d'actualité en ligne par prélèvement Sepa ou CB.<br><br>Premier mois à $vads_amount$ puis abonnement mensuel de $vads_sub_amount$ prélevé le jour de souscription.",

    "Help":"yes",
    "Type":"hidden",
    "Input":["vads_cust_cell_phone","vads_cust_email"],
    "Readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],

    "vads_ctx_mode":"TEST",
    "vads_action_mode":"INTERACTIVE",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":"150",
    "vads_currency":"978",

    "vads_page_action":"REGISTER_PAY_SUBSCRIBE",
    "vads_sub_amount":(Math.floor((Math.random() * 90) + 51)*10),
    "vads_sub_currency":"978",
    "vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY="+( ((moment().format('DD')) > 28) ? '-1' : (moment().format('DD')) )+";",
    "vads_sub_effect_date":(moment().utc().add(1,'month').format('YYYYMMDD')),

    "vads_cust_id":(moment().format('YYMMDD-HHmmss')),
    "vads_order_info":"Abonnement souscrit le "+(moment().locale("fr").format('LLLL')),
    "vads_cust_email":"demo@pzen.eu",
    "vads_cust_cell_phone":"",
    "vads_cust_country":"fr",

    "ButtonText":"Vous pouvez payer par carte bancaire ou par prélèvement Sepa",
    "Button":["CB","SDD"]
},



];
config = config.concat(configs);
