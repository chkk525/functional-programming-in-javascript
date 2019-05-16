/**
 * Person object
 */
exports.Person = class Person {
	constructor(firstname, lastname, ssn) {
		this._firstname = firstname;
		this._lastname = lastname;
		this._ssn = ssn;
	}

	// Getters
	get ssn() {
		return this._ssn;
	}

	get firstname() {
		return this._firstname;
	}

	get lastname() {
		return this._lastname;
	}

	get address() {
		return this._address;
	}

	get birthYear() {
		return this._birthYear;
	}

	// Setters (for initialization)
	set birthYear(year) {
		this._birthYear = year;
	}

	set address(addr) {
		this._address = addr;
	}

	toString() {
		return `Person(${this._firstname}, ${this._lastname})`;
	}
	// Find person with same country
	peopleInCountry(friends) {
		var result = [];
		for (let idx in friends) {
			var friend = friends[idx];
			if (this.address.country === friend.address.country) {
				result.push(friend);
			}
		}
		return result;
	}

}