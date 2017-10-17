const increment = (n = 1) => ({
  type: "INCREMENT",
  payload: n
});

const decrement = (n = 1) => ({
  type: "DECREMENT",
  payload: n
});

// var action = increment(5)

const store = {
  counter: 0
};

const listener = [];

const dispatch = action => {
  switch (action.type) {
    case "INCREMENT":
      store.counter += action.payload;
      break;
    case "DECREMENT":
      store.counter -= action.payload;
      break;
  }

  listener.forEach(l => l(store));
};

listener.push(console.log);

// console.log(store)
dispatch(increment());
// console.log(store)

dispatch(increment(5));

listener.push(data => console.log('Second ', data));

setTimeout(() => dispatch(increment(5)), 1000);
