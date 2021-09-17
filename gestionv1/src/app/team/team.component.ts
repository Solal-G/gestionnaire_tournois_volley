import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() tournamentid: string;
  @Input() teamName: string;
  @Input() players: string[];

  constructor(private teamService : TeamService) { }

  ngOnInit() {
  }
  
}
