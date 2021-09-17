import { Injectable } from '@angular/core';
import { Tournament } from '../models/tournament.modele';
import { TeamService } from './team.service';
import { RequestService } from './request.service';
import { LocalStorageService } from './localstorage.service';

@Injectable()
export class TournamentService {

    tournaments : Tournament[] = [];// = TOURNAMENTS;

   // tournament: Tournament = new Tournament("","",1,[],""); // tournois courrant
    //str: string; // la string du tournoi

    name : string; // nom du tournois auquel inscrire
    id : string;
    constructor(private teamService: TeamService, private rs: RequestService, private ls : LocalStorageService){}
   
    getTournamentById(id: string){
        const tournament = this.tournaments.find(
            (tournamentObj) => {
                return (tournamentObj.id === id);
            }
        );
        return tournament;
    }
/*     // initialise tournois courant pr inscription quand clique sur inscrire //
    // pout que new-team puisse récupérer les informations du tournois // 
    setTournament(idE: string, nameT: string, format: number){ 
        console.log(this.tournament);
       this.tournament.id = idE; 
       this.tournament.nameT = nameT;
       this.tournament.format = format;
       this.str = this.getStringFromBDD(nameT,idE);
       console.log(this.str);
        // ajout du tournois dans le local storage si pas déjà présent
        if(this.ls.getTournament(nameT) == null){
            window.localStorage.setItem('tournament', this.str);
      }
    } */
    addTournament(T: Tournament){
        console.log(T);
        // ajout de la string du tournois
        this.ls.addTournament(T.nameT, T.format); // a la création du tournois
        let str =   this.ls.getTournament(T.nameT) // vers SQL
        console.log(str);
        let r = this.rs.request("INSERT INTO tournaments (nameT,format, string, idE) VALUES ( '"+T.nameT+"', "+T.format+", '"+str+"' , '"+T.id+"' )");
        console.log(r);
    }

// surement plus d'actualité 
    getTournaments(tournoisName: string[], dateEv : string){
        const T : Tournament[] = [];
        tournoisName.forEach(tournoisName => {
            T.push(this.getTournamentById(tournoisName+dateEv));
        })
        return T;
      }
// retourne le stournois pour un event
/*       getTFromBddByIde(idE: string){
          let idEv = +idE;
          let r = this.rs.request("SELECT * from tournaments WHERE idE= '"+idEv+"'");
          r = JSON.parse(r);
          let i = 0; let ts : Tournament[] = [];
          while(r[i] != undefined){
              let t = new Tournament(idE, r[i]['nameT'],r[i]['format'],[r[i]['string']], r[i]['winner']);
              ts.push(t);
              i++;
          }
          return ts;
      } */
/*       getStringFromBDD(nameT: string, idE : string){
          let r = this.rs.request("SELECT string from tournaments WHERE idE = '"+idE+"' AND nameT='"+nameT+"'");
          r = JSON.parse(r);
         // console.log(r[0]['string']);
          return r[0]['string'];
      } */
      addTeamtoTournament(teamName: string, players: any){
          this.ls.addTeam(this.name, teamName);
          // ajout des joueurs 
          players.forEach(p => { 
              //console.log(p);
              this.ls.addPlayer(this.name, teamName, p[0], p[1])
            })
          // récupère l'item du local storage pour update la bdd
          let str = window.localStorage.getItem('tournament');
          let idE = +this.id; console.log(idE)
          let r = this.rs.request("UPDATE event SET string = '"+str+"' WHERE id= '"+this.id+"' ");
        }
    

}

