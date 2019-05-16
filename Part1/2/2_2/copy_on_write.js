class Person {
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

    set name(newName) {
        return new Person(newName, this._age);
    }

    set age(newAge) {
        return new Person(this._name, this.newAge);
    }
}