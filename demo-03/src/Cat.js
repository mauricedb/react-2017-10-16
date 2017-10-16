import React, { Component } from "react";

class Cat extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
          <h2>{this.props.match.params.catName || "Garfield"}</h2>
        <img src="/cat.jpg" width="400" alt="A cute cat" />
      </div>
    );
  }
}

export default Cat;
