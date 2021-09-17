import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.modele';
import { Team } from '../models/team.modele';
import { EventService } from '../services/event.service';
import { TournamentService } from '../services/tournament.service';
import { TeamService } from '../services/team.service';
import { EventVB } from '../models/event.modele';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';
import { UserService } from '../services/user.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-event-in-progress',
  templateUrl: './event-in-progress.component.html',
  styleUrls: ['./event-in-progress.component.scss']
})
export class EventInProgressComponent implements OnInit {
  ///////////////////////////////////////////////
  ////////// PARTIE NON LOCALE STORAGE //////////
  /////////////////////////////////////////////// 
  event: EventVB;
  tournaments: Tournament[];
  teams : Team[];
  
  constructor(private eventService: EventService,
              private tournamentService: TournamentService, 
              private teamService : TeamService,
              private route : ActivatedRoute,
              private localStorageService: LocalStorageService, 
              private userService: UserService,
              private rs: RequestService){}
  ngOnInit() {
    if(this.valide()){
        if(!this.localStorageService.local){
          this.event = this.eventService.getEventByName(this.route.snapshot.params['name']);
          this.tournaments = this.eventService.getTournamentsFromString(this.event.name);
          this.userService.tournameInProgress = this.tournaments;
          window.localStorage.clear();
        }
        else{
          this.event = this.eventService.getEventByName(this.userService.eventInProgress)
          this.tournaments = this.userService.tournameInProgress;
        }
        //let t  = [];
        //this.tournaments.forEach(tournament => {
        //   tournament.teamRegistered.forEach(team => {
        //     t.push(this.teamService.getTeamByName(team))
        //   });
        // });
        //this.teams = t; 
    }  
  }
  // Pour éviter tout bug sur le rootage (à améliorer !!)
  valide(){
    if(this.route.snapshot.params['name'] == ':name') console.log("== :name ");
    if(this.route.snapshot.params['name'] == null) console.log( "== null ");
    if (this.route.snapshot.params['name'] == undefined) console.log("== undefined");
    return !(this.route.snapshot.params['name'] == ':name' || this.route.snapshot.params['name'] == null || this.route.snapshot.params['name'] == undefined);
  }
  // 
  clearLocalStorage(){
    window.localStorage.clear();
    this.localStorageService.local = false;

  }
  startLocalStorage(){
    this.localStorageService.local = true;
    this.eventService.getTournamentsFromString(this.event.name);
  }
    /* Méthode pour enregistrer la chaine du local storage dans la table évènement de la BDD*/
  save(){
    let str = window.localStorage.getItem("tournament");
    //console.log(str)
    this.rs.request("UPDATE event SET string = '"+str+"' WHERE nom='"+this.userService.eventInProgress+"'");
    alert("La requête a été envoyé coté serveur.");
    }
}
