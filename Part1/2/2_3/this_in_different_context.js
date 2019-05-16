console.log("global", this);

class SomeClass {
    constructor() {
        this._prop = "some prop"
    }

    showProp() {
        console.log("this in object instance:", this);
    }
}
const some = new SomeClass()
some.showProp()

var obj = {
    prop: 'Some prop!',
    getProp: function () {
        return this.prop
    }
}
obj.getProp()