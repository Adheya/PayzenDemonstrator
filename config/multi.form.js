var configs =[

// Présentation
{
    "Menu": "multi",
    "Text":"{large}{primary}Paiements fractionnés |<p>Cette page montre un ensemble d'exemples.</p>"
},

// Exemple ANCV tous moyens de paiement
{
    "Shop":"DemoANCV",
    "Anchor":"ANCVchoix",
    "Menu": "multi",
    "Title": "Paiement ANCV 01",
    "Description":"Le client se voit proposer tous les moyens de paiement sur la page suivante.<br><br>Montant de $vads_amount$ permettant de proposer les eCV",
    "HelpText":"<code>vads_payment_cards</code> n'étant pas défini tous les moyens de paiement de la boutique seront proposés.",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_shop_name","vads_shop_url","vads_order_id"],
    "Input":["vads_amount","vads_cust_fist_name","vads_cust_last_name","vads_order_info"],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":(Math.floor((Math.random() * 90) + 63)*100),

    "vads_cust_fist_name":"Pierre",
    "vads_cust_last_name":"Martin",
    "vads_cust_email":"demo@pzen.eu",

    "vads_shop_name":"Deluxe Croisière",
    "vads_shop_url":"www.DeluxeCroisiere.xyz",
    "vads_order_id":("ORD-"+moment().utc().format('DDmmss')),
    "vads_order_info":"4789-Croisière sur la seine",
    "vads_ext_info_nbParticipants":"4",
    "vads_ext_info_eventCode":"X47-879",
 
    "ButtonText":"Je paye par carte"
},


// Exemple ANCV eCV en premier 
{
    "Shop":"DemoANCV",
    "Anchor":"ANCVecv",
    "Menu": "multi",
    "Title": "Paiement ANCV 02",
    "Description":"Le client va directement se voir proposer de saisir ses eCV il complètera ensuite avec un autre moyen de paiement.<br><br>Montant de $vads_amount$ permettant de proposer les eCV",
    "HelpText":"<code>vads_payment_cards</code> est défini avec la valeur <code>[vads_payment_cards]</code> ce qui propose automatiquement les eCV.",

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_payment_cards","vads_shop_name","vads_shop_url","vads_order_id"],
    "Input":["vads_amount","vads_cust_fist_name","vads_cust_last_name","vads_order_info"],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    "vads_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_payment_cards":"E_CV",

    "vads_amount":(Math.floor((Math.random() * 90) + 63)*100),

    "vads_cust_fist_name":"Pierre",
    "vads_cust_last_name":"Martin",
    "vads_cust_email":"demo@pzen.eu",

    "vads_shop_name":"Deluxe Restaurants",
    "vads_shop_url":"www.DeluxeRestaurants.xyz",
    "vads_order_id":("ORD-"+moment().utc().format('DDHmss')),
    "vads_order_info":"7289-Déjeuner restaurant sous les toits",
    "vads_ext_info_nbParticipants":"2",
    "vads_ext_info_eventCode":"",

    "ButtonText":"Je paye par carte"
},



];

config = config.concat(configs);
