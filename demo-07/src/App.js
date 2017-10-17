import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Movies } from "./movies";

class App extends Component {
  state = {
    count: 0
  };
  buttonClicked = () => {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });

    this.setState((state, props) => ({ count: state.count + 1 }));
    this.setState((state, props) => ({ count: state.count + 1 }));
  };
  render() {
    console.log('render App')
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Movies />
        {this.state.count}
        <button onClick={this.buttonClicked}>CLick me</button>
      </div>
    );
  }
}

export default App;
