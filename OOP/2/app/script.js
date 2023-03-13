let a = {
    "text": 'Hello',
    "color": 'red',
    "bold": true,
    "show": function () {
        console.log(this.color);
    },
};

let b = {
    "fontSize": '24px',
    __proto__: a
}


let c = {
    "fontFamily": 'Verdana',
    __proto__: b
}

console.log(c);
console.log(c.bold);
console.log(c.hasOwnProperty("bold"));

// a -> b - > c