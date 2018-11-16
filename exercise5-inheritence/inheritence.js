var n = 1;

(function printSomething() {
    n = 2;
    console.log('1: ' + n);
    var n = 3;
    console.log('2: ' + n);
})();

console.log('3: ' + n);

function f2() {
    'use strict';
    return this;
}

function f1() {
    this.echo = 'Hello World!';
    return this;
}

console.log(new f1());
console.log(new f1().echo);
console.log(f2());

function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {
    a: 1,
    b: 3
};

console.log(add.call(o, 5, 7)); // 1 + 3 + 5 + 7 = 16

console.log(add.apply(o, [10, 20])); // 1 + 3 + 10 + 20 = 34

function writeLine() {
    console.log(this.text);
}

var a = writeLine.bind({
    text: "hello world"
})

var b = writeLine.bind({
    text: "wersja b"
})

a(); // hello world
b(); // wersja b

function insideFunction() {
    this.text = "test";
    console.log(this.text);
}

function outsideFunction() {
    this.text = "outside";
    insideFunction();
}

outsideFunction(); // test

var outsideFunctionFixed = function() {
    insideFunction.call({
        text: "outside"
    });
};

outsideFunctionFixed(); // test?