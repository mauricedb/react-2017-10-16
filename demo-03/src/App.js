import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Cat from "./Cat";
import Dog from "./Dog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
          <div>
            <nav>
              <Link to="/cat">Cat </Link>
              <Link to="/cat/zorro">Zorro </Link>
              <Link to="/dog">Dog </Link>
            </nav>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <div>At the home page</div>}
              />
              <Route path="/cat" exact component={Cat} />
              <Route path="/cat/:catName" exact component={Cat} />
              <Route path="/dog" component={Dog} />
              <Route path="/dog" component={Cat} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
