import React from "react";
import { shallow } from "enzyme";
import reactTestRenderer from "react-test-renderer";
import Counter from "./Counter";

describe("The Counter component", () => {
  it("renders without crashing", () => {
    shallow(<Counter />);
  });

  it("has a state with count = 0", () => {
    const counter = shallow(<Counter />);
    expect(counter.state()).toEqual({ count: 0 });
  });

  it("has a state with count = 0", () => {
    const counter = shallow(<Counter />);
    expect(counter.state("count")).toBe(0);
  });

  it("has a state with count = 2 after clicking twice", () => {
    const counter = shallow(<Counter />);
    counter.find("button").simulate("click");
    counter.find("button").simulate("click");
    expect(counter.state("count")).toBe(2);
  });

  it("has the same snapshot", () => {
    const json = reactTestRenderer.create(<Counter />).toJSON();

    expect(json).toMatchSnapshot();
  });
});
