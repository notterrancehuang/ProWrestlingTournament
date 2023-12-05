"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.array = [];
    }
    Queue.prototype.isEmpty = function () {
        return this.array.length <= 0;
    };
    Queue.prototype.enqueue = function (item) {
        this.array.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.array.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
