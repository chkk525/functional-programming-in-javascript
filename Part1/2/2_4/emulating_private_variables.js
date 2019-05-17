const MyCounter = (function MyCounter(exp) {
    let _myPrivateVar = 0

    exp.increment = function () {
        _myPrivateVar++
        console.log(_myPrivateVar);
    }

    exp.decrement = function () {
        _myPrivateVar--
        console.log(_myPrivateVar);
    }
    return exp
}({}))

MyCounter.increment()
MyCounter.increment()
MyCounter.decrement()
MyCounter.increment()
MyCounter.increment()
MyCounter.increment()
MyCounter.increment()