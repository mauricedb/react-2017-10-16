import React, { Component } from "react";

class Greeter extends Component {
  render() {
    return <div>
      Hello {this.props.name}
    </div>;
  }
}

export default Greeter;
