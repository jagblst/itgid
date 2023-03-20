class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(val) {
       return typeof val === 'number';
    }
    static isInt(num) {
        return Number.isInteger(num);
    }
    static isFloat(num) {
        return !Number.isInteger(num);
    }
    static isChar(char) {
        return char.length === 1;
    }
    static isString(val) {
        return typeof val === 'string';
    }
    static isBoolean(val) {
        return val === true || val === false;
    }
    static isArray(obj) {
        return Array.isArray(obj);
    }
    static toMoney(num) {
        let [firstPart, secondPart] = num.toFixed(2).split('.');
        let formattedFirstPart = "";
        for (let i = 0; i < firstPart.length; i++) {
          if ((firstPart.length - i) % 3 === 0) {
            formattedFirstPart += ' ';
          }
          formattedFirstPart += firstPart[i];
        }
        return `${formattedFirstPart.trim()}.${secondPart || '00'}`;
    }
}   
console.log(Validate.isNumber(2345))
console.log(Validate.isInt(23456.001))
console.log(Validate.isFloat(23456))
console.log(Validate.isChar('72'))
console.log(Validate.isString('false'))
console.log(Validate.isBoolean(false))
console.log(Validate.isArray([23456.99]))
  console.log(Validate.toMoney(5.89))