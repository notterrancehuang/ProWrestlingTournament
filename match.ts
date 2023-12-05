import { Wrestler } from "./wrestler";

export class Match {
    // where the match takes place
    static matchNumber: number = 1;
    private roundNumber: number = 1;
    private _wrestler1:Wrestler;
    private _wrestler2:Wrestler;
    
    constructor(wrestler1:Wrestler, wrestler2: Wrestler) {
        this._wrestler1 = wrestler1;
        this._wrestler2 = wrestler2;
    }

    startMatch(): Wrestler {
        if (!this.wrestler2) {
            // if wrestler 2 is an empty object, then wrestler 1 progresses
            return this.wrestler1;
        } else if (!this.wrestler1) {
            // if wrestler 1 is an empty object, then wrestler 2 progresses
            return this.wrestler2;
        }

        console.log(`Match ${Match.matchNumber++}: ${this.wrestler1.name} vs. ${this.wrestler2.name}`);
        // Alternating turns: true -> Wrestler 1, false -> Wrestler 2
        let turn: boolean = true; 

        while (!this.wrestler1.isOut() && !this.wrestler2.isOut()) {
            console.log(`Round ${this.roundNumber++}:`);
            if (turn) {
                let move = this.wrestler1.pickRandomMove();
                let message = this.wrestler1.attack(move, this.wrestler2);
                console.log(message);
                turn = !turn;
            } else {
                let move = this.wrestler2.pickRandomMove();
                let message = this.wrestler2.attack(move, this.wrestler1);
                console.log(message);
                turn = !turn;
            }
        }

        // Round is over. Checking who won
        let winnerMessage = this.displayWinner();
        console.log(winnerMessage);
        return this.getWinner();
    }

    get wrestler1() {
        return this._wrestler1;
    }
    
    get wrestler2() {
        return this._wrestler2;
    }

    getWinner(): Wrestler {
        return this.wrestler1.isOut ? this.wrestler2 : this.wrestler1;
    }

    displayWinner(): string {
        if (this.getWinner() === this.wrestler1) {
            return `${this.wrestler2.name}'s health is below 0. ${this.getWinner().name} wins!\n`;
        } else {
            // wrestler 2 is the winner
            return `${this.wrestler1.name}'s health is below 0. ${this.getWinner().name} wins!\n`;
        }
    }
}