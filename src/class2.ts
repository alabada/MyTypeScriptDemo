class Emplyee {
    private _name: string;

    get name(): string { // 若无此方法， 将打印undefined
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

let e = new Emplyee();

e.name = "wenzhida" // set name
console.log(e.name);