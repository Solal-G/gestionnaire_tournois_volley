import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { Tournament } from '../models/tournament.modele';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team.modele';
import { LocalStorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  @Input() id: string; // représente idE 
  @Input() nameT: string;
  @Input() format: number; 
  @Input() teamRegistered: string[];
  @Input() winner: string; 

  teams: Team[];
  inscritpion : boolean = false;
  listerEquipe : boolean = false;
  NbTeamRegistered: number = 0;
  constructor(private tournamentService: TournamentService,
              private teamService : TeamService, private ls : LocalStorageService) { }

  ngOnInit() {
    this.NbTeamRegistered = this.nbTeams;
  }


  onClickInscrire(nameT: string){
    if(this.inscritpion) this.inscritpion = !this.inscritpion;
    else this.inscritpion = !this.inscritpion;
    this.tournamentService.name = nameT;
    this.tournamentService.id = this.id;
  }
  // gère l'affichage/désaffichage des équipes // 
  displayTeams(){
    this.teams = [];
    if(this.listerEquipe) this.listerEquipe = false
    else this.listerEquipe = !this.listerEquipe;
    let teamsnames = this.ls.getTeams(this.nameT);
    teamsnames.forEach(t => {
      let players = this.ls.getTeamPlayers(this.nameT,t[0]);
      let newTeam = new Team(this.id, t[0], players );
      this.teams.push(newTeam);
    })
  }
  get nbTeams(){
    let teamsnames = this.ls.getTeams(this.nameT);
    let nb = 0;
    teamsnames.forEach(t => nb++ );
    return nb;
  }


}