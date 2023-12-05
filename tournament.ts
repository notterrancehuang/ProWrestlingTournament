var wrestlersInput = require('./wrestlersInput.json');
import { Wrestler } from './wrestler';
import { Match } from './match';
import { Queue } from './queue';

class Tournament {
    private matches:Queue<Match>;
    private winners:Queue<Wrestler> = new Queue<Wrestler>();

    constructor(wrestlers: Wrestler[]) {
        // create matches with all wrestlers at beginning of tournament
        this.matches = this.createMatches(wrestlers);
    }

    private createMatches(wrestlers: Wrestler[]) {
        let numWrestlers = wrestlers.length;
        let matches: Queue<Match> = new Queue<Match>();
        for (let i = 0; i < numWrestlers; i += 2) {
            let wrestler1 = wrestlers[i];
            let wrestler2 = wrestlers[i + 1];
            matches.enqueue(new Match(wrestler1, wrestler2));
        }
        return matches;
    }

    playMatches() {
        while (!this.matches.isEmpty()) {
            let match = this.matches.dequeue();
            let winner = match.startMatch();
            this.winners.enqueue(winner);
        }
        while (!this.winners.isEmpty()) {
            let wrestler1 = this.winners.dequeue();
            let wrestler2 = this.winners.dequeue();
            let match = new Match(wrestler1, wrestler2);
            match.startMatch();
        }
    }
}

let wrestlers:Wrestler[] = [];
wrestlersInput.forEach(element => {
    let wrestler = Object.assign(new Wrestler(), element);
    wrestlers.push(wrestler);
});
let tournament = new Tournament(wrestlers);
tournament.playMatches();
