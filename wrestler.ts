import { Move } from "./move";

export class Wrestler {
    private _name: string;
    private _initialHealth: number;
    private _health: number;
    private _moves: Move[];

    constructor(name: string, health: number, moves:Move[]) {
        this._name = name;
        this._initialHealth = health;
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

    set name(name: string) {
        this._name = name;
    }

    takeDamage(damage: number) {
        this.health -= damage;
        if (this.health < 0) {
            // if health goes below 0, reset to 0
            this.health = 0;
        }
    }

    set moves(moves: Move[]) {
        this._moves = moves;
    }

    set health(health: number) {
        this._health = health;
    }

    attack(move: Move, opponent: Wrestler): string {
        opponent.takeDamage(move.damage);
        return `${this.name} performs ${move.name} on ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`;
    }

    pickRandomMove():Move {
        let numMoves = this.moves.length;
        let randomNumber = Math.floor(Math.random() * numMoves);
        let move = this.moves[randomNumber];
        return move;
    }

    isOut(): boolean {
        return this.health <= 0;
    }

    resetHealth() {
        this.health = this._initialHealth;
    }

    static fromJSON(json: any): Wrestler {
        const { name, health, moves }  = json;
        return new Wrestler(name, health, moves);
    }
}
