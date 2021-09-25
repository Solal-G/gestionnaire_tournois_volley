# Gestionnaire Tournois Volley
[![badge_android](https://img.shields.io/badge/made%20with-angular-red)](https://angular.io/)[![badge_android](https://img.shields.io/badge/Ter%20Licence%203-Universit%C3%A9%20de%20Montpellier-ff69b4)](https://sciences.edu.umontpellier.fr/)

<br />

Project made during IT Licence last semester. Website design to create Volley Tournaments.

<br />

<p align="center">
    <img src="https://github.com/Solal-G/gestionnaire_tournois_volley/blob/main/gestionv1/v.png" alt="Logo" width="50%">
    <h3 align="center">GTV</h3>
    <p align="center">
        <br />
    <b>Key feature :</b>
        <br />
        Develop with Angular
        <br />
        Data synch with PHP
        <br />
        Offline parts dealt with LocalStorage 
        <br />
            <a href="https://github.com/Solal-G/gestionnaire_tournois_volley/tree/main/gestionv1">
                <strong>Source code »</strong>
            </a>
        <br />
        <a href="https://www.youtube.com/watch?v=hvV7_gX8ZkY">View Demo</a>
        .
        <a href="https://github.com/Solal-G/gestionnaire_tournois_volley/blob/main/Rapport_Gestion_de_Tournois.pdf">View Report</a>
    </p>
</p>
<br />
<br />

## Sommaire

<br />
<ul>
    <li><a href="#install">Installation</a></li>
    <li><a href="#htu">How to use</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#credits">Credits</a></li>
</ul>

<h3><a id="install"></a>
    Installation
</h3>
<ul>
    <li>1/ Installer Angular à l'aide de la commande : "npm install -g @angular/cli"</li>
    <li>2/ Effectuer un clonage du git à l'aide de la commande : "git clone https://github.com/Solal-G/gestionnaire_tournois_volley"</li>
    <li>3/ Se placer dans le dossier gestionv1 à l'aide de la commande : "cd gestionv1"</li>
    <li>4/ Effectuer la commande suivante : "npm install"</li>
    <li>5/ Lancer l'application à l'aide de : "ng serve --open"</li>
</ul> 
<h3><a id="htu"></a>How to use</h3>
Avant-propos : Un compte exemple a été créée (vous retrouverez les identifiants dans la partie se connecter) disposant d'un tournois déjà prêt à être utilisé avec 9 équipes.
Certaines fonctionnalitées ne marchent pas elles sont listées (les connues du moins) à la fin de ce document.

    S'inscrire sur le site :
- Cliquer sur le bouton "Connexion" du menu horizontal, ou depuis la page d'accueil, sur le lien "S'inscrire/Se connecter".

- Remplir le formulair de droite (mot de passe plus de 5 caractères).

- Cliquer sur s'inscrire pour finaliser, vous serez aussi connecter automatiquement sur le nouveau compte.



    Se connecter :
- Cliquer sur le bouton "Connexion" du menu horizontal, ou depuis la page d'accueil, sur le lien "S'inscrire/Se connecter".

- Remplir le formulaire de gauche :
    Si vous n'avez pas créer de compte :
    Email : exemple@exemple.com
    Mdp : 123456789



    Création d'un évenement :
- Etre connecté sur le site est requis pour cette action.

- Cliquer sur le bouton "Evenements" du menu horizontal, puis sur "créer votre évenement", ou depuis la page d'accueil, dans le corps de la page en dessous du +, sur "Créer un évenement".

- Entrer les différentes informations sur votre évenement, puis ajouter au moins un tournois à l'évenement.



    Ajouter une équipe à un évenement/tournois avant que celui-ci est débuté :
- Etre connecté sur le site est requis pour cette action.

- Cliquer sur le bouton "Evenements" du menu horizontal, puis sur "créer votre évenement", ou depuis la page d'accueil, dans le corps de la page en dessous du +, sur "Créer un évenement".

- Se rendre jusqu'à l'évenement désiré puis cliquer sur le lien "Détails et inscriptions".

- Cliquer sur le bouton vert "Inscrire son équipe" du tournois désiré.

- Entrer le nom de l'équipe. Il est possible d'ajouter des joueurs, et en cochant la case de s'ajouter soi-même.

- Cliquer sur continuer.



    Commencer un évenement.
- Etre connecté sur un compte ayant créer un évenement est requis pour cette action.

- Cliquer sur "Profil" du menu horizontal.

- Sur la droite s'affiche les évenements créés/disponnibles sur ce compte.

- Cliquer sur le bouton "Commencer" de l'évenement désiré.

- Pour la gestion d'un tournois voir la suite.



    Gestion d'un tournois.
- Après avoir lancer un évenement, choisir un tournois à débuter.

- Ajouter d'abord un round : Les équipes sont automatiquements placées dans des poules de deux (si jamais nombre impaire d'équipes une poules sera composé de 3 équipes).
Il est possible de changer une équipe de poule avec le menu déroulant à droite d'une équipe, puis en cliquant sur ok. Attentiontous les matchs de la poule seront réinitialisés.

- Pour afficher les confrontations/matchs d'une poule, cliquer sur "afficher les scores". Pour chaque matchs il est possible d'ajouter un set, ou de reinitialiser le score du match.
Attention il faut au moins deux sets gagnants pour qu'une équipe soit déclarée vainqueur de la confrontation.

- Lorsque tous les matchs du round sont effectués, il est possible de passer au round suivant; les équipes qualifiées seront automatiquement ajouter au tour suivant.
Si des équipes manquent, il est possible de les ajouter manuellement à une poule.

- Finale : un round est "final" lorsque le round ne comporte qu'une poule de deux équipes. Dans ce cas là lorsque une des deux équipes remportent la confrontation un message affiche le gagnant.

- A tout moment il est possible de sauvegarder le tournois, de quitter la page et d'y revenir plus tard. Au moment de cliquer sur "sauvegarder" il faut bien entendu être connecté à internet.
<br />
<h3><a id="authors"></a>Authors</h3>

* **Thomas Caprio** 
* **Solal Goldstein** _alias_ [@Solal-G](https://github.com/Solal-G)
* **Romain Jaminet** 
* **Louis Lamalle** _alias_ [@lamalle](https://github.com/lamalle)

<br />
<h3><a id="credits"></a>Credits</h3>
Thanks to our professor Michel Meynard.
<br />
