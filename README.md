# AGILY_TEST-TECHNIQUE

## BACK-END - Temps de réalisation : 1h30

#### Réalisé

Connexion à l'API sans souci (déjà utilisée dans un projet précédent). 
Passage par le Node Cache pour vérifier si la donnée n'y a pas déjà été stockée, et éviter ainsi de refaire un fetch long et coûteux.
Donnée cleanée avant d'etre renvoyée, toujours pour éviter de faire transiter de gros volumes de données inutiles et faciliter la réception et l'intégration coté front.

#### Manquant

Je comptais mettre en place mon back-end avec une route solide, intégrer le front-end avec les données renvoyées puis revenir sur la mise en place d'Axios, mais je n'ai pas eu le temps.
Je suis peu familière de cet outil, meme si deja utilisé dans un projet depuis le front pour eviter les problemes de CORS. 

#### Take-away

C'etait ma premiere utilisation du Node cache. Auparavant, je travaillais systematiquement avec une base de données. 
La mise en place a été facile grace a des tutoriels, et j'ai pu me documenter sur la puissance et l'économie que génère cet outil. Je le réutiliserai dans mes futurs projets. 

## FRONT-END - Temps de réalisation : 3h00

#### Réalisé
- Utilisation de hook d'état pour rendre l'input dynamique au changement, et pour stocker les données à display dans les différents composants Cards.
- Mise en place de redux persistant, qui stocke la donnée de la ville recherchée, évitant ainsi un rafraichissement de la donnee trop fréquent. 
- Création de composants pour la carte du jour (en bas à gauche) et pour les petites cartes des jours suivants, pour faciliter l'intégration via des props envoyées en destructuration de données.
- Display: grid pour gérer la structure générale, puis flexbox pour le reste des éléments.
- Création de modules pour faciliter certaines tâches : génération de l'icone correspondant au temps, et conversion du timestamp.

#### Manquant
- Manque de temps pour intégrer le backgroud dynamique
- Manque de temps pour intégrer la feature du clic sur la carte. La mécanique aurait été la suivante : au clic, le hook contenant les infos pour la BottomCard aurait été set avec les infos de la Card cliquée, avant d'etre reset au clic suivant.
- Quelques petits problemes d'affichage/responsivité restant à gérer côté CSS.

## RECOMMANDATIONS

Réutiliser Node Cache 
Mieux travailler l'objet Date : le module de conversion de timestamp m'a pris du temps, mais j'ai beaucoup appris. 


