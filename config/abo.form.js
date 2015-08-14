
var configs =[

{
    "shop":"DemoMax",
    "anchor":"demoAmount",
    "Title1": "abonnements",
    "Title2": "Abonnement avec offre promotionnelle",
    "Description":"Nous vous proposons une offre découverte, pour $vads_amount$ vous pouvez tester notre service 14 jours. S'il vous convient vous pourrez alors continuer pour $vads_sub_init_amount$ les [vads_sub_init_amount_number] premiers mois, puis pour $vads_sub_amount$ <br>Vous pourrez interrompre votre abonnement à tout moment. ",

    "help":"yes",
    "type":"hidden",
    "helpText":"Description détaillée de l'exemple",
    "readonly":["vads_page_action"],
    "input":["vads_currency","vads_amount","vads_sub_effect_date","vads_sub_currency","vads_sub_init_amount","vads_sub_init_amount_number","vads_sub_amount","vads_cust_phone"],

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
    "vads_sub_desc":"RRULE:FREQ=MONTHLY;BYMONTHDAY=14",
    "vads_sub_effect_date":(moment().utc().endOf('month').format('YYYYMMDD')),
    "vads_sub_init_amount":"1490",
    "vads_sub_init_amount_number":"3",


    "vads_payment_cards":"CB",
//    "vads_order_info":"Abonnement souscrit le",
    "vads_cust_first_name":"Roger",
    "vads_cust_last_name":"Parslow",
    "vads_cust_phone":"0707070707",
    "vads_cust_email":"demo@pzen.eu",
    "vads_validation_mode":"1",
    "vads_theme_config":"MERCHANT_MESSAGE=Offre promotionnelle, $vads_amount$ pour un essai de 14 jours, puis [vads_sub_init_amount_number] mois à $vads_sub_init_amount$, les mois suivants à $vads_sub_amount$ sans engagement de durée;",
    "ButtonText":"Je paye en 3 fois"
},
{
    "shop":"DemoMax",
    "anchor":"exemple5",
    "Title1": "abonnements",
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
    "ButtonText":"Je paye en 3 fois"
},





];

config = config.concat(configs);

