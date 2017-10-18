const xEl = <HTMLInputElement>document.getElementById("x");
const yEl = <HTMLInputElement>document.getElementById("y");
const resultEl = document.getElementById("result");

const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");

if (addEl && subtractEl) {
  class Options {
    prefix: string;
  }

  class Calculator {
    constructor(private readonly resultEl: HTMLElement | null) {}

    add(x: number, y: number) {
      return x + y;
    }
    subtract(x: number, y: number) {
      return x - y;
    }

    print(result: number) {
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
    name: string;
    age: null;
  }

  class Cat {
    type: "cat";
    name: string;
    sleep() {}
  }

  class Dog {
    type: "dog";
    name: string;
    bark() {}
  }

  function useAnimal(animal: Cat | Dog) {
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
    sleep() {}
  });

  interface HasName {
    name: string;
  }

  function printIt(o: HasName | null) {
    if (!o) return;

    console.log(o.name);
  }

  function create(o: boolean): Person | Cat {
    if (o) return new Person();
    return new Cat();
  }

  printIt(new Person());
  printIt(create(true));
  printIt(null);
  // printIt(undefined);

  function doAsyncStuff() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          // throw new Error("THis should not happen");
          resolve(42);
        } catch (err) {
          reject(err);
        }
      }, 2000)
    );
  }

  function oldWay() {
    console.log("Before request");
    doAsyncStuff()
      .then(e => console.log(e))
      .catch(err => console.error(err));
    console.log("After request");
  }

  async function newWay() {
    try {
      console.log("Before request");
      var result1 = doAsyncStuff();
      var result2 = doAsyncStuff();
      console.log("After request before print");
      console.log(await result1);
      console.log(await result2);
      console.log("After request");
    } catch (err) {
      console.error("OOps", err);
    }
  }

  // oldWay()

  newWay();
}
