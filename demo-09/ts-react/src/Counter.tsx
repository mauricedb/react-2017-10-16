import * as React from "react";

interface CounterProps {
  label: string;
}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  state = {
    count: 1
  };
  render() {
    return (
      <div>
        <div>
          {this.props.label} {this.state.count}
        </div>
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
