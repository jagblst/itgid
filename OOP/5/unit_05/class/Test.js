class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

const test1 = new Test();

test1.testProp = 'Oleksandr';
console.log(test1);
console.log(test1.testProp);