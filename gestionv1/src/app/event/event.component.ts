import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  //name: string;
  @Input() name: string;
  @Input() dateEv: Date;
  @Input() dateLimite: Date;
  @Input() tournois: string[];
  @Input() indexEvent: number; // pr *ngFor et (un)registerTeam
  @Input() description: string[];
  
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }


}
