function applyOperation(a, b, opt) {
    return opt(a, b)
}

const add = (a, b) => a + b;
const multiplier = (a, b) => a * b;

const add_result = applyOperation(2, 3, add)
console.log(add_result);

const mul_result = applyOperation(2, 3, multiplier)
console.log(mul_result);

const mulN = n => x => x * n;
// mulN(6) = x => x * 6

console.log(mulN(6)(3));