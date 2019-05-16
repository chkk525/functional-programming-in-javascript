function negate(func) {
    return function () {
        return !func.apply(null, arguments)
    }
}

const isNull = val => val === null

const isNotNull = negate(isNull)

console.log(isNull(null));
console.log(isNotNull(null));