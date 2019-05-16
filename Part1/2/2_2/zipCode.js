function zipCode(code, location) {
    let _code = code;
    let _location = location;

    return {
        code: function () {
            return _code;
        },

        location: function () {
            return _location;
        },

        fromString: function (str) {
            let parts = str.split('-');
            return zipCode(parts[0], parts[1]);
        },

        toString: function () {
            return _code + _location
        }
    }

}


const princetonZip = zipCode('08544', '3345');

console.log("code:", princetonZip.code())
console.log("location:", princetonZip.location())
console.log("zip string:", princetonZip.toString())

// princetonZip.code = "3151"
// console.log("code:", princetonZip.code())
// -> TypeError: princetonZip.code is not a function