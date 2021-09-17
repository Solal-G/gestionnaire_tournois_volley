import { Injectable } from '@angular/core';
import { EventVB } from "../models/event.modele";
import { EVENTS } from '../pseudoBDD/events-list';
import { RequestService } from './request.service';
import { LocalStorageService } from './localstorage.service';
import { UserService } from './user.service';
import { Tournament } from '../models/tournament.modele';

@Injectable()
export class EventService {


    events: EventVB[] = [];// = EVENTS;
    constructor(private rs: RequestService, private localStorageService: LocalStorageService, private userService: UserService) { }

    // récupères les événements de la bdd // 
    getEventFromBDD() {
        this.events = [];
        let r = this.rs.request("SELECT * FROM event");
        //console.log(r);
        if (r != "]") {
            r = JSON.parse(r);
            let i = 0;
            while (r[i] != undefined) {
                let e = new EventVB(r[i]['nom'], r[i]['dateE'], r[i]['dateLimite'], [], r[i]['description']);
                // console.log(e);
                this.events.push(e);
                i++;
            }
        }
    }
    // ajoute l'event à la bdd //
    addEvent(E: EventVB) {
        let str = window.localStorage.getItem('tournament');
        let r = this.rs.request("INSERT INTO event (nom,string, dateE,dateLimite,description, idUser) VALUES ( '" + E.name + "', '" + str + "', '" + E.dateEv + "', '" + E.dateLimite + "', '" + E.description + "', '" + this.userService.user.email + "')");
    }
    getEventByNameV2(name: string) {
        let event: EventVB;
        this.events.forEach(ev => {
            if (ev.name === name) {
                event = ev;
            }
        });

        //  console.log(event);
        return event;
    }

    getEventByName(name: string) {
        const ev = this.events.find(
            (eventObject) => {
                return eventObject.name === name;
            }
        );
        return ev;
    }
    /*     getEventForUser(eventsname: string[]){
            const evs : EventVB[] = [];
            eventsname.forEach(name => {
                evs.push(this.getEventByName(name));
            })
            console.log(evs);
            return evs;
        }
     */
    getIdForEvent(name: string, dateEv: string, dateLimite: string) {
        let r = this.rs.request('SELECT id FROM event WHERE nom ="' + name + '" AND dateE= "' + dateEv + '" AND dateLimite= "'
            + dateLimite + '"');
        r = JSON.parse(r);
        return r[0]['id'];
    }

    getTournamentsFromString(name: string) {
        let r = this.rs.request("SELECT string, id from event WHERE nom = '" + name + "'");
        //console.log(r);
        r = JSON.parse(r);
        let idE = r[0]['id']; // console.log(idE);
        window.localStorage.setItem('tournament', r[0]['string']);
        let tournoisName: any[] = this.localStorageService.getTournamentsName();
      //  console.log("Dans getTournamentsFromString: " + tournoisName);
        const tournaments: Tournament[] = [];
        tournoisName.forEach(t => {
            let newTournois = new Tournament(idE, t, this.localStorageService.getFormat(t), this.localStorageService.getTeams(t), "")
            tournaments.push(newTournois);
        })
        //console.log(tournaments)
        return tournaments;
    }
    beginningEvent(name: string){
        let r = this.rs.request("SELECT string, id from event WHERE nom = '" + name + "'");
        console.log(r);
        r = JSON.parse(r);
        let idE = r[0]['id'];
    }
}
