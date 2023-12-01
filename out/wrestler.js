"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrestler = void 0;
class Wrestler {
    constructor(name, health, moves) {
        this._name = name;
        this._health = health;
        this._moves = moves;
    }
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
        this._health -= damage;
        if (this._health < 0) {
            // if health goes below 0, reset to 0
            this._health = 0;
        }
    }
    set moves(moves) {
        this._moves = moves;
    }
    isOut() {
        return this._health <= 0;
    }
    displayAttack(move, opponent) {
        return this._name + " performs " + move.name + " on " + opponent.name
            + ". " + opponent.name + "'s health: " + opponent.health;
    }
}
exports.Wrestler = Wrestler;
