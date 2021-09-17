import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tournament } from '../models/tournament.modele';
//import { EventEmitter } from 'events';
import { EventEmitter } from '@angular/core'; 



@Component({
  selector: 'app-poule',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.scss']
})
export class PouleComponent implements OnInit {
  
  @Input() numRound: number;
  @Input() numPoule: number;
  @Output() refreshPool = new EventEmitter(); //evenement envoyé au component poule lorsqu'il faut rafraichir le tab des poules

  constructor(private fb : FormBuilder, private localStorageService:  LocalStorageService, private route : ActivatedRoute) {
   }

  teamArray: Array<object>
  name="";
  form : FormGroup;
  form2: FormGroup;
  displayForm: boolean;
  displayForm2: boolean;

  /* Retourne le nom d'une équipe en fonction de son numéro*/
  getTeamName(num){
    var teamName='';
    let t=this.localStorageService.getTeam(this.name,num);
    teamName = t[0];
    
    return teamName;
  } 

  /* initialisation du formulaire*/
  ngOnInit(): void {
    this.name = this.route.snapshot.params['trn'];
    this.form = this.fb.group(
      {
        nameF : '',
        niveau: undefined
      }
    )
    this.form2 = this.fb.group(
      {
        numPool : undefined
      }
    )
    this.displayForm = false;
    this.displayForm2 = false;
    this.teamArray = this.localStorageService.getTeamsFromPool(this.name, this.numRound, this.numPoule);
  }


  /* affiche/cache le formulaire d'ajout d'équipe */ 
  addT(){
    this.displayForm = !this.displayForm;
  }

  /* effectue le changement de poule d'une équipe */
  changeTeam(team){
    this.localStorageService.moveTeamFromPool(this.name, this.numRound, team, this.form2.value.numPool);
    this.teamArray = this.localStorageService.getTeamsFromPool(this.name, this.numRound, this.numPoule);
    this.refreshPool.emit(null);
  }

  /* Ajoute l'equipe du formulaire au local storage */
  onSubmit(){
    this.localStorageService.addTeam(this.name, this.form.value.nameF);
    this.localStorageService.setTeamLevel(this.name, this.form.value.nameF, this.form.value.niveau);
    this.localStorageService.addTeamToPool(this.name, this.form.value.nameF, this.numRound, this.numPoule);
    this.teamArray =  this.localStorageService.getTeamsFromPool(this.name, this.numRound, this.numPoule);
    this.displayForm = false;
  }

  /* Supprime une equipe d'une poule lorsqu'on clique sur la croix */
  deleteT(teamN){
    console.log(this.localStorageService.getPoolFromRound(this.name, this.numRound, this.numPoule));
    this.localStorageService.suprTeamFromPool(this.name, this.numRound, teamN);
    this.teamArray = this.localStorageService.getTeamsFromPool(this.name, this.numRound, this.numPoule);
    console.log(this.localStorageService.getPoolFromRound(this.name, this.numRound, this.numPoule));

  }

  /* Supprime une poule lorqu'on clique sur le bouton de suppression */
  deleteP(){
    this.localStorageService.suprPool(this.name, this.numRound, this.numPoule);
    this.refreshPool.emit(null);
  }

}
