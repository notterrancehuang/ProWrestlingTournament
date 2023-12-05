"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrestler = void 0;
class Wrestler {
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    get moves() {
        return this._moves;
    }
    set name(name) {
        this._name = name;
    }
    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            // if health goes below 0, reset to 0
            this.health = 0;
        }
    }
    set moves(moves) {
        this._moves = moves;
    }
    set health(health) {
        this._health = health;
    }
    attack(move, opponent) {
        opponent.takeDamage(move.damage);
        return `${this.name} performs ${move.name} on ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`;
    }
    pickRandomMove() {
        let numMoves = this.moves.length;
        let randomNumber = Math.floor(Math.random() * numMoves);
        let move = this.moves[randomNumber];
        return move;
    }
    isOut() {
        return this.health <= 0;
    }
}
exports.Wrestler = Wrestler;
