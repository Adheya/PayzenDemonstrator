var configs =[

// Abonnement mensuel Sepa et CB
{
    "shop":"DemoSEPA",
    "anchor":"fraisIscriptionCbSDD",
    "Title1": "Inscriptions",
    "Title2": "Frais de scolarité payés en 5 fois",
    "Description":"Règlement de vos frais d'inscription pour un montant total de 4340&nbsp;€<br>Soit un premier paiemeny de $vads_amount$ puis 6 mensualités de $vads_sub_amount$ prélevées le jour de souscription.",

    "help":"yes",
    "type":"hidden",
    "readonly":["vads_page_action","vads_sub_effect_date","vads_sub_desc"],

    "vads_ctx_mode":"TEST",
    "vads_action_mode":"INTERACTIVE",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":"173600",
    "vads_currency":"978",

    "vads_page_action":"REGISTER_PAY_SUBSCRIBE",
    "vads_sub_amount":"43400",
    "vads_sub_currency":"978",
    "vads_sub_desc":"RRULE:FREQ=MONTHLY;COUNT=6;BYMONTHDAY="+( ((moment().format('DD')) > 28) ? '-1' : (moment().format('DD')) )+";",
    "vads_sub_effect_date":(moment().utc().add(1,'month').format('YYYYMMDD')),

    "vads_cust_id":(moment().format('YYMMDD-HHmmss')),
    "vads_order_info":"souscrit le "+(moment().locale("fr").format('LLLL')),

    "vads_cust_email":"demo@pzen.eu",
    "vads_cust_first_name":"Lyra",
    "vads_cust_last_name":"Network",
    //"vads_cust_name":"Network",


	"ButtonText":"Vous pouvez payer par carte bancaire ou par prélèvement Sepa",
    "Button":["CB","SDD"]
},

];
config = config.concat(configs);
