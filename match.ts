import { Wrestler } from "./wrestler";
import { Move } from "./move";

export class Match {
    // where the match takes place
    private roundNumber: number = 1;
    private _wrestler1:Wrestler;
    private _wrestler2:Wrestler;
    
    constructor(wrestler1:Wrestler, wrestler2: Wrestler) {
        this._wrestler1 = wrestler1;
        this._wrestler2 = wrestler2;
    }

    startMatch() {
        if (!this.wrestler2) {
            // if wrestler 2 is an empty object, then wrestler 1 progresses
            console.log(`${this.wrestler1.name} on bye. Round progressing.`)
            return;
        } else if (!this.wrestler1) {
            // if wrestler 1 is an empty object, then wrestler 2 progresses
            console.log(`${this.wrestler2.name} on bye. Round progressing.`)
            return;
        }

        while (!this.wrestler1.isOut && !this.wrestler2.isOut) {
            console.log(`Round ${this.roundNumber++}`);
            // Alternating turns: true -> Wrestler 1, false -> Wrestler 2
            let turn: boolean = true; 
            if (turn) {
                let move = this.pickRandomMove(this.wrestler1);
                this.wrestler1.attack(move, this.wrestler2);
                turn = !turn;
            } else {
                let move = this.pickRandomMove(this.wrestler2);
                this.wrestler2.attack(move, this.wrestler1);
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

    pickRandomMove(wrestler:Wrestler):Move {
        let numMoves = wrestler.moves.length;
        let randomNumber = Math.floor(Math.random() * numMoves);
        let move = wrestler.moves[randomNumber];
        return move;
    }

    displayWinner(): string {
        if (this.wrestler2.isOut) {
            // wrestler 1 is the winner
            return `${this.wrestler2.name}'s health is below 0. ${this.wrestler1.name} wins!`;
        } else {
            // wrestler 2 is the winner
            return `${this.wrestler1.name}'s health is below 0. ${this.wrestler2.name} wins!`;
        }
    }
}