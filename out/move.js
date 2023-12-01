"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
class Move {
    constructor(name, damage, type) {
        this._name = name;
        this._damage = damage;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    get damage() {
        return this._damage;
    }
    get type() {
        return this._type;
    }
    set name(name) {
        this._name = name;
    }
    set damage(damage) {
        this._damage = damage;
    }
    set type(type) {
        this._type = type;
    }
}
exports.Move = Move;
