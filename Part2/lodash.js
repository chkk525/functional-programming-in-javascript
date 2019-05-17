"use strict";

const _ = require('lodash');
const R = require('ramda');

const Person = require('./model/Person.js').Person;
const Address = require('./model/Address.js').Address;

var p1 = new Person('111-11-1111', 'Haskell', 'Curry', 1900, new Address('US'));
var p2 = new Person('222-22-2222', 'Barkley', 'Rosser', 1907, new Address('Greece'));
var p3 = new Person('333-33-3333', 'John', 'von Neumann', 1903, new Address('Hungary'));
var p4 = new Person('444-44-4444', 'Alonzo', 'Church', 1903, new Address('US'));
var p5 = null

var persons = [p1, p2, p3, p4, p5];

// Lodash.js
_.map(persons,
    s => (s !== null && s !== undefined) ? s.fullname : ''
)

// Simple map implementation
function map(arr, fn) {
    const len = arr.length,
        result = [];

    for (let idx = 0; idx < len; idx++) {
        result[idx] = fn(arr[idx])
    }
    return result;
}

console.log(map([2, 3, 1], x => x * 2))



function reduce(arr, fn, acc) {
    acc = !acc ? arr[0] ? acc;
    if (arr.length > 0) {
        const [elem, ...rest] = arr
        acc = fn(acc, elem)
        reduce(rest, fn, acc)
    } else {
        return acc
    }
}

reduce([1, 2, 3], (x, y) => x + y, )