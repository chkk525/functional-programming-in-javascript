class MiniPerson {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}

const Curry = new MiniPerson('Haskell', 34)
Curry._age = 24;
console.log(Curry);
// => MiniPerson { _name: 'Haskell', _age: 24 }

const FreezedCurry = Object.freeze(new MiniPerson('Haskell', 34));
FreezedCurry._age = 23;
console.log(FreezedCurry);