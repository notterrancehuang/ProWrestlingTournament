var wrestlersInput = require('./inputs/wrestlersInput.json');
import { Wrestler } from './wrestler';
import { Match } from './match';

class Tournament {
    private wrestlers: Wrestler[];
    private matchNumber: number;
    private matches:Match[];

    constructor(wrestlers: Wrestler[]) {
        this.wrestlers = wrestlers;
        this.matchNumber = 1;
        // create matches with all wrestlers at beginning of tournament
        this.matches = this.createMatches(wrestlers);
    }

    private createMatches(wrestlers: Wrestler[]) {
        let numWrestlers = wrestlers.length;
        let matches:Match[] = [];
        for (let i = 0; i < numWrestlers; i += 2) {
            let wrestler1 = wrestlers[i];
            let wrestler2 = wrestlers[i + 1];
            matches.push(new Match(wrestler1, wrestler2));
        }
        return matches;
    }

    playMatches() {
        let numMatches = this.matches.length;
        for (let i = 0; i < numMatches; i++) {
            let match = this.matches[i];
            console.log(`Match ${this.matchNumber++}: ${match.wrestler1.name} vs. ${match.wrestler2.name}`);
            match.startMatch();
        }
    }
}

// const wrestlers:Wrestler[] = wrestlersInput as Wrestler[];
// const wrestlers:Wrestler[] = Object.assign(new Wrestler[], wrestlersInput);
let wrestlers:Wrestler[] = [];
wrestlersInput.forEach(element => {
    wrestlers.push(element);
});
let tournament = new Tournament(wrestlers);
tournament.playMatches();
