const Person = require("./models/Person.js.js").Person;
const Student = require("./models/Student.js.js").Student;
const Address = require("./models/Address.js.js").Address;

const person1 = new Person("Ken", "Suzuki", "1111-1111-1111")
person1.address = new Address("Tokyo");
const person2 = new Person("Tatsuya", "Sato", "1111-1111-1111")
person2.address = new Address("Tokyo");
const person3 = new Person("Hanako", "Kitagawa", "1111-1111-1111")
person3.address = new Address("Osaka");
const friends1 = [person2, person3]

const student1 = new Student("Ken", "Suzuki", "1111-1111-1111", "University of Tokyo");
student1.address = new Address("Tokyo");
const student2 = new Student("Tatsuya", "Sato", "1111-1111-1111", "University of Tokyo");
student2.address = new Address("Tokyo");
const student3 = new Student("Hanako", "Kitagawa", "1111-1111-1111", "Osaka University");
student3.address = new Address("Osaka");
const friends2 = [student2, student3]

// OOP approach
const result1 = person1.peopleInCountry(friends1);
console.log(result1);

const result2 = student1.peopleInCountry(friends2);
console.log(result2);

// FP approach
const selector = (country, school) =>
    (student) =>
    student.address.country === country &&
    student.school === school;

const findStudentBy = (friends, selector) => friends.filter(selector)

const result3 = findStudentBy(friends2, selector("Tokyo", "University of Tokyo"))
console.log(result3);