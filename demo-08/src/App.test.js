import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("The App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("only renders App itself", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it("has the same snapshot", () => {
    const json = reactTestRenderer.create(<App />).toJSON();

    expect(json).toMatchSnapshot();
  });

});
