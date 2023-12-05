"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
var Match = /** @class */ (function () {
    function Match(wrestler1, wrestler2) {
        this.roundNumber = 1;
        this._wrestler1 = wrestler1;
        this._wrestler2 = wrestler2;
    }
    Match.prototype.startMatch = function () {
        if (!this.wrestler2) {
            // if wrestler 2 is an empty object, then wrestler 1 progresses
            return this.wrestler1;
        }
        else if (!this.wrestler1) {
            // if wrestler 1 is an empty object, then wrestler 2 progresses
            return this.wrestler2;
        }
        console.log("Match ".concat(Match.matchNumber++, ": ").concat(this.wrestler1.name, " vs. ").concat(this.wrestler2.name));
        // Alternating turns: true -> Wrestler 1, false -> Wrestler 2
        var turn = true;
        while (!this.wrestler1.isOut() && !this.wrestler2.isOut()) {
            console.log("Round ".concat(this.roundNumber++, ":"));
            if (turn) {
                var move = this.wrestler1.pickRandomMove();
                var message = this.wrestler1.attack(move, this.wrestler2);
                console.log(message);
                turn = !turn;
            }
            else {
                var move = this.wrestler2.pickRandomMove();
                var message = this.wrestler2.attack(move, this.wrestler1);
                console.log(message);
                turn = !turn;
            }
        }
        // Round is over. Checking who won
        var winnerMessage = this.displayWinner();
        console.log(winnerMessage);
        return this.getWinner();
    };
    Object.defineProperty(Match.prototype, "wrestler1", {
        get: function () {
            return this._wrestler1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "wrestler2", {
        get: function () {
            return this._wrestler2;
        },
        enumerable: false,
        configurable: true
    });
    Match.prototype.getWinner = function () {
        return this.wrestler1.isOut ? this.wrestler2 : this.wrestler1;
    };
    Match.prototype.displayWinner = function () {
        if (this.getWinner() === this.wrestler1) {
            return "".concat(this.wrestler2.name, "'s health is below 0. ").concat(this.getWinner().name, " wins!\n");
        }
        else {
            // wrestler 2 is the winner
            return "".concat(this.wrestler1.name, "'s health is below 0. ").concat(this.getWinner().name, " wins!\n");
        }
    };
    // where the match takes place
    Match.matchNumber = 1;
    return Match;
}());
exports.Match = Match;
