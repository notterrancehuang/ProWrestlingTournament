"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var Move = /** @class */ (function () {
    function Move(name, damage, type) {
        this._name = name;
        this._damage = damage;
        this._type = type;
    }
    Object.defineProperty(Move.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return Move;
}());
exports.Move = Move;
