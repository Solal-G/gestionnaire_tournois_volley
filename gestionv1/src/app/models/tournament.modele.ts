export class Tournament {
    constructor(
        public id: string,
        public nameT: string,
        public format: number,
        public teamRegistered : string[],
        public winner: string){}
}