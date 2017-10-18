const xEl = document.getElementById("x");
const yEl = document.getElementById("y");
const resultEl = document.getElementById("result");

const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");

class Calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
}

addEl.addEventListener("click", () => {
  const x = xEl.value;
  const y = yEl.value;
  const result = new Calculator().add(x, y);
  resultEl.textContent = result;
});

subtractEl.addEventListener("click", () => {
  const x = xEl.value;
  const y = yEl.value;
  const result = new Calculator().subtract(x, y);
  resultEl.textContent = result;
});
