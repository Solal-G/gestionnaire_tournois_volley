import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentService } from '../services/tournament.service';
import { Tournament } from '../models/tournament.modele';
import { EventVB } from '../models/event.modele';


@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnInit {

  name: string;
  dateEv: string;
  dateLimite: string;
  tournois: any[];
  description: String[];

  Tournaments: Tournament[];


  singleEvent : EventVB;
  constructor(private eventService: EventService,
            private route : ActivatedRoute,
            private tournamentService: TournamentService,
            private router: Router ){ }

  ngOnInit(){
    const name = this.route.snapshot.params['id']; //=nom event
    if(this.eventService.getEventByNameV2(name) == undefined){
      this.router.navigate(['404']);
    }
    else{
      let event: EventVB = this.eventService.getEventByNameV2(name);
      this.name = event.name; this.dateEv = event.dateEv; this.dateLimite = event.dateLimite;
      this.description = event.description;
      this.Tournaments = this.eventService.getTournamentsFromString(name);
    }
    
  }

  onClickTournament(nameT: string){
    this.tournamentService.name = nameT;
  }








}

