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
    <li>1/ Install Angular with command : "npm install -g @angular/cli"</li>
    <li>2/ Clone the git repository : "git clone https://github.com/Solal-G/gestionnaire_tournois_volley"</li>
    <li>3/ Get to the gestionv1 repository : "cd gestionv1"</li>
    <li>4/ Install npm : "npm install"</li>
    <li>5/ Launch the app : "ng serve --open"</li>
</ul> 
<h3><a id="htu"></a>How to use</h3>

An exemple account has been create (the credentials are list in the "login" part) with a tournament ready to start and nine teams.
Some features does not work, they are listed at the end of this part.

Register :
- Click on "Connexion" in the top-menu, or "S'inscrire/se connecter" from the home page.
- Fill the form on the right (password is more than 5 letters).
- Click "s'inscrire", you will now be registered and connected on the new account.

 Log in :
- Click on "Connexion" from the top-menu, or "S'inscrire/se connecter" from the home page.
- Fill the left form. If you don't have an account : Email->exemple@exemple.com / Password->123456789


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
