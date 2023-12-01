export class Move {
    private _name: string;
    private _damage: number;
    private _type: string

    constructor(name: string, damage: number, type: string) {
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
}