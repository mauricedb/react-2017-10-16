var xEl = document.getElementById("x");
var yEl = document.getElementById("y");
var resultEl = document.getElementById("result");
var addEl = document.getElementById("add");
var subtractEl = document.getElementById("subtract");
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
var Calculator = /** @class */ (function () {
    // prefix : string;
    // constructor(prefix: string) {
    //   this.prefix = prefix;
    // }
    // constructor(private readonly  prefix: string) {
    // }
    function Calculator(options) {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
addEl.addEventListener("click", function () {
    var x = +xEl.value;
    var y = +yEl.value;
    var result = new Calculator({ prefix: "" }).add(x, y);
    resultEl.textContent = result.toString();
});
subtractEl.addEventListener("click", function () {
    var x = +xEl.value;
    var y = +yEl.value;
    var result = new Calculator({ prefix: "" }).subtract(x, y);
    resultEl.textContent = result.toString();
});
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
function printIt(o) {
    console.log(o.name);
}
printIt(new Person());
function create(o) {
    if (o)
        return new Person();
    return new Cat();
}
printIt(create(true));
