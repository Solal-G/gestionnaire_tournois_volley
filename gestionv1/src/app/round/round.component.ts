import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  @Input() pouleArray : Array<object>;
  @Input() numRound: number;
  
  nameTourament="";

  constructor(private route : ActivatedRoute, private localstorageService : LocalStorageService) {}

  /* Ajoute une poule lorsque l'on clique sur le bouton correspondant */
  addP(){
    this.localstorageService.addPoolToRound(this.nameTourament,this.numRound);
    this.pouleArray = this.localstorageService.getPoolsFromRound(this.nameTourament,this.numRound);
  }

  ngOnInit(): void {
    this.nameTourament = this.route.snapshot.params['trn'];
  }

  /* met a jour le tableau des poules quand un poule émet un message refreshround */
  refreshRound(){
    this.pouleArray = this.localstorageService.getPoolsFromRound(this.nameTourament, this.numRound);
  }

}
