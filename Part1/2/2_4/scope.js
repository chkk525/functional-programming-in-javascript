var x = "outer x"

function parentFunction() {
    // var x = "inner x"

    function innerFunction() {
        console.log(x);
    }
    return innerFunction;
}

var inner = parentFunction()
inner()


if (true) {
    var y = "Block scope isn't available in Javascript"
}

console.log(y);