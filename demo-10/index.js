"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const xEl = document.getElementById("x");
const yEl = document.getElementById("y");
const resultEl = document.getElementById("result");
const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");
if (addEl && subtractEl) {
    class Options {
    }
    class Calculator {
        constructor(resultEl) {
            this.resultEl = resultEl;
        }
        add(x, y) {
            return x + y;
        }
        subtract(x, y) {
            return x - y;
        }
        print(result) {
            if (this.resultEl) {
                this.resultEl.textContent = result.toString();
            }
        }
    }
    const calculator = new Calculator(resultEl);
    addEl.addEventListener("click", () => {
        const x = +xEl.value;
        const y = +yEl.value;
        const result = calculator.add(x, y);
        calculator.print(result);
    });
    subtractEl.addEventListener("click", () => {
        const x = +xEl.value;
        const y = +yEl.value;
        const result = calculator.subtract(x, y);
        calculator.print(result);
    });
    class Person {
    }
    class Cat {
        sleep() { }
    }
    class Dog {
        bark() { }
    }
    function useAnimal(animal) {
        console.log(animal.name);
        switch (animal.type) {
            case "dog":
                animal.bark();
                break;
            case "cat":
                animal.sleep();
                break;
        }
        if (animal instanceof Cat) {
            animal.sleep();
        }
    }
    useAnimal({
        type: "cat",
        name: "",
        sleep() { }
    });
    function printIt(o) {
        if (!o)
            return;
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
    // printIt(undefined);
    function doAsyncStuff() {
        return new Promise((resolve, reject) => setTimeout(() => {
            try {
                // throw new Error("THis should not happen");
                resolve(42);
            }
            catch (err) {
                reject(err);
            }
        }, 2000));
    }
    function oldWay() {
        console.log("Before request");
        doAsyncStuff()
            .then(e => console.log(e))
            .catch(err => console.error(err));
        console.log("After request");
    }
    function newWay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Before request");
                var result1 = doAsyncStuff();
                var result2 = doAsyncStuff();
                console.log("After request before print");
                console.log(yield result1);
                console.log(yield result2);
                console.log("After request");
            }
            catch (err) {
                console.error("OOps", err);
            }
        });
    }
    // oldWay()
    newWay();
}
