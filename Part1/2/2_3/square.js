function square1(x) {
    return x ** 2;
}

const square2 = function (x) {
    return x ** 2;
}

const square3 = x => x ** 2;

const square4 = {
    calc: x => x ** 2
}

console.log(`square1:${square1} => ${square1(2)}`);
console.log(`square2:${square2} => ${square2(2)}`);
console.log(`square3:${square3} => ${square3(2)}`);
console.log(`square4.calc:${square4.calc} => ${square4.calc(2)}`);