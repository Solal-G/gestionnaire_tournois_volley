import { Team } from '../models/team.modele';
import { TEAMS } from '../pseudoBDD/teams-list';
import { Subject } from 'rxjs';

export class TeamService {
    
    private teams: Team[] = TEAMS;
    teamByTournament : any[];

    tournamentid: string;
    newTeam : Team; // nouvelle équipe à ajouter

     teamSubject = new Subject<Team[]>();
    team : Team;
    emitTeam(){
        this.teamSubject.next(this.teams.slice());
    }

    getTeamByTournament(teamRegitered: string[]){ 
        const teams : Team[] = [];
        teamRegitered.forEach( t => {
            const team = this.teams.find(
                (teamObj) => { return (teamObj.teamName === t);}
            )
            //console.log(team);
            teams.push(team);
        });
        return teams;
    }
    // Retourne objet Team corresp au nom (utilisé dans getTeams() de tournamentComp)
    getTeamByName(teamName : string){
        const team = this.teams.find(
            (teamObj) => { return (teamObj.teamName == teamName) }
        );

        return team;
    }
}