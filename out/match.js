"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    constructor(wrestler1, wrestler2) {
        // where the match takes place
        this.roundNumber = 1;
        this._wrestler1 = wrestler1;
        this._wrestler2 = wrestler2;
    }
    startMatch() {
        if (!this.wrestler2) {
            // if wrestler 2 is an empty object, then wrestler 1 progresses
            console.log(`${this.wrestler1.name} on bye. Round progressing.`);
            return;
        }
        else if (!this.wrestler1) {
            // if wrestler 1 is an empty object, then wrestler 2 progresses
            console.log(`${this.wrestler2.name} on bye. Round progressing.`);
            return;
        }
        // Alternating turns: true -> Wrestler 1, false -> Wrestler 2
        let turn = true;
        while (!this.wrestler1.isOut() && !this.wrestler2.isOut()) {
            console.log(`Round ${this.roundNumber++}:`);
            if (turn) {
                let move = this.wrestler1.pickRandomMove();
                let message = this.wrestler1.attack(move, this.wrestler2);
                console.log(message);
                turn = !turn;
            }
            else {
                let move = this.wrestler2.pickRandomMove();
                let message = this.wrestler2.attack(move, this.wrestler1);
                console.log(message);
                turn = !turn;
            }
        }
        // Round is over. Checking who won
        let winnerMessage = this.displayWinner();
        console.log(winnerMessage);
    }
    get wrestler1() {
        return this._wrestler1;
    }
    get wrestler2() {
        return this._wrestler2;
    }
    displayWinner() {
        if (this.wrestler2.isOut) {
            // wrestler 1 is the winner
            return `${this.wrestler2.name}'s health is below 0. ${this.wrestler1.name} wins!\n`;
        }
        else {
            // wrestler 2 is the winner
            return `${this.wrestler1.name}'s health is below 0. ${this.wrestler2.name} wins!\n`;
        }
    }
}
exports.Match = Match;
