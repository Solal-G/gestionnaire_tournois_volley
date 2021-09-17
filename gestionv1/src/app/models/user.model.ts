import { Team } from './team.modele';

export class User {
    // en mettant public ça crée directement ces prop ds model user
    constructor(public firstName: string, 
                public lastName: string,
                public birthday: string,
                public email: string,
                public niveau: number,
                public inscrit: Team[],
                public event: string[]){}
}