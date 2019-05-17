const R = require('ramda')

// checkType :: Type -> Object -> Object
const checkType = R.curry((typeDef, obj) => {
    if (!R.is(typeDef, obj)) {
        let type = typeof obj;
        throw new TypeError(`Type mismatch. Expected [${typeDef}] but found [${type}]`);
    }
    return obj;
})

const Tuple = function ( /* types */ ) {
    const typeInfo = Array.prototype.slice.call(arguments, 0);
    const _T = function ( /* values */ ) {
        const values = Array.prototype.slice.call(arguments, 0)
        if (values.some(v => v === null || v === undefined)) {
            throw new ReferenceError('Tuple may not have any null values')
        }
        if (values.length != typeInfo.length) {
            throw new ReferenceError('Tuple arity does not match with its prototype');
        }
        values.map(function (val, index) {
            this['_' + (index + 1)] = checkType(typeInfo[index])(val);
        }, this)
        Object.freeze(this);
    }

    _T.prototype.values = function () {
        return Object.keys(this).map((k) => this[k])
    }
    return _T;
}

const Status = Tuple(Boolean, String)

// trim :: String -> String
const trim = str => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = str => str.replace(/\-/g, '')

// isValid :: String -> String
const isValid = function (str) {
    if (str.length === 0) {
        return new Status(false, 'Invalid input. Expected non-empty value!')
    } else {
        return new Status(true, 'Success')
    }
}

const tpl1 = isValid(normalize(trim('4444-441-4444')))
console.log(tpl1);

const tpl2 = new Status(false, 'Invalid input. Expected non-empty value!')
console.log(tpl2)


const StringPair = Tuple(String, String)
const tpl3 = new StringPair('First', 'Second')
// const tpl4 = new StringPair('First', 'Second', 'Third')



function curry2(fn) {
    return function (firstArg) {
        return function (secondArg) {
            return fn(firstArg, secondArg)
        }
    }
}

const name = curry2((first, last) => new StringPair(first, last))

const n2 = name('First')('Last').values()
console.log(n2);

// console.log(first);
// console.log(last);