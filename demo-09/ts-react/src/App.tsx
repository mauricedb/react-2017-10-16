import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');
import Counter from './Counter'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter label="Count:"/>
      </div>
    );
  }
}

export default App;
