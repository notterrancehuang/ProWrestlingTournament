"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wrestlersInput_json_1 = __importDefault(require("./wrestlersInput.json"));
const match_1 = require("./match");
class Tournament {
    constructor(wrestlers) {
        this.wrestlers = wrestlers;
        this.matchNumber = 1;
        // create matches with all wrestlers at beginning of tournament
        this.createMatches(wrestlers);
    }
    createMatches(wrestlers) {
        let numWrestlers = wrestlers.length;
        let matches;
        for (let i = 0; i < numWrestlers - 1; i += 2) {
            let wrestler1 = wrestlers[i];
            let wrestler2 = wrestlers[i + 1];
            matches.push(new match_1.Match(wrestler1, wrestler2));
        }
        return matches;
    }
}
const wrestlers = wrestlersInput_json_1.default;
console.log(wrestlers);
let tournament = new Tournament(wrestlers);
