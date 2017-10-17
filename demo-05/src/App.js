import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import countReducer from "./countReducer";

const personReducer = (state = {}, action) => {};

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE_PERSON":
      return state.map(person => {
        if (person.if === action.payload.id) {
          return personReducer(person, action);
        }
        return person;
      });
  }
  return state;
};

const store = createStore(
  combineReducers({
    counter: countReducer,
    people: peopleReducer
  })
);

// store = action => ( {
//   counter : countReducer(store.counter, action)
// });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
