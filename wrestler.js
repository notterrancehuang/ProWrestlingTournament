"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrestler = void 0;
var Wrestler = /** @class */ (function () {
    function Wrestler() {
    }
    Object.defineProperty(Wrestler.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wrestler.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (health) {
            this._health = health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wrestler.prototype, "moves", {
        get: function () {
            return this._moves;
        },
        set: function (moves) {
            this._moves = moves;
        },
        enumerable: false,
        configurable: true
    });
    Wrestler.prototype.takeDamage = function (damage) {
        this.health -= damage;
        if (this.health < 0) {
            // if health goes below 0, reset to 0
            this.health = 0;
        }
    };
    Wrestler.prototype.attack = function (move, opponent) {
        opponent.takeDamage(move.damage);
        return "".concat(this.name, " performs ").concat(move.name, " on ").concat(opponent.name, ". ").concat(opponent.name, "'s health: ").concat(opponent.health);
    };
    Wrestler.prototype.pickRandomMove = function () {
        var numMoves = this.moves.length;
        var randomNumber = Math.floor(Math.random() * numMoves);
        var move = this.moves[randomNumber];
        return move;
    };
    Wrestler.prototype.isOut = function () {
        return this.health <= 0;
    };
    return Wrestler;
}());
exports.Wrestler = Wrestler;
