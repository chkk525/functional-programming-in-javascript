function zipCode(code, location) {
  let _code = code;
  let _location = location;

  return {
    code: () => _code,
    location: () => _location
  };
}

const princetonZip = zipCode("08544", "3345");
const p_code = princetonZip.code();
console.log(p_code);

function makeAddFunc(amount) {
  function add(number) {
    return number + amount;
  }
  return add;
}

const addTo10 = makeAddFunc(10);
console.log(addTo10(6));

const outer_count = 365;

function makeCounter(initialValue) {
  let count = initialValue;

  return {
    increment: () => count++,
    decrement: () => count--,
    showCount: () =>
      console.log(
        `initial:${initialValue}, count:${count}, outer:${outer_count}`
      )
  };
}

let counter1 = makeCounter(10);
let counter2 = makeCounter(1);

counter1.increment();
counter1.increment();
counter1.increment();

counter2.decrement();

counter1.showCount();
counter2.showCount();
