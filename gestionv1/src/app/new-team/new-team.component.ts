import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team.modele';
import { TournamentService } from '../services/tournament.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {
  // objet formulaire qui correspondra au form ds template
  teamForm: FormGroup;
  // FormuBuilder permet de creer des formGroup plus "lisible"
  constructor(private formBuilder: FormBuilder,
              private teamService: TeamService,
              private tournamentService: TournamentService,
              private userService : UserService,
              private router : Router
              ) { }

  ngOnInit() {
    this.initForm();
  }

  ///////////////////////////////////
  ////// GESTION DU FORMULAIRE //////
  ///////////////////////////////////
  // Pour initialiser le formulaire // 
  initForm(){
    this.teamForm = this.formBuilder.group({ // on rajoute les controles qui seront dans le formulaires
        teamName: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(20), Validators.pattern('[A-Za-z0-9_-]+')]],
        players: this.formBuilder.array([]),
        selfInsc: [false]
      });
  }

  // pour gérer la validation du formulaire + création team // 
  onSubmitForm(){   
    const formValue = this.teamForm.value;
    const newTeam = new Team (
      this.tournamentService.id,
      formValue['teamName'],
      this.extPlayers()
    );
    console.log(newTeam);
    this.tournamentService.addTeamtoTournament(formValue['teamName'],newTeam.players)
    alert("Votre équipe a bien été enregistré !");
    this.router.navigate(["events"])
  }

  // Pour rajouter des joueurs au formulaire lors du click sur ajouter Joueur //
  onAddPlayer(){
    const player = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      level: [null, [Validators.required,Validators.min(1),Validators.max(5)] ] /* , Validators.pattern('[A-Za-z]+') */
    });
    this.playersForms.push(player);
  }
  // pour supprimer des joueurs dans formulaire // 
  onDeletePlayer(i){
    this.playersForms.removeAt(i);
  }

  // pour extraire les joueurs du formulaires // 
  extPlayers(){
    const formValues = this.teamForm.value;
    const players : any[] = [];
    formValues['players'].forEach( p => {
      players.push( [p.name,p.level]);
    });
    if(formValues['selfInsc']){
      players.push( [this.userService.user.firstName, this.userService.user.niveau])
    }
    return players;
  }
  //////////////////////////////////////////////////////////////////////
  ////////// ----- Pour vérifier l'intégrité des données -----//////////
  //////////////////////////////////////////////////////////////////////
  
  get teamName() { 
    return this.teamForm.get('teamName');
  }
    // pour transformer correctement les players // 
  get playersForms(){
      return this.teamForm.get('players') as FormArray;
  }


}
