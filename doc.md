#Installation minimale
##Racine
La racine doit contenir les fichiers "index.html", "formdemotemplate.html" et "formdebug.html".
Les dossiers à créer sont "assets", "config", "Database" et "js".
###Dépendances à inclure dans index.html
En plus du contenu de tous les dossiers, les dépendances à inclure sont Boostrap (css et js) et Jquery. 
##assets
Ce dossier doit contenir un dossier "css" qui contient les dossiers "imgs" et "logo" ainsi que le fichier "style.css".
##config
Ce dossier doit contenir un fichier de configuration générale ,"form.js" par exemple, et un fichier de définition des formulaires, "demo.form.js" par exemple.
###form.js
En configuration minimale, la variable "menu" doit contenir un élément et la variable "mode" doit valoir "javascript".
###demo.form.js
Au minimum, creer un tableau "config" avec un objet contenant le champ "shop".
##database
Doit contenir le fichier dico.json
##js
Doit contenir les fichiers "formconfigctrl.js", "formdebug.js", "angular.min.js", "angular-sanitize.min.js", "angular-route.min.js", "moment-with-locales.min.js" et "ui-bootstrap-tpls-0.13.0.min.js"
#Variables de configuration
###menu
La variable "menu" et un tableau qui définit les catégories présentes dans la barre de navigation.
###mode
Si cette variable vaut "javascript", aucun appel au serveur n'est effectué.
###currencyTab
Object contenant les codes ISO4217 des devises disponibles associés à leur symbole et à la valeur du multiplicateur utilisée.
###debug
Si cette variable vaut "html" ou "text" le mode débug est disponible pour tous les formulaires, avec affichage html ou texte par défaut.
#Paramètres du tableau config
##Paramètres généraux
#### "shop"
  Nom de la boutique à utiliser dans le fichier key.ini. Si ce paramètre est le seul présent, un formulaire par défault est généré.
#### "Title1"
  Nom de la catégorie du menu à choisir pour accéder au formulaire.
#### "anchor"
  Texte affiché dans l'url après "Title1" lors de l'accès à un seul formulaire.
##Paramètres de description
#### "Title2"
  Texte affiché en haut du formulaire.
#### "Description"
  Description du formulaire affichée en dessous de "Title2".
#### "helpText"
  Texte affiché dans le cadre bleu lors de l'appuie sur le bouton "help".
##Présentation et fonctionnalités
#### "help"
  Active le bouton "help" si la valeur est "yes". Le bouton "help" permet d'afficher tous les champs ainsi que le "helpText".
#### "type"
  Cache tous les champs si la valeur est "hidden", sauf ceux étant indiqués dans le "readonly" et le "input".
#### "readonly"
  Nom des champs à afficher sans possibilité de modification par l'utilisateur, entre crochés séparés par des virgules.
#### "input"
  Nom des champs à afficher, entre crochés séparés par des virgules. 
#### "debug"
  Affiche la case "débug" lorsque la valeur est "yes". Quand la case est cochée puis le formulaire envoyé, la page appelée montre le code html des champs envoyés.
#### "Button"
  Permet de changer la forme du bouton d'envoie du formulaire. Entrer le nom des moyens de paiements entre crochés séparés par des virgules pour afficher les icones des moyens de paiements en guise de bouton d'envoie.
#### "ButtonText"
  Texte affiché sur le bouton d'envoie.
##Champs du formulaire
#### "vads_..."
  Valeur par défaut du champs "vads_...".
