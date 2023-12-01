"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wrestlersInput = require('./inputs/wrestlersInput.json');
var match_1 = require("./match");
var Tournament = /** @class */ (function () {
    function Tournament(wrestlers) {
        this.wrestlers = wrestlers;
        this.matchNumber = 1;
        // create matches with all wrestlers at beginning of tournament
        this.matches = this.createMatches(wrestlers);
    }
    Tournament.prototype.createMatches = function (wrestlers) {
        var numWrestlers = wrestlers.length;
        var matches = [];
        for (var i = 0; i < numWrestlers; i += 2) {
            var wrestler1 = wrestlers[i];
            var wrestler2 = wrestlers[i + 1];
            matches.push(new match_1.Match(wrestler1, wrestler2));
        }
        return matches;
    };
    Tournament.prototype.playMatches = function () {
        var numMatches = this.matches.length;
        for (var i = 0; i < numMatches; i++) {
            var match = this.matches[i];
            console.log("Match ".concat(this.matchNumber++, ": ").concat(match.wrestler1.name, " vs. ").concat(match.wrestler2.name));
            match.startMatch();
        }
    };
    return Tournament;
}());
// const wrestlers:Wrestler[] = wrestlersInput as Wrestler[];
// const wrestlers:Wrestler[] = Object.assign(new Wrestler[], wrestlersInput);
var wrestlers = [];
wrestlersInput.forEach(function (element) {
    wrestlers.push(element);
});
var tournament = new Tournament(wrestlers);
tournament.playMatches();
