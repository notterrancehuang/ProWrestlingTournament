"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wrestlersInput = require('./wrestlersInput.json');
var wrestler_1 = require("./wrestler");
var match_1 = require("./match");
var queue_1 = require("./queue");
var Tournament = /** @class */ (function () {
    function Tournament(wrestlers) {
        this.winners = new queue_1.Queue();
        // create matches with all wrestlers at beginning of tournament
        this.matches = this.createMatches(wrestlers);
    }
    Tournament.prototype.createMatches = function (wrestlers) {
        var numWrestlers = wrestlers.length;
        var matches = new queue_1.Queue();
        for (var i = 0; i < numWrestlers; i += 2) {
            var wrestler1 = wrestlers[i];
            var wrestler2 = wrestlers[i + 1];
            matches.enqueue(new match_1.Match(wrestler1, wrestler2));
        }
        return matches;
    };
    Tournament.prototype.playMatches = function () {
        while (!this.matches.isEmpty()) {
            var match = this.matches.dequeue();
            var winner = match.startMatch();
            this.winners.enqueue(winner);
        }
        while (!this.winners.isEmpty()) {
            var wrestler1 = this.winners.dequeue();
            var wrestler2 = this.winners.dequeue();
            var match = new match_1.Match(wrestler1, wrestler2);
            match.startMatch();
        }
    };
    return Tournament;
}());
var wrestlers = [];
wrestlersInput.forEach(function (element) {
    var wrestler = wrestler_1.Wrestler.fromJSON(element);
    wrestlers.push(wrestler);
});
var tournament = new Tournament(wrestlers);
tournament.playMatches();
