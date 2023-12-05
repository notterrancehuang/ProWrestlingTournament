"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.array = [];
    }
    Stack.prototype.push = function (item) {
        this.array.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            throw Error("Empty stack");
        return this.array.pop();
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            throw Error("Empty stack");
        return this.array[this.array.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.array.length === 0;
    };
    return Stack;
}());
exports.Stack = Stack;
