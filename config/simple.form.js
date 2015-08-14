var configs =[

{
    "shop":"DemoGO",
    "anchor":"PaiementMinimal",
    "Title1": "paiementsimple",
    "Title2": "paiement simple",
    "Description":"Paiement le plus simple possible avec uniquement les paramètres obligatoires.<br>les moyens de paiement sont proposés par Payzen sur une page intermédiaire.<br>Montant de $vads_amount$ €",
    "helpText":"Description détaillée de l'exemple",

    "help":"yes",
    "type":"hidden",
    //"readonly":["vads_amount"],
    //"input":["vads_payment_cards"],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    //"vads_amount":(Math.floor((Math.random() * 90) + 51)*10),
    "vads_amount":(Math.floor((Math.random() * 90) + 51)*10),
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "ButtonText":"Je paye par carte"
},

{
    "shop":"DemoGO",
    "anchor":"PaiementMinimalAvecCarte",
    "Title1": "paiementsimple",
    "Title2": "paiement simple avec choix de la carte sur le site",
    "Description":"Dans cet exemple le paramètre <em>vads_payment_cards</em> envoi à Payzen la carte que l'on shouaite utiliser pour aller direcetement sur la page de paiement.<br>Montant de $vads_amount$ €",
    "helpText":"Description détaillée de l'exemple",

    "help":"yes",
    "type":"hidden",
    //"readonly":["vads_amount"],
    //"input":["vads_payment_cards"],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    //"vads_amount":(Math.floor((Math.random() * 90) + 51)*10),
    "vads_amount":"1545",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "Button":["CB","VISA","MASTERCARD"]
},

];

config = config.concat(configs);
