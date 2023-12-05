export class Stack<T> {
    private array: T[] = [];

    constructor() {

    }

    push(item: T): void {
        this.array.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) throw Error("Empty stack");
        return this.array.pop();
    }
    
    peek(): T {
        if (this.isEmpty()) throw Error("Empty stack");
        return this.array[this.array.length - 1];
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }
}