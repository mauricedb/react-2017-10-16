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
    function Calculator(resultEl) {
        this.resultEl = resultEl;
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.print = function (result) {
        this.resultEl.textContent = result;
    };
    return Calculator;
}());
var calculator = new Calculator(resultEl);
addEl.addEventListener("click", function () {
    var x = +xEl.value;
    var y = +yEl.value;
    var result = calculator.add(x, y);
    calculator.print(result);
});
subtractEl.addEventListener("click", function () {
    var x = +xEl.value;
    var y = +yEl.value;
    var result = calculator.subtract(x, y);
    calculator.print(result);
});
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        this.type = "cat";
    }
    Cat.prototype.sleep = function () { };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.type = "dog";
    }
    Dog.prototype.bark = function () { };
    return Dog;
}());
function printIt(o) {
    console.log(o.name);
}
function create(o) {
    if (o)
        return new Person();
    return new Cat();
}
printIt(new Person());
printIt(create(true));
printIt(null);
printIt(undefined);
