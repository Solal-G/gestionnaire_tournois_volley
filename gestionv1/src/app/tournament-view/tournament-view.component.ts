import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-vue-generale',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.scss']
})

export class TournamentViewComponent implements OnInit {

  constructor(private rs: RequestService, private route : ActivatedRoute, private localStorageService : LocalStorageService,
            private router : Router) { }
  nameEv = "";//nom de l'évènement
  name ="";//nom du tournoi
  rounds;//rounds du tounoi

  ngOnInit(): void {
    this.name = this.route.snapshot.params['trn'];
    this.nameEv = this.route.snapshot.params['name'];
    this.rounds = this.localStorageService.getRounds(this.name);

  }
  

  monStyle(){
    let taille = 100/this.rounds.length
    //console.log(100/this.rounds.length)
    return {
      'height': '100%',
      'display':'inline',
      'text-align':'center',
      'margin-left': '10px',
      'margin-right': '10px',
      'float' : 'left',
    }
  }

  /* Méthode pour ajouter le round automatiquement si c'est possible. Met a jour les rounds*/
  addR(){
    if(!this.localStorageService.addRoundAutomate(this.name)){
       alert("Le round actuel n est pas fini ou le nombre de poule est insuffisant pour passer au round suivant")
      }
    else {
      this.rounds = this.localStorageService.getRounds(this.name);
    }
  }


  reiTournament(){
    this.localStorageService.delRounds(this.name);
    this.rounds = this.localStorageService.getRounds(this.name);
    alert("Le tournois a été reinitialisé.");
  }

}
