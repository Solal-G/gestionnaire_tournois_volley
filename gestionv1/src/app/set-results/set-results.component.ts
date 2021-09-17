import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';
import { EventComponent } from '../event/event.component';
import { EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-set-results',
  templateUrl: './set-results.component.html',
  styleUrls: ['./set-results.component.scss']
})
export class SetResultsComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private localStorageService: LocalStorageService) { }
  tournamentName: string;
  form: FormGroup;
  @Input() numRound: number;
  @Input() numPoule: number;
  @Input() team1: string; //premiere équipe du match
  @Input() team2: string; // deuxième équipe du match
  @Output() messageToParent = new EventEmitter(); //Evenement pour mettre à jour les scores

  /* Initialise le formulaire des scores à 0 */
  ngOnInit() {
    this.tournamentName = this.route.snapshot.params['trn'];
    this.form = this.fb.group({
      score1: undefined,
      score2: undefined
    }) 
  }

  /* Ajoute les scores set par set du match lorsque l'on clique sur confirmer */
  onSubmit(team1: string, team2: string){
    let score1 = this.form.value["score1"];
    let score2 = this.form.value["score2"];
    this.localStorageService.addSetScoreToPool(this.tournamentName, this.numRound, this.numPoule, team1, team2, score1, score2);
    this.messageToParent.emit("ok");
  }
}

