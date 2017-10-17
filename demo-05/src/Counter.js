import React, { Component } from "react";

import { increment, decrement } from "./actions";

import {connect} from 'react-redux'


class Counter extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <div>Count: {this.props.counter}</div>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)

    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
