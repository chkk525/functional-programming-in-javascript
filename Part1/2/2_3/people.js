class Person {
  constructor(name, country) {
    this._name = name;
    this._country = country;
  }

  get name() {
    return this._name;
  }

  get country() {
    return this._country;
  }
}

const p1 = new Person("A", "US");
const p2 = new Person("B", "EU");
const p3 = new Person("C", "US");
const p4 = new Person("D", "EU");
const p5 = new Person("E", "US");

const people = [p1, p2, p3, p4, p5];

// OP approach
function peopleInTheUS(people) {
  for (let i in people) {
    const person = people[i];
    if (person.country === "US") {
      console.log(person);
    }
  }
}

console.log(`- - OOP - -`);
peopleInTheUS(people);

// FP approach
function printPeople(people) {
  people.forEach(p => console.log(p));
}

const isInTheUS = person => person.country === "US";

console.log(`- - FP1 - -`);
printPeople(people.filter(isInTheUS));

function actionForEachPerson(people, action, selector = p => true) {
  people.filter(selector).forEach(person => {
    action(person);
  });
}

console.log(`- - FP2_1 - -`);
actionForEachPerson(people, console.log);

console.log(`- - FP2_2 - -`);
actionForEachPerson(people, console.log, isInTheUS);

console.log(`- - FP2_3 - -`);
const isIn = country => person => person.country === country;
actionForEachPerson(people, console.log, isIn("US"));
