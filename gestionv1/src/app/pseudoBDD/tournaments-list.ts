import { Tournament } from "../models/tournament.modele";

export const TOURNAMENTS: Tournament[] =
[
        {
            id: "Elite G20/06/20", // nameT+dateEv de l'event associé
            nameT: "Elite G",
            format: 3, // pr 3x3 
            teamRegistered: ["TheTeam","Teamhaute", "champ", "Les3mousquetaires", "theEquipe","lesTrois","LesQuatres","lesBgdu34","equipeOM","Acteurs","Leslucky","random","Finteur","Attaquants", "Gignacois","lesKing","JeanTlemen" ],
            winner: ""
        },
        {
            id: "Elite F20/06/20",
            nameT: "Elite F",
            format: 3, // pr 3x3 
            teamRegistered: ["MJCBD"],
            winner: ""
        },
        {
            id: "Elite G27/06/20",
            nameT: "Elite G",
            format: 4,
            teamRegistered: [],
            winner: ""
        }
];
