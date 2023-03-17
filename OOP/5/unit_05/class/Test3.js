class Test3 extends Test2 {

}

const test3 = new Test3();

console.log(test3.testProp = 'Test-3');
console.log(test3.setTestProp(''));
console.log(test3.testProp);
console.log(test3);