//
const _ = require('lodash')


// helper functions
const isValid = val => val !== null || val !== undefined

// 
class Node {
    constructor(val) {
        this._val = val;
        this._parent = null;
        this._children = []
    }

    isRoot() {
        return isValid(this._parent);
    }

    get children() {
        return this._children;
    }

    hasChildren() {
        return this._children.length > 0;
    }

    get value() {
        return this._val;
    }

    set value(val) {
        this._val = val;
    }

    append(child) {
        child._parent = this;
        this._children.push(child)
        return this;
    }
}

// Recursively defined data structure
class Tree {
    constructor(root) {
        this._root = root;
    }

    static map(node, fn, tree = null) {
        node.value = fn(node.value);
        if (tree === null) {
            tree = new Tree(node)
        }

        if (node.hasChildren()) {
            _.map(node.children, function (child) {
                Tree.map(child, fn, tree);
            })
        }

        return tree
    }
    get root() {
        return this._root;
    }
}

class Student {
    constructor(firstname, lastname, zipcode, university) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._zipcode = zipcode;
        this._university = university;
    }

    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }

    get fullname() {
        return this._firstname + ' ' + this._lastname
    }

    get zipcode() {
        return this._zipcode;
    }

    set address(addr) {
        this._address = addr;
    }
    get address() {
        return this._address;
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



// instance with relations
const curry = new Node(new Student('Haskell', 'Curry', '111-11-1111', 'Penn State'));
const turing = new Node(new Student('Alan', 'Turing', '222-22-2222', 'princeton'));
const church = new Node(new Student('Alonzo', 'Church', '333-33-3333', 'princeton'));
const kleene = new Node(new Student('Stephen', 'Kleene', '444-44-4444', 'princeton'))

church.append(turing).append(kleene);
kleene.append(curry)

Tree.map(church, p => console.log(p.fullname));
// console.log(result);