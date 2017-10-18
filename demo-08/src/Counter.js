import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  
  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <div />
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
