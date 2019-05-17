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


var arr = [1, 2, 3, 4]

function processArr() {
    function multipleBy10(val) {
        i = 10
        // i moves to the top of the function,
        // and becomes part of the multipleBy10 functions's closure

        return val * i;
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = multipleBy10(arr[i]);
    }

    return arr;
}

console.log(processArr());


// let keyword makes a value invisible from outside
for (let s = 0; s < 10; s++) {
    console.log(s);
}

console.log(s);