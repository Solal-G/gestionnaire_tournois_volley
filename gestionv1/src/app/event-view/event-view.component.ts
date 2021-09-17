import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { EventVB } from '../models/event.modele';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

  //importation via le service d'events du tableau
  // des events contenu dans events-list
  events : EventVB[];


  constructor(private eventService: EventService, private requestService: RequestService ) { }
  ngOnInit(){
    this.eventService.getEventFromBDD();
    this.events = this.eventService.events;
    

  }

}
