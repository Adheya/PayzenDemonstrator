var configs =[

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

    "ButtonText":"Je paye en 3 fois"
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

    "ButtonText":"Je paye en 3 fois"
},

];

config = config.concat(configs);
