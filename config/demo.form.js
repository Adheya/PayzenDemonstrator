


var config =[


{
	"Menu": "demo",
	"Text":"{large}{info}Exemple|L'exemple suivant est généré automatiquement avec pour seul paramètre le nom de la boutique."
},
{
	"Shop":"DemoGO"
},
{
    "Shop":"DemoGO",
    "Anchor":"demo",
    "Menu": "demo",
    "Title": "paiement en devise",
    "Description":"Dans cet exemple le paramètre <code>vads_payment_cards</code> envoi à Payzen la carte que l'on souaite utiliser pour aller direcetement sur la page de paiement.<br>Montant de $vads_amount$<br>Vous pouvez tester 826:£ 840:$ 953=Franc Pacifique 978:€ …<br>La liste des langues est vonlontairement réduite à l'Anglais au Français et à l'Allemand.",
    "helpText":"Dans cet exemple nous présentons la gestion des devises et des langues et des devises.", 

    "Help":"yes",
    "Type":"hidden",
    "Readonly":["vads_payment_cards"],
    "Input":["vads_currency",'vads_amount',"vads_sub_currency",'vads_sub_amount'],

    //vads_site_id : define via the shop parameter
    //vads_trans_date  define automatically
    "vads_ctx_mode":"TEST",
    "vads_currency":"826",
	"vads_sub_currency":"978",
    "vads_action_mode":"INTERACTIVE",
    "vads_page_action":"PAYMENT",
    "vads_payment_config":"SINGLE",
    "vads_version":"V2",

    "vads_amount":(Math.floor((Math.random() * 90) + 51)*10),
	"vads_sub_amount":(Math.floor((Math.random() * 90) + 51)*10),

    "vads_order_info" : "éè_è_ç_çà$*%¨¨^^&&",

    "ButtonText":"Moyens de paiment",
    "Button":["VISA","MASTERCARD","VISA_ELECTRON","MAESTRO","<br><strong>Vous pouvez aussi payer en e-Chèques-Vacances et compléter par carte</strong>","E_CV"]
}


];
