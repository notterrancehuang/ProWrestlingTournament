"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
var Match = /** @class */ (function () {
    function Match(wrestler1, wrestler2) {
        // where the match takes place
        this.roundNumber = 1;
        this._wrestler1 = wrestler1;
        this._wrestler2 = wrestler2;
    }
    Match.prototype.startMatch = function () {
        if (!this.wrestler2) {
            // if wrestler 2 is an empty object, then wrestler 1 progresses
            console.log("".concat(this.wrestler1.name, " on bye. Round progressing."));
            return;
        }
        else if (!this.wrestler1) {
            // if wrestler 1 is an empty object, then wrestler 2 progresses
            console.log("".concat(this.wrestler2.name, " on bye. Round progressing."));
            return;
        }
        while (!this.wrestler1.isOut && !this.wrestler2.isOut) {
            console.log("Round ".concat(this.roundNumber++));
            // Alternating turns: true -> Wrestler 1, false -> Wrestler 2
            var turn = true;
            if (turn) {
                var move = this.pickRandomMove(this.wrestler1);
                this.wrestler1.attack(move, this.wrestler2);
                turn = !turn;
            }
            else {
                var move = this.pickRandomMove(this.wrestler2);
                this.wrestler2.attack(move, this.wrestler1);
                turn = !turn;
            }
        }
        // Round is over. Checking who won
        var winnerMessage = this.displayWinner();
        console.log(winnerMessage);
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
    Match.prototype.pickRandomMove = function (wrestler) {
        var numMoves = wrestler.moves.length;
        var randomNumber = Math.floor(Math.random() * numMoves);
        var move = wrestler.moves[randomNumber];
        return move;
    };
    Match.prototype.displayWinner = function () {
        if (this.wrestler2.isOut) {
            // wrestler 1 is the winner
            return "".concat(this.wrestler2.name, "'s health is below 0. ").concat(this.wrestler1.name, " wins!");
        }
        else {
            // wrestler 2 is the winner
            return "".concat(this.wrestler1.name, "'s health is below 0. ").concat(this.wrestler2.name, " wins!");
        }
    };
    return Match;
}());
exports.Match = Match;
