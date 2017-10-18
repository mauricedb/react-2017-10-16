import React, { Component } from "react";

class Greeter extends Component {
  render() {
    return <div className="greeter">
      Hello {this.props.name}
    </div>;
  }
}

export default Greeter;
