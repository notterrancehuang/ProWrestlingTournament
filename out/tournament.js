"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wrestlersInput = require('./wrestlersInput.json');
const wrestler_1 = require("./wrestler");
const match_1 = require("./match");
class Tournament {
    constructor(wrestlers) {
        this.wrestlers = wrestlers;
        this.matchNumber = 1;
        // create matches with all wrestlers at beginning of tournament
        this.matches = this.createMatches(wrestlers);
    }
    createMatches(wrestlers) {
        let numWrestlers = wrestlers.length;
        let matches = [];
        for (let i = 0; i < numWrestlers; i += 2) {
            let wrestler1 = wrestlers[i];
            let wrestler2 = wrestlers[i + 1];
            matches.push(new match_1.Match(wrestler1, wrestler2));
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
let wrestlers = [];
wrestlersInput.forEach(element => {
    let wrestler = Object.assign(new wrestler_1.Wrestler(), element);
    wrestlers.push(wrestler);
});
let tournament = new Tournament(wrestlers);
tournament.playMatches();
