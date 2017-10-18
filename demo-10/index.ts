const xEl = <HTMLInputElement>document.getElementById("x");
const yEl = <HTMLInputElement>document.getElementById("y");
const resultEl = document.getElementById("result");

const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");

class Options {
  prefix: string;
}

class Calculator {
  constructor(private readonly resultEl) {}

  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }

  print(result) {
    this.resultEl.textContent = result;
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
  name: string;
  age: null;
}

class Cat {
  type = "cat";
  name: string;
  sleep() {}
}

class Dog {
  type = "dog";
  name: string;
  bark() {}
}

interface HasName {
  name: string;
}

function printIt(o: HasName) {
  console.log(o.name);
}

function create(o: boolean): Person | Cat {
  if (o) return new Person();
  return new Cat();
}

printIt(new Person());
printIt(create(true));
printIt(null);
printIt(undefined);
