#Paramètres du dossier config
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
