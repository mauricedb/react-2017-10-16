const xEl = <HTMLInputElement>document.getElementById("x");
const yEl = <HTMLInputElement>document.getElementById("y");
const resultEl = document.getElementById("result");

const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");

class Options {
  prefix: string;
}

class Calculator {
  // prefix : string;
  // constructor(prefix: string) {
  //   this.prefix = prefix;
  // }

  // constructor(private readonly  prefix: string) {
  // }

  constructor(options: Options) {}

  add(x: number, y: number): number {
    return x + y;
  }
  subtract(x: number, y: number): number {
    return x - y;
  }
}

addEl.addEventListener("click", () => {
  const x = +xEl.value;
  const y = +yEl.value;
  const result = new Calculator({ prefix: "" }).add(x, y);
  resultEl.textContent = result.toString();
});

subtractEl.addEventListener("click", () => {
  const x = +xEl.value;
  const y = +yEl.value;
  const result = new Calculator({ prefix: "" }).subtract(x, y);
  resultEl.textContent = result.toString();
});

class Person {
  name: string;
  age: null;
}

class Cat {
  name: string;
}

interface HasName {
  name: string;
}

function printIt(o: HasName) {
  console.log(o.name);
}

printIt(new Person());

function create(o: boolean): Person | Cat {
  if (o) return new Person();
  return new Cat();
}

printIt(create(true));
