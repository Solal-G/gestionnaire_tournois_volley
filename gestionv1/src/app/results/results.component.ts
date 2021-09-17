import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() numRound: number;
  @Input() numPoule: number;
  tournamentName: string;
  displayModifScore: boolean;
  team1: "";
  team2: "";

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService, private fb: FormBuilder) { }
  
  /* initialise le formulaire des scores du match à vide */
  ngOnInit() {
    this.displayModifScore = false;
    this.tournamentName = this.route.snapshot.params['trn'];
  }

  /* permet l'affichage du composant set results lorsqu'on clique sur modifier les scores */
  modifScore(team1, team2){
    this.team1 = team1;
    this.team2 = team2;
    this.displayModifScore = true;
  }

  /* Retourne les scores du matchs numero numMatch */
  getScore(tournamentName: string, numRound: number, numPoule: number, numMatch: number){
    let score = this.localStorageService.getScoreFromMatch(tournamentName, numRound, numPoule, numMatch);
    let results = "";
    for(let i=0; i<5; i++){
      if(score[i]!=undefined && score[i][0]!=undefined){
        results += " set "+(i+1)+" : "+score[i][0]+" à "+score[i][1]+" ;";
      }
    }
    return results.substring(0,results.length-1);
  }

  /* permet de cacher le composant set results lorsqu'on appuie sur cacher et affiche un message si le tournoi à son gagnant */
  hideModifScore(){
    this.displayModifScore = false;
    let res = this.localStorageService.getWinner(this.tournamentName);
    if(res>0){
      alert("Le gagnant est l'équipe "+this.localStorageService.getTeamName(this.tournamentName, res));
    }
  }

  /* reinitialise les scores */
  reinitializeScore(team1, team2){
    this.localStorageService.delScoreMatch(this.tournamentName, this.numRound, this.numPoule, team1, team2);
  }

}