export class Queue<T> {
    private array: T[] = [];

    constructor() {}

    isEmpty(): boolean {
        return this.array.length <= 0;
    }

    enqueue(item: T): void {
        this.array.push(item);
    }

    dequeue(): T | undefined {
        return this.array.shift();
    }
}