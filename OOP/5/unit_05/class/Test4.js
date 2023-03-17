class Test4 extends Test2 {
    set testProp(a) {
        this._testProp = a * 10;
    }
    set testValue(b) {
        this._testValue = b;
    }
    get testValue() {
        return this._testValue > 100 ? this._testValue : false;
    }
}

const test4 = new Test4();

test4.testProp = 2;
console.log(test4);
console.log(test4._testProp);

test4.testValue = 900;
console.log(test4.testValue);