const message = 'Functional Programming is not as difficult as people think'.substring(0, 15).toLowerCase() + '@190516'

console.log(message);


const substring = (str, from, to) => str.substring(from, to)
const toLowerCase = (str) => String.prototype.toLocaleLowerCase(str)
const concat = () => String.prototype.concat(arguments)



console.log(concat(toLowerCase(substring('Functional Programming is not as difficult as people think', 0, 10)), 'is fun'))