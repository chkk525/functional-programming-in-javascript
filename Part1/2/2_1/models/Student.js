/**
 * Derived type Studen from Person
 */
const Person = require('./Person').Person;

exports.Student = class Student extends Person {
    constructor(firstname, lastname, ssn, school) {
        super(firstname, lastname, ssn);
        this._school = school;
    }

    get school() {
        return this._school;
    }

    studentsInSameCountryAndSchool(friends) {
        var result = [];

        for (var idx in friends) {
            var fr
            if (this.address.country === friend.address.country && this.school === this.school) {
                result.push(friend);
            }
        }

        return result;
    }
}


class Address {
    constructor(country) {
        this._country = country;
    }

    get country() {
        return this._country;
    }
}