import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Clock from './Clock';

class App extends Component {
  onMyClick() {
    alert('I was clicked')
  }
  render() {
    const fistName = "Jack";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React in London</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name={fistName} />
        <Clock />
        <button onClick={this.onMyClick}>Click me</button>
        <button onClick={() => alert('Me too')}>Click me</button>

      </div>
    );
  }
}


export default App;
